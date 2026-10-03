import type { Dictionary } from '@/i18n';
import { Photo } from '@/components/ui/Photo';
import { photos } from '@/content/photos';
import styles from './WhyUs.module.css';

export function WhyUs({ t }: { t: Dictionary['why'] }) {
  return (
    <section className="section section--white" aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Photo
            asset={photos.why}
            alt={t.photo.alt}
            brief={t.photo.brief}
            sizes="(min-width: 64rem) 42vw, 100vw"
          />
        </div>
        <div>
          <h2 id="why-title" className={styles.title}>
            {t.title}
          </h2>
          <dl className={styles.list}>
            {t.items.map((item) => (
              <div key={item.title} className={styles.row}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
