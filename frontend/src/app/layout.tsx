import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';
import { config } from '@/config';
import { OG_LOCALES, getDictionary, getLocale } from '@/i18n';
import './globals.css';

// Designed by the Braille Institute for low-vision readers; see frontend/DESIGN.md.
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-atkinson',
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return {
    metadataBase: new URL(config.SITE_URL),
    title: { default: t.meta.title, template: t.meta.titleTemplate },
    description: t.meta.description,
    applicationName: 'ArteagaMed',
    robots: { index: true, follow: true },
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      siteName: 'ArteagaMed',
      title: t.meta.title,
      description: t.meta.description,
      locale: OG_LOCALES[locale],
      url: '/',
    },
    twitter: { card: 'summary_large_image', title: t.meta.title, description: t.meta.description },
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = {
  themeColor: '#174A5B',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={atkinson.variable}>
      <body>{children}</body>
    </html>
  );
}
