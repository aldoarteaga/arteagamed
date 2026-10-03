import type { SupportedLocale } from '@eart/locales';

/**
 * Locale settings shared by the middleware, server components and the
 * client-side language selector (so this file must stay free of server APIs).
 */

/** Spanish is the default: every visitor sees it until they pick another language. */
export const DEFAULT_LOCALE: SupportedLocale = 'es';

/** Stores the visitor's explicit language choice (set only by the language selector). */
export const LOCALE_COOKIE = 'eart_locale';
