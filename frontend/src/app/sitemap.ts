import type { MetadataRoute } from 'next';
import { config } from '@/config';
import { LEGAL_SLUGS } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.SITE_URL;
  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/teleassistance`, changeFrequency: 'monthly', priority: 0.7 },
    ...LEGAL_SLUGS.map((slug) => ({ url: `${base}/legal/${slug}`, priority: 0.3 })),
  ];
}
