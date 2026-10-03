import type { Metadata } from 'next';
import { getDictionary, localePath, type Locale } from '@/i18n';
import { pageMetadata } from '@/lib/metadata';
import { fill } from '@/i18n/format';
import { SECTION, site } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { EmergencyNote } from '@/components/ui/EmergencyNote';
import { Icon } from '@/components/ui/Icon';
import styles from './subpage.module.css';

export function teleassistanceMetadata(locale: Locale): Metadata {
  const p = getDictionary(locale).teleassistancePage;
  return pageMetadata(locale, '/teleassistance', { title: p.title, description: p.intro });
}

export function TeleassistancePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.teleassistancePage;

  return (
    <article className={styles.page}>
      <div className={`container ${styles.narrow}`}>
        <p className={styles.kicker}>
          <Icon name="watch" size={26} />
          {p.title}
        </p>
        <h1>{p.heading}</h1>
        <p className={styles.lead}>{p.intro}</p>

        <section aria-labelledby="tele-how" className={styles.block}>
          <h2 id="tele-how">{p.howTitle}</h2>
          <ol role="list" className={styles.steps}>
            {t.teleassistance.steps.map((step, i) => (
              <li key={step}>
                <span aria-hidden="true">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tele-for" className={styles.block}>
          <h2 id="tele-for">{p.forTitle}</h2>
          <ul role="list" className={styles.checks}>
            {p.forItems.map((item) => (
              <li key={item}>
                <Icon name="check" size={26} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="tele-price" className={styles.block}>
          <h2 id="tele-price">{p.priceTitle}</h2>
          <p>{p.priceBody}</p>
        </section>

        <section aria-labelledby="tele-not" className={styles.block}>
          <h2 id="tele-not" className="visually-hidden">
            {p.notTitle}
          </h2>
          <EmergencyNote title={p.notTitle} body={p.notBody} />
        </section>

        <div className={styles.ctas}>
          <ButtonLink href={`${localePath(locale)}#${SECTION.contact}`}>{p.cta}</ButtonLink>
          <ButtonLink href={site.phone.href} variant="secondary">
            <Icon name="phone" size={22} />
            {fill(t.common.opensPhone, { phone: site.phone.display })}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
