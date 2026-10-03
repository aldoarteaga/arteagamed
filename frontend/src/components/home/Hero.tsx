import type { Dictionary } from '@/i18n';
import { SECTION } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Photo } from '@/components/ui/Photo';
import { photos } from '@/content/photos';
import styles from './Hero.module.css';

export function Hero({ t }: { t: Dictionary['hero'] }) {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h1 id="hero-title">{t.title}</h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.ctas}>
            <ButtonLink href={`#${SECTION.membership}`}>{t.primary}</ButtonLink>
            <ButtonLink href={`#${SECTION.how}`} variant="secondary">
              {t.secondary}
            </ButtonLink>
          </div>
          <ul role="list" className={styles.trust} aria-label={t.trustLabel}>
            {t.trust.map((item) => (
              <li key={item}>
                <Icon name="check" size={22} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.media}>
          <Photo
            asset={photos.hero}
            alt={t.photo.alt}
            brief={t.photo.brief}
            sizes="(min-width: 64rem) 46vw, 100vw"
            priority
            className={styles.photo}
          />
          <p className={styles.area}>
            <Icon name="pin" size={24} />
            {t.area}
          </p>
        </div>
      </div>
    </section>
  );
}
