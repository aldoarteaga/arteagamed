import type { Dictionary } from '@/i18n';
import { SECTION } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Photo } from '@/components/ui/Photo';
import { photos } from '@/content/photos';
import styles from './Audience.module.css';

export function Audience({ t }: { t: Dictionary['audience'] }) {
  return (
    <section className="section section--white" aria-labelledby="audience-title">
      <div className={`container ${styles.grid}`}>
        <Photo
          asset={photos.audience}
          alt={t.photo.alt}
          brief={t.photo.brief}
          ratio="5 / 4"
          sizes="(min-width: 64rem) 50vw, 100vw"
        />
        <div className={styles.text}>
          <h2 id="audience-title">{t.title}</h2>
          <p className={styles.body}>{t.body}</p>
          <ul role="list" className={styles.list} aria-label={t.listLabel}>
            {t.items.map((item) => (
              <li key={item}>
                <Icon name="check" size={26} />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <ButtonLink href={`#${SECTION.membership}`} variant="secondary">
              {t.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
