import type { Metadata } from 'next';
import { config } from '@/config';
import { alternatesFor, getDictionary, localePath, OG_LOCALES, type Locale } from '@/i18n';

/**
 * Metadata for a page in one language: canonical URL, hreflang alternates for
 * every language (Spanish is x-default) and Open Graph data.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  page?: { title: string; description: string },
): Metadata {
  const t = getDictionary(locale);
  const title = page?.title ?? t.meta.title;
  const description = page?.description ?? t.meta.description;
  const alternates = alternatesFor(path);

  return {
    metadataBase: new URL(config.SITE_URL),
    title: page ? { absolute: t.meta.titleTemplate.replace('%s', page.title) } : title,
    description,
    applicationName: 'ArteagaMed',
    robots: { index: true, follow: true },
    alternates: {
      canonical: localePath(locale, path),
      languages: { ...alternates, 'x-default': alternates.es },
    },
    openGraph: {
      type: 'website',
      siteName: 'ArteagaMed',
      title,
      description,
      locale: OG_LOCALES[locale],
      url: localePath(locale, path),
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
    formatDetection: { telephone: true },
  };
}
