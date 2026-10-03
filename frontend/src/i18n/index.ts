import en from './dictionaries/en';
import es from './dictionaries/es';
import fi from './dictionaries/fi';
import nl from './dictionaries/nl';
import no from './dictionaries/no';
import type { Locale } from './locales';

export * from './locales';

export type Dictionary = typeof en;

/** Each dictionary mirrors en.ts and is checked with `satisfies Dictionary`. */
const dictionaries: Record<Locale, Dictionary> = { es, en, nl, no, fi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
