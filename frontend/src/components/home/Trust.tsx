import Link from 'next/link';
import { localePath, type Dictionary, type Locale } from '@/i18n';
import { config } from '@/config';
import { testimonials } from '@/content/testimonials';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Trust.module.css';

const showPlaceholders = config.NODE_ENV !== 'production';

export function Trust({ t, locale }: { t: Dictionary['trust']; locale: Locale }) {
  // Items with no confirmed copy yet are hidden in production rather than invented.
  const items = t.items.filter((item) => item.body || showPlaceholders);

  return (
    <section className="section" aria-labelledby="trust-title">
      <div className="container">
        <SectionHeading id="trust-title" title={t.title} intro={t.intro} />
        <ul role="list" className={styles.grid}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <Icon name={item.icon} size={30} className={styles.icon} />
              <h3>{item.title}</h3>
              {item.body && <p>{item.body}</p>}
              {showPlaceholders && 'placeholder' in item && (
                <p className={styles.placeholder}>Placeholder: {item.placeholder}</p>
              )}
            </li>
          ))}
        </ul>
        <ul role="list" className={styles.links}>
          <li>
            <Link href={localePath(locale, '/legal/membership-terms')}>{t.links.membership}</Link>
          </li>
          <li>
            <Link href={localePath(locale, '/legal/service-limitations')}>
              {t.links.limitations}
            </Link>
          </li>
          <li>
            <Link href={localePath(locale, '/legal/privacy')}>{t.links.privacy}</Link>
          </li>
        </ul>

        {testimonials.length > 0 && (
          <div className={styles.testimonials}>
            <h3>{t.testimonialsTitle}</h3>
            <ul role="list">
              {testimonials.map((q) => (
                <li key={q.name}>
                  <figure>
                    <blockquote>
                      <p>{q.quote}</p>
                    </blockquote>
                    <figcaption>
                      {q.name}, {q.place}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
