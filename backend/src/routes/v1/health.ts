import type { FastifyInstance } from 'fastify';
import { checkDbConnection } from '../../db/index.js';

export default async function healthRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/health',
    { config: { public: true } },
    async (_request, reply) => {
      try {
        await checkDbConnection();
        return reply.send({ status: 'ok', timestamp: new Date().toISOString() });
      } catch {
        return reply.status(503).send({ status: 'error', timestamp: new Date().toISOString() });
      }
    },
  );
}
