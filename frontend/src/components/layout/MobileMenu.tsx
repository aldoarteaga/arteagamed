'use client';

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import type { NavItem } from './SiteHeader';
import styles from './SiteHeader.module.css';

type Props = {
  items: NavItem[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  cta: NavItem;
  phone: NavItem;
  children: ReactNode;
};

export function MobileMenu({
  items,
  openLabel,
  closeLabel,
  navLabel,
  cta,
  phone,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const headerBottom = buttonRef.current?.closest('header')?.getBoundingClientRect().bottom;
    if (headerBottom) panelRef.current?.style.setProperty('--panel-top', `${headerBottom}px`);
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, select, button')?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close() : setOpen(true))}
      >
        <Icon name={open ? 'cross' : 'menu'} size={26} />
        <span>{open ? closeLabel : openLabel}</span>
      </button>

      <div ref={panelRef} id={panelId} className={styles.panel} hidden={!open}>
        <nav aria-label={navLabel}>
          <ul role="list" className={styles.panelLinks}>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => close(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelActions}>
          <ButtonLink href={cta.href} block onClick={() => close(false)}>
            {cta.label}
          </ButtonLink>
          <ButtonLink href={phone.href} variant="secondary" block>
            <Icon name="phone" size={22} />
            {phone.label}
          </ButtonLink>
          {children}
        </div>
      </div>
    </>
  );
}
