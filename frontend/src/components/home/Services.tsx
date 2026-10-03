import type { Dictionary } from '@/i18n';
import { SECTION } from '@/content/site';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Services.module.css';

export function Services({ t }: { t: Dictionary['services'] }) {
  return (
    <section id={SECTION.services} className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" title={t.title} intro={t.intro} />
        <ul role="list" className={styles.grid}>
          {t.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={item.icon} size={30} />
              </span>
              <div className={styles.text}>
                <div className={styles.head}>
                  <h3>{item.title}</h3>
                  <span className="visually-hidden">{t.statusLabel}: </span>
                  <Badge tone={item.status}>{t.status[item.status]}</Badge>
                </div>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
