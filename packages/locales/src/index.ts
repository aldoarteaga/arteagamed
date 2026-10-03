import type { Translations } from './types.js';

export type { Translations };
export type SupportedLocale = 'es' | 'en' | 'nl' | 'no' | 'fi';

// Lazy-load locale files to keep bundle size small in the browser.
// Each file exports its dictionary under the locale code (e.g. `export const fi`).
const loaders: Record<SupportedLocale, () => Promise<Translations>> = {
  es: () => import('./es.js').then((m) => m.es),
  en: () => import('./en.js').then((m) => m.en),
  nl: () => import('./nl.js').then((m) => m.nl),
  no: () => import('./no.js').then((m) => m.no),
  fi: () => import('./fi.js').then((m) => m.fi),
};

export function loadLocale(locale: SupportedLocale): Promise<Translations> {
  return loaders[locale]();
}

/** Country-code → locale mapping used for IP geolocation detection */
export const COUNTRY_TO_LOCALE: Record<string, SupportedLocale> = {
  ES: 'es',
  NL: 'nl',
  BE: 'nl',
  NO: 'no',
  SE: 'no',
  DK: 'no',
  FI: 'fi',
};

export function countryToLocale(countryCode: string): SupportedLocale {
  return COUNTRY_TO_LOCALE[countryCode.toUpperCase()] ?? 'en';
}

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  es: 'ES',
  en: 'EN',
  nl: 'NL',
  no: 'NO',
  fi: 'FI',
};
