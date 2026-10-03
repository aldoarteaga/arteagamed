import { cookies, headers } from 'next/headers';
import type { SupportedLocale } from '@eart/locales';
import { DEFAULT_LOCALE, LOCALE_COOKIE } from './config';
import en from './dictionaries/en';

export type Dictionary = typeof en;
export type { SupportedLocale };

/** Every locale the platform supports, in the order shown in the language selector. */
export const ALL_LOCALES: readonly SupportedLocale[] = ['es', 'en', 'nl', 'no', 'fi'];

/**
 * Marketing dictionaries. Each file mirrors en.ts and is checked with
 * `satisfies Dictionary`, so a missing key fails the type check.
 */
const dictionaries: Partial<Record<SupportedLocale, () => Promise<Dictionary>>> = {
  en: () => Promise.resolve(en),
  es: () => import('./dictionaries/es').then((m) => m.default),
  nl: () => import('./dictionaries/nl').then((m) => m.default),
  no: () => import('./dictionaries/no').then((m) => m.default),
  fi: () => import('./dictionaries/fi').then((m) => m.default),
};

/** Open Graph locale for each language. */
export const OG_LOCALES: Record<SupportedLocale, string> = {
  en: 'en_GB',
  es: 'es_ES',
  nl: 'nl_NL',
  no: 'nb_NO',
  fi: 'fi_FI',
};

export const AVAILABLE_LOCALES = ALL_LOCALES.filter((l) => l in dictionaries);
export { DEFAULT_LOCALE, LOCALE_COOKIE };

export const LOCALE_NAMES: Record<SupportedLocale, string> = {
  en: 'English',
  es: 'Español',
  nl: 'Nederlands',
  no: 'Norsk',
  fi: 'Suomi',
};

function isSupported(value: string | undefined): value is SupportedLocale {
  return !!value && (ALL_LOCALES as readonly string[]).includes(value);
}

/** The visitor's chosen language (cookie, forwarded by the middleware), else Spanish. */
export async function getLocale(): Promise<SupportedLocale> {
  const preferred =
    (await cookies()).get(LOCALE_COOKIE)?.value ?? (await headers()).get('x-locale') ?? '';
  return isSupported(preferred) && dictionaries[preferred] ? preferred : DEFAULT_LOCALE;
}

export async function getDictionary(locale?: SupportedLocale): Promise<Dictionary> {
  const load = dictionaries[locale ?? (await getLocale())] ?? dictionaries[DEFAULT_LOCALE]!;
  return load();
}
