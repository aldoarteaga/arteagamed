import type { MetadataRoute } from 'next';
import { config } from '@/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/portal', '/login', '/register'] },
    sitemap: `${config.SITE_URL}/sitemap.xml`,
  };
}
