'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';
import { Icon } from '@/components/ui/Icon';
import { LOCALE_COOKIE } from '@/i18n/config';
import styles from './SiteHeader.module.css';

type Language = { code: string; name: string; available: boolean };

type Props = {
  current: string;
  languages: Language[];
  label: string;
  comingSoon: string;
};

/**
 * Native <select>: the most familiar control for less confident users.
 * Choosing a language stores it in a cookie and re-renders the page server-side.
 */
export function LanguageSelector({ current, languages, label, comingSoon }: Props) {
  const router = useRouter();
  const id = useId();

  function change(code: string) {
    const secure = window.location.protocol === 'https:' ? '; secure' : '';
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax${secure}`;
    router.refresh();
  }

  return (
    <div className={styles.language}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <Icon name="globe" size={22} className={styles.languageIcon} />
      <select id={id} value={current} onChange={(e) => change(e.target.value)}>
        {languages.map((l) => (
          <option key={l.code} value={l.code} disabled={!l.available}>
            {l.available ? l.name : `${l.name} (${comingSoon})`}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={18} className={styles.languageChevron} />
    </div>
  );
}
