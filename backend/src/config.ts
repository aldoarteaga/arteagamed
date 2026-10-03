import { z } from 'zod';

const ConfigSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3001),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),

  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),

  AWS_REGION: z.string().default('eu-west-1'),

  S3_DOCUMENTS_BUCKET: z.string().min(1),
  S3_PRESIGN_EXPIRY_SECONDS: z.coerce.number().int().positive().default(900),

  COGNITO_USER_POOL_ID: z.string().min(1),
  COGNITO_CLIENT_ID: z.string().min(1),

  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  STRIPE_PRICE_BASIC: z.string().startsWith('price_'),
  STRIPE_PRICE_INTEGRAL: z.string().startsWith('price_'),
  STRIPE_PRICE_CONTINUADA: z.string().startsWith('price_'),
  STRIPE_PRICE_AVANZADA: z.string().startsWith('price_'),

  NOTIFICATION_EMAIL: z.string().email(),
});

const result = ConfigSchema.safeParse(process.env);

if (!result.success) {
  console.error('Invalid environment variables:');
  console.error(result.error.flatten().fieldErrors);
  process.exit(1);
}

export const config = result.data;
export type Config = typeof config;
