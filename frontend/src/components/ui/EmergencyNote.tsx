import { Icon } from './Icon';
import styles from './EmergencyNote.module.css';

/** The 112 message. Calm, but impossible to miss. */
export function EmergencyNote({ title, body }: { title: string; body: string }) {
  return (
    <aside className={styles.note} aria-label={title}>
      <Icon name="alert" size={32} className={styles.icon} />
      <div>
        <p className={styles.title}>
          <strong>{title}</strong>
        </p>
        <p>{body}</p>
      </div>
    </aside>
  );
}
