import type { PlanId } from '@eart/shared-types';

/**
 * Business facts shown on the public site. Keep these accurate: only list what
 * ArteagaMed actually offers, where it actually operates.
 */
export const site = {
  name: 'ArteagaMed',
  phone: {
    display: '+34 638 948 502',
    href: 'tel:+34638948502',
    e164: '+34638948502',
  },
  /** TODO(owner): set the public contact address. Hidden from the site while null. */
  email: null as string | null,
  /** TODO(owner): set a WhatsApp Business number if one is used. Hidden while null. */
  whatsapp: null as string | null,
  /** Towns currently served. Do not add towns that aren't covered. */
  towns: ['Calpe', 'Moraira', 'Benissa', 'Teulada', 'Benidorm'],
} as const;

/** Display order of plans; prices live in PLAN_DETAILS (@eart/shared-types). */
export const PLAN_ORDER: readonly PlanId[] = ['basic', 'integral', 'continuada', 'avanzada'];
export const RECOMMENDED_PLAN: PlanId = 'integral';

export const LEGAL_SLUGS = [
  'terms',
  'privacy',
  'cookies',
  'membership-terms',
  'service-limitations',
  'emergency',
] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];

/** In-page section ids, shared by the nav and the sections themselves. */
export const SECTION = {
  how: 'how-it-works',
  services: 'services',
  membership: 'membership',
  teleassistance: 'teleassistance',
  faq: 'faq',
  contact: 'contact',
} as const;
