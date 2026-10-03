import { z } from 'zod';

export const PlanId = z.enum(['basic', 'integral', 'continuada', 'avanzada']);
export type PlanId = z.infer<typeof PlanId>;

export const PLAN_DETAILS = {
  basic: {
    id: 'basic' as const,
    monthlyPriceCents: 6500,
    firstMonthPriceCents: 10000,
    stripePriceIdEnvKey: 'STRIPE_PRICE_BASIC',
  },
  integral: {
    id: 'integral' as const,
    monthlyPriceCents: 16000,
    firstMonthPriceCents: 20000,
    stripePriceIdEnvKey: 'STRIPE_PRICE_INTEGRAL',
  },
  continuada: {
    id: 'continuada' as const,
    monthlyPriceCents: 35000,
    firstMonthPriceCents: 40000,
    stripePriceIdEnvKey: 'STRIPE_PRICE_CONTINUADA',
  },
  avanzada: {
    id: 'avanzada' as const,
    monthlyPriceCents: 75000,
    firstMonthPriceCents: 80000,
    stripePriceIdEnvKey: 'STRIPE_PRICE_AVANZADA',
  },
} as const;

export const CreateSubscriptionSchema = z.object({
  planId: PlanId,
  paymentMethodId: z.string().startsWith('pm_'),
});

export type CreateSubscription = z.infer<typeof CreateSubscriptionSchema>;

export const SubscriptionStatusSchema = z.object({
  stripeCustomerId: z.string().nullable(),
  stripeSubscriptionId: z.string().nullable(),
  status: z.enum(['active', 'past_due', 'canceled', 'trialing', 'none']),
  planId: PlanId.nullable(),
  currentPeriodEnd: z.string().datetime().nullable(),
});

export type SubscriptionStatus = z.infer<typeof SubscriptionStatusSchema>;
