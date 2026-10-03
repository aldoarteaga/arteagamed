import { z } from 'zod';

/**
 * Server-side environment, validated once at startup. Import `config` from here;
 * never read `process.env` elsewhere in the marketing site.
 */
const EnvSchema = z.object({
  SITE_URL: z.string().url().default('https://arteagamed.com'),
  /**
   * Endpoint that receives contact-form submissions as JSON (e.g. the API's
   * contact route or an SES-backed Lambda). When unset, the form tells visitors
   * to phone instead of pretending the message was sent.
   */
  CONTACT_FORWARD_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export const config = EnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
  CONTACT_FORWARD_URL: process.env.CONTACT_FORWARD_URL || undefined,
  NODE_ENV: process.env.NODE_ENV,
});
