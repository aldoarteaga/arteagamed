'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import styles from './StickyBar.module.css';

type Props = {
  label: string;
  call: { href: string; label: string; ariaLabel: string };
  membership: { href: string; label: string };
  /** Element id; the bar appears once this element has scrolled out of view. */
  watchId: string;
};

/** Phone-only quick actions, shown after the hero so it never covers the first screen. */
export function StickyBar({ label, call, membership, watchId }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry?.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <aside className={styles.bar} data-visible={visible} aria-label={label} aria-hidden={!visible}>
      <a
        href={call.href}
        className={styles.call}
        aria-label={call.ariaLabel}
        tabIndex={visible ? 0 : -1}
      >
        <Icon name="phone" size={22} />
        {call.label}
      </a>
      <a href={membership.href} className={styles.primary} tabIndex={visible ? 0 : -1}>
        {membership.label}
      </a>
    </aside>
  );
}
