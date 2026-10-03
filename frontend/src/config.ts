import { z } from 'zod';

/**
 * Build-time environment, validated once. Import `config` from here;
 * never read `process.env` elsewhere in the site.
 */
const EnvSchema = z.object({
  SITE_URL: z.string().url().default('https://arteagamed.com'),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export const config = EnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
});
