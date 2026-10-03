import type { MetadataRoute } from 'next';
import { config } from '@/config';
import { LEGAL_SLUGS } from '@/content/site';
import { alternatesFor, LOCALES, localePath } from '@/i18n/locales';

export const dynamic = 'force-static';

/** Every page in every language, each listing its translations (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/teleassistance', priority: 0.7 },
    ...LEGAL_SLUGS.map((slug) => ({ path: `/legal/${slug}`, priority: 0.3 })),
  ];
  const abs = (href: string) => `${config.SITE_URL}${href}`;

  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      Object.entries(alternatesFor(path)).map(([l, href]) => [l, abs(href)]),
    );
    return LOCALES.map((locale) => ({
      url: abs(localePath(locale, path)),
      priority,
      alternates: { languages },
    }));
  });
}
