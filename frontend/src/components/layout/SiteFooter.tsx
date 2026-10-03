import Link from 'next/link';
import type { Route } from 'next';
import type { Dictionary } from '@/i18n';
import { fill } from '@/i18n/format';
import { LEGAL_SLUGS, site } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { Logo } from './Logo';
import { navItems } from './SiteHeader';
import styles from './SiteFooter.module.css';

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer className={`${styles.footer} on-dark`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo label={`${site.name}, ${t.nav.home}`} onDark />
          <p>{t.footer.tagline}</p>
          <p className={styles.towns}>{site.towns.join(', ')}</p>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className={styles.heading}>
            {t.footer.explore}
          </h2>
          <ul role="list" className={styles.list}>
            {navItems(t.nav)
              .slice(1)
              .map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className={styles.heading}>
            {t.footer.legal}
          </h2>
          <ul role="list" className={styles.list}>
            {LEGAL_SLUGS.map((slug) => (
              <li key={slug}>
                <Link href={`/legal/${slug}` as Route}>{t.legal.pages[slug].title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>{t.footer.contact}</h2>
          <ul role="list" className={styles.list}>
            <li>
              <a href={site.phone.href} className={styles.contactLink}>
                <Icon name="phone" size={22} />
                {site.phone.display}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className={styles.contactLink}>
                  <Icon name="mail" size={22} />
                  {site.email}
                </a>
              </li>
            )}
            <li className={styles.contactLink}>
              <Icon name="pin" size={22} />
              {t.footer.region}
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.disclaimer}>
          <Icon name="alert" size={22} />
          {t.footer.disclaimer}
        </p>
        <p>{fill(t.footer.copyright, { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
