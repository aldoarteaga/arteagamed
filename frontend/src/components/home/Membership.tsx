import Link from 'next/link';
import { localePath, type Dictionary, type Locale } from '@/i18n';
import { PLAN_DETAILS, PLAN_ORDER, RECOMMENDED_PLAN, type PlanId } from '@/content/plans';
import { fill, formatEuros } from '@/i18n/format';
import { SECTION } from '@/content/site';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Membership.module.css';

type Props = { t: Dictionary['membership']; locale: Locale };

export function Membership({ t, locale }: Props) {
  return (
    <section
      id={SECTION.membership}
      className="section section--sand"
      aria-labelledby="membership-title"
    >
      <div className="container">
        <SectionHeading id="membership-title" title={t.title} intro={t.intro} />
        <ul role="list" className={styles.grid}>
          {PLAN_ORDER.map((id) => (
            <li key={id}>
              <PlanCard id={id} t={t} locale={locale} />
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          <Icon name="info" size={24} />
          <span>
            {t.note} <Link href={localePath(locale, '/legal/membership-terms')}>{t.termsLink}</Link>
          </span>
        </p>
      </div>
    </section>
  );
}

function PlanCard({ id, t, locale }: { id: PlanId; t: Dictionary['membership']; locale: Locale }) {
  const plan = t.plans[id];
  const price = PLAN_DETAILS[id];
  const recommended = id === RECOMMENDED_PLAN;
  const titleId = `plan-${id}`;

  return (
    <article
      className={`${styles.card} ${recommended ? styles.recommended : ''}`}
      aria-labelledby={titleId}
    >
      <header className={styles.cardHeader}>
        {recommended && (
          <div className={styles.badge}>
            <Badge tone="recommended">{t.recommended}</Badge>
          </div>
        )}
        <h3 id={titleId}>{plan.name}</h3>
        <p className={styles.summary}>{plan.summary}</p>
      </header>

      <p className={styles.price}>
        <span className={styles.amount}>{formatEuros(price.monthlyPriceCents, locale)}</span>
        <span className={styles.period}>{t.perMonth}</span>
      </p>
      <p className={styles.first}>
        {fill(t.firstMonth, { price: formatEuros(price.firstMonthPriceCents, locale) })}
      </p>

      <ButtonLink
        href={`#${SECTION.contact}`}
        variant={recommended ? 'primary' : 'secondary'}
        block
        aria-describedby={titleId}
      >
        {fill(t.choose, { plan: plan.name })}
      </ButtonLink>

      <div className={styles.body}>
        <h4 className="visually-hidden">{t.keyFeatures}</h4>
        <ul role="list" className={styles.features}>
          {plan.highlights.map((item) => (
            <li key={item}>
              <Icon name="check" size={24} />
              {item}
            </li>
          ))}
        </ul>

        <details className={styles.details}>
          <summary>
            <span>{t.seeAll}</span>
            <Icon name="plus" size={22} className={styles.toggle} />
          </summary>
          <ul role="list" className={styles.features}>
            {plan.included.map((item) => (
              <li key={item}>
                <Icon name="check" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </details>

        <div className={styles.extras}>
          <h4>{t.extrasTitle}</h4>
          <ul role="list">
            {plan.extras.map((item) => (
              <li key={item}>
                <Icon name="euro" size={22} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
