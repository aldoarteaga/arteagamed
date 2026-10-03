import './config.js'; // validate env vars first
import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import { createClient } from 'redis';
import { config } from './config.js';
import authPlugin from './plugins/auth.js';
import errorHandlerPlugin from './plugins/errorHandler.js';
import healthRoutes from './routes/v1/health.js';
import patientRoutes from './routes/v1/patients.js';
import subscriptionRoutes from './routes/v1/subscriptions.js';
import documentRoutes from './routes/v1/documents.js';
import stripeWebhookRoutes from './routes/v1/webhooks/stripe.js';

const fastify = Fastify({
  logger: {
    level: config.LOG_LEVEL,
    serializers: {
      req(request) {
        return { method: request.method, url: request.url, requestId: request.id };
      },
    },
  },
  trustProxy: true,
  bodyLimit: 1_048_576, // 1 MB default; stripe webhook overrides to 65 KB
});

// Redis client — attach to fastify instance for use in plugins/routes
const redis = createClient({ url: config.REDIS_URL });
redis.on('error', (err) => fastify.log.error({ err }, 'Redis client error'));
await redis.connect();
fastify.decorate('redis', redis);

// Plugins
await fastify.register(helmet);
await fastify.register(cors, { origin: config.NODE_ENV === 'production' ? 'https://app.arteagamed.com' : true });
await fastify.register(rateLimit, { max: 100, timeWindow: '1 minute' });
await fastify.register(authPlugin);
await fastify.register(errorHandlerPlugin);

// Stripe webhook needs raw body — register before body parser
await fastify.register(stripeWebhookRoutes, { prefix: '/v1' });

// Routes
await fastify.register(healthRoutes);
await fastify.register(patientRoutes, { prefix: '/v1' });
await fastify.register(subscriptionRoutes, { prefix: '/v1' });
await fastify.register(documentRoutes, { prefix: '/v1' });

// Start
try {
  await fastify.listen({ port: config.PORT, host: '0.0.0.0' });
} catch (err) {
  fastify.log.fatal(err, 'Server failed to start');
  process.exit(1);
}

// Graceful shutdown
async function shutdown() {
  fastify.log.info('Shutting down...');
  await fastify.close();
  await redis.quit();
  process.exit(0);
}

process.on('SIGTERM', () => { void shutdown(); });
process.on('SIGINT', () => { void shutdown(); });
