import type { Dictionary } from '@/i18n';
import { SECTION, site } from '@/content/site';
import { EmergencyNote } from '@/components/ui/EmergencyNote';
import { Icon } from '@/components/ui/Icon';
import styles from './Contact.module.css';

/** Static site: no form. Visitors call (or email, once a public address is set). */
export function Contact({ t }: { t: Dictionary['contact'] }) {
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
        </div>

        <div className={styles.channels}>
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
      </div>
    </section>
  );
}
