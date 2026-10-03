/**
 * Locale list and URL helpers. Kept free of dictionaries so client components
 * (the language selector) can import it without shipping every translation.
 */
export type Locale = 'es' | 'en' | 'nl' | 'no' | 'fi';

/**
 * Spanish is the default and lives at the site root (`/`); every other
 * language lives under its own prefix (`/en`, `/nl`, `/no`, `/fi`).
 */
export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALES: readonly Locale[] = ['es', 'en', 'nl', 'no', 'fi'];
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  nl: 'Nederlands',
  no: 'Norsk',
  fi: 'Suomi',
};

/** Open Graph locale for each language. */
export const OG_LOCALES: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_GB',
  nl: 'nl_NL',
  no: 'nb_NO',
  fi: 'fi_FI',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * URL of a page in a given language. `path` is the language-neutral path:
 * '' for the homepage, '/teleassistance', '/legal/privacy', …
 */
export function localePath(locale: Locale, path = ''): string {
  if (locale === DEFAULT_LOCALE) return path || '/';
  return `/${locale}${path}`;
}

/** Language-neutral path of a URL pathname, e.g. '/en/teleassistance' → '/teleassistance'. */
export function neutralPath(pathname: string): string {
  const [, first = '', ...rest] = pathname.split('/');
  const path = isLocale(first) && first !== DEFAULT_LOCALE ? `/${rest.join('/')}` : pathname;
  return path === '/' ? '' : path.replace(/\/$/, '');
}

/** The same page in every language, for hreflang alternates. */
export function alternatesFor(path = ''): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)])) as Record<Locale, string>;
}
