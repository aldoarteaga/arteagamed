import { Icon, type IconName } from './Icon';
import styles from './Badge.module.css';

type Tone = 'included' | 'plan' | 'extra' | 'recommended';

const toneIcon: Record<Tone, IconName> = {
  included: 'check',
  plan: 'info',
  extra: 'euro',
  recommended: 'check',
};

/** Status label. Always icon + text, never colour alone. */
export function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`${styles.badge} ${styles[tone]}`}>
      <Icon name={toneIcon[tone]} size={18} />
      {children}
    </span>
  );
}
