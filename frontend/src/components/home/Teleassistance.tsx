import { localePath, type Dictionary, type Locale } from '@/i18n';
import { SECTION } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Photo } from '@/components/ui/Photo';
import { photos } from '@/content/photos';
import styles from './Teleassistance.module.css';

export function Teleassistance({ t, locale }: { t: Dictionary['teleassistance']; locale: Locale }) {
  return (
    <section
      id={SECTION.teleassistance}
      className={`section on-dark ${styles.section}`}
      aria-labelledby="tele-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <span className={styles.icon}>
            <Icon name="watch" size={36} />
          </span>
          <h2 id="tele-title">{t.title}</h2>
          <p className={styles.body}>{t.body}</p>
          <ol role="list" className={styles.steps} aria-label={t.stepsLabel}>
            {t.steps.map((step, i) => (
              <li key={step}>
                <span aria-hidden="true">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className={styles.note}>{t.note}</p>
          <div>
            <ButtonLink href={localePath(locale, '/teleassistance')} variant="light">
              {t.cta}
            </ButtonLink>
          </div>
        </div>
        <Photo
          asset={photos.teleassistance}
          alt={t.photo.alt}
          brief={t.photo.brief}
          sizes="(min-width: 64rem) 40vw, 100vw"
          className={styles.photo}
        />
      </div>
    </section>
  );
}
