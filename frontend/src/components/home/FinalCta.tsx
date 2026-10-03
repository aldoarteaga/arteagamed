import type { Dictionary } from '@/i18n';
import { SECTION } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import styles from './FinalCta.module.css';

export function FinalCta({ t }: { t: Dictionary['finalCta'] }) {
  return (
    <section className={styles.section} aria-labelledby="final-title">
      <div className={`container ${styles.inner}`}>
        <h2 id="final-title">{t.title}</h2>
        <p className={styles.body}>{t.body}</p>
        <div className={styles.ctas}>
          <ButtonLink href={`#${SECTION.membership}`}>{t.primary}</ButtonLink>
          <ButtonLink href={`#${SECTION.contact}`} variant="secondary">
            {t.secondary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
