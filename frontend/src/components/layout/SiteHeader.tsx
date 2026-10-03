import type { Dictionary } from '@/i18n';
import { LOCALES, LOCALE_NAMES, localePath, type Locale } from '@/i18n/locales';
import { SECTION, site } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
import styles from './SiteHeader.module.css';

export type NavItem = { href: string; label: string };

export function navItems(t: Dictionary['nav'], locale: Locale): NavItem[] {
  const home = localePath(locale);
  const anchor = (id: string) => `${home}#${id}`;
  return [
    { href: home, label: t.home },
    { href: anchor(SECTION.how), label: t.howItWorks },
    { href: anchor(SECTION.services), label: t.services },
    { href: anchor(SECTION.membership), label: t.membership },
    { href: anchor(SECTION.teleassistance), label: t.teleassistance },
    { href: anchor(SECTION.faq), label: t.faq },
    { href: anchor(SECTION.contact), label: t.contact },
  ];
}

export function SiteHeader({ t, locale }: { t: Dictionary; locale: Locale }) {
  const items = navItems(t.nav, locale);
  const membershipHref = `${localePath(locale)}#${SECTION.membership}`;
  const languages = LOCALES.map((code) => ({ code, name: LOCALE_NAMES[code] }));
  const language = (
    <LanguageSelector current={locale} languages={languages} label={t.nav.language} />
  );

  return (
    <>
      <div className={styles.utility}>
        <div className={`container ${styles.utilityInner}`}>
          <a href={site.phone.href} className={styles.utilityPhone}>
            <Icon name="phone" size={20} />
            <span>
              {t.nav.utilityPhone} <strong>{site.phone.display}</strong>
            </span>
          </a>
          <span className={styles.utilityEmergency}>
            <Icon name="alert" size={20} />
            {t.contact.emergencyTitle}
          </span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <Logo href={localePath(locale)} label={`${site.name}, ${t.nav.home}`} />

          <nav aria-label={t.nav.mainLabel} className={styles.desktopNav}>
            <ul role="list" className={styles.links}>
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <div className={styles.desktopOnly}>{language}</div>
            <div className={styles.desktopOnly}>
              <ButtonLink href={membershipHref} compact>
                {t.nav.getMembership}
              </ButtonLink>
            </div>
            <a
              href={site.phone.href}
              className={styles.callButton}
              aria-label={`${t.common.callUs}, ${site.phone.display}`}
            >
              <Icon name="phone" size={24} />
              <span>{t.stickyBar.call}</span>
            </a>
            <MobileMenu
              items={items}
              openLabel={t.nav.openMenu}
              closeLabel={t.nav.closeMenu}
              navLabel={t.nav.mainLabel}
              cta={{ href: membershipHref, label: t.nav.getMembership }}
              phone={{ href: site.phone.href, label: `${t.common.callUs}: ${site.phone.display}` }}
            >
              {language}
            </MobileMenu>
          </div>
        </div>
      </header>
    </>
  );
}
