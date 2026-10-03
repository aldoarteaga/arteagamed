'use server';

import { z } from 'zod';
import { PlanId } from '@eart/shared-types';
import { config } from '@/config';

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v === '' || /^\+?[0-9 ()-]{7,20}$/.test(v)),
  plan: z.union([PlanId, z.literal('')]),
  message: z.string().trim().min(5).max(3000),
  consent: z.literal('on'),
});

export type ContactField = 'name' | 'email' | 'phone' | 'message' | 'consent';

export type ContactState =
  | { status: 'idle' }
  | { status: 'invalid'; errors: ContactField[]; values: Record<string, string> }
  | { status: 'sent' }
  | { status: 'unavailable' };

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real people never see or fill this field.
  if (formData.get('website')) return { status: 'sent' };

  const field = (key: string) => {
    const value = formData.get(key);
    return typeof value === 'string' ? value : '';
  };
  const raw = {
    name: field('name'),
    email: field('email'),
    phone: field('phone'),
    plan: field('plan'),
    message: field('message'),
    consent: field('consent'),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors = [
      ...new Set(parsed.error.issues.map((i) => i.path[0]).filter((p) => p !== 'plan')),
    ] as ContactField[];
    return { status: 'invalid', errors, values: raw };
  }

  if (!config.CONTACT_FORWARD_URL) return { status: 'unavailable' };

  try {
    const res = await fetch(config.CONTACT_FORWARD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...parsed.data,
        consent: true,
        consentAt: new Date().toISOString(),
        source: 'website-contact',
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Contact forward failed with ${res.status}`);
    return { status: 'sent' };
  } catch (err) {
    // Never log the submission itself: it may contain health information.
    console.error(
      JSON.stringify({
        level: 'error',
        message: 'contact_forward_failed',
        error: (err as Error).message,
        service: 'web',
        env: config.NODE_ENV,
      }),
    );
    return { status: 'unavailable' };
  }
}
