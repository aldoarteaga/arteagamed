import type { Dictionary } from '@/i18n';
import { SECTION, PLAN_ORDER, site } from '@/content/site';
import { EmergencyNote } from '@/components/ui/EmergencyNote';
import { Icon } from '@/components/ui/Icon';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

type Props = { t: Dictionary['contact']; plans: Dictionary['membership']['plans'] };

export function Contact({ t, plans }: Props) {
  return (
    <section
      id={SECTION.contact}
      className="section section--white"
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <h2 id="contact-title">{t.title}</h2>
          <p className={styles.intro}>{t.intro}</p>

          <a href={site.phone.href} className={styles.channel}>
            <span className={styles.channelIcon}>
              <Icon name="phone" size={30} />
            </span>
            <span>
              <span className={styles.channelValue}>{site.phone.display}</span>
              <span className={styles.channelNote}>{t.phoneNote}</span>
            </span>
          </a>

          {site.email && (
            <a href={`mailto:${site.email}`} className={styles.channel}>
              <span className={styles.channelIcon}>
                <Icon name="mail" size={30} />
              </span>
              <span>
                <span className={styles.channelValue}>{site.email}</span>
                <span className={styles.channelNote}>{t.emailNote}</span>
              </span>
            </a>
          )}

          <EmergencyNote title={t.emergencyTitle} body={t.emergencyBody} />
        </div>

        <ContactForm
          t={t.form}
          phone={site.phone.display}
          plans={PLAN_ORDER.map((id) => ({ id, name: plans[id].name }))}
        />
      </div>
    </section>
  );
}
