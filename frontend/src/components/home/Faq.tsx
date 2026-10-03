import type { Dictionary } from '@/i18n';
import { fill } from '@/i18n/format';
import { SECTION, site } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import styles from './Faq.module.css';

export function faqEntries(t: Dictionary['faq']) {
  return t.items.map((item) => ({ q: item.q, a: fill(item.a, { phone: site.phone.display }) }));
}

export function Faq({ t }: { t: Dictionary['faq'] }) {
  return (
    <section id={SECTION.faq} className="section" aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <h2 id="faq-title" className={styles.title}>
          {t.title}
        </h2>
        <div className={styles.list}>
          {faqEntries(t).map((item) => (
            <details key={item.q} className={styles.item}>
              <summary>
                <h3>{item.q}</h3>
                <Icon name="plus" size={26} className={styles.toggle} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
