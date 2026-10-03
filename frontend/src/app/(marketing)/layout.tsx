import { getDictionary, getLocale } from '@/i18n';
import { SECTION, site } from '@/content/site';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { StickyBar } from '@/components/layout/StickyBar';

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <SiteHeader t={t} locale={locale} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter t={t} />
      <StickyBar
        label={t.stickyBar.label}
        watchId="hero"
        call={{
          href: site.phone.href,
          label: t.stickyBar.call,
          ariaLabel: `${t.common.callUs}, ${site.phone.display}`,
        }}
        membership={{ href: `/#${SECTION.membership}`, label: t.stickyBar.membership }}
      />
    </>
  );
}
