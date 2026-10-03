import type { Dictionary } from '@/i18n';
import { SECTION } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './HowItWorks.module.css';

export function HowItWorks({ t }: { t: Dictionary['how'] }) {
  return (
    <section id={SECTION.how} className="section" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading id="how-title" title={t.title} />
        <ol role="list" className={styles.steps}>
          {t.steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.cta}>
          <ButtonLink href={`#${SECTION.membership}`}>{t.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
