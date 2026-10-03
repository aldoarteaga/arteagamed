/** Membership plans. Prices in euro cents; the single source of truth for every price on the site. */
export type PlanId = 'basic' | 'integral' | 'continuada' | 'avanzada';

export const PLAN_DETAILS: Record<
  PlanId,
  { monthlyPriceCents: number; firstMonthPriceCents: number }
> = {
  basic: { monthlyPriceCents: 6500, firstMonthPriceCents: 10000 },
  integral: { monthlyPriceCents: 16000, firstMonthPriceCents: 20000 },
  continuada: { monthlyPriceCents: 35000, firstMonthPriceCents: 40000 },
  avanzada: { monthlyPriceCents: 75000, firstMonthPriceCents: 80000 },
};

/** Display order of plans. */
export const PLAN_ORDER: readonly PlanId[] = ['basic', 'integral', 'continuada', 'avanzada'];
export const RECOMMENDED_PLAN: PlanId = 'integral';
