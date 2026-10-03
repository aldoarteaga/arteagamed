import type { Dictionary } from '@/i18n';
import { Icon, type IconName } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Included.module.css';

export function Included({ t }: { t: Dictionary['included'] }) {
  const columns: {
    key: string;
    title: string;
    items: string[];
    icon: IconName;
    tone: string | undefined;
  }[] = [
    { key: 'in', title: t.includedTitle, items: t.includedItems, icon: 'check', tone: styles.yes },
    { key: 'extra', title: t.extraTitle, items: t.extraItems, icon: 'euro', tone: styles.extra },
    { key: 'not', title: t.notTitle, items: t.notItems, icon: 'cross', tone: styles.not },
  ];

  return (
    <section className="section section--white" aria-labelledby="included-title">
      <div className="container">
        <SectionHeading id="included-title" title={t.title} intro={t.intro} />
        <div className={styles.grid}>
          {columns.map((col) => (
            <div key={col.key} className={`${styles.column} ${col.tone}`}>
              <h3>{col.title}</h3>
              <ul role="list">
                {col.items.map((item) => (
                  <li key={item}>
                    <Icon name={col.icon} size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
