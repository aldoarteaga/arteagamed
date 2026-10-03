import type { Viewport } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';
import { getDictionary, localePath, type Locale } from '@/i18n';
import { SECTION, site } from '@/content/site';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { StickyBar } from './StickyBar';
import '@/app/globals.css';

// Designed by the Braille Institute for low-vision readers; see frontend/DESIGN.md.
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-atkinson',
});

export const viewport: Viewport = {
  themeColor: '#174A5B',
  width: 'device-width',
  initialScale: 1,
};

/**
 * The <html> document and site chrome, shared by both root layouts:
 * app/(es) for Spanish at "/" and app/[locale] for the other languages.
 */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale);

  return (
    <html lang={locale} className={atkinson.variable}>
      <body>
        <a href="#main" className="skip-link">
          {t.nav.skip}
        </a>
        <SiteHeader t={t} locale={locale} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter t={t} locale={locale} />
        <StickyBar
          label={t.stickyBar.label}
          watchId="hero"
          call={{
            href: site.phone.href,
            label: t.stickyBar.call,
            ariaLabel: `${t.common.callUs}, ${site.phone.display}`,
          }}
          membership={{
            href: `${localePath(locale)}#${SECTION.membership}`,
            label: t.stickyBar.membership,
          }}
        />
      </body>
    </html>
  );
}
