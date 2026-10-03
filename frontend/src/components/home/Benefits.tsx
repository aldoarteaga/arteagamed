import type { Dictionary } from '@/i18n';
import { Icon } from '@/components/ui/Icon';
import styles from './Benefits.module.css';

export function Benefits({ t }: { t: Dictionary['benefits'] }) {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title" className={styles.title}>
          {t.title}
        </h2>
        <ul role="list" className={styles.grid}>
          {t.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={item.icon} size={30} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
