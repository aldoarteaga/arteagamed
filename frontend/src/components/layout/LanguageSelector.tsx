'use client';

import { usePathname } from 'next/navigation';
import { useId } from 'react';
import { Icon } from '@/components/ui/Icon';
import { localePath, neutralPath, type Locale } from '@/i18n/locales';
import styles from './SiteHeader.module.css';

type Props = {
  current: Locale;
  languages: { code: Locale; name: string }[];
  label: string;
};

/**
 * Native <select>: the most familiar control for less confident users.
 * Choosing a language opens the same page in that language.
 */
export function LanguageSelector({ current, languages, label }: Props) {
  const id = useId();
  const pathname = usePathname();

  function change(code: Locale) {
    window.location.assign(localePath(code, neutralPath(pathname)) + window.location.hash);
  }

  return (
    <div className={styles.language}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <Icon name="globe" size={22} className={styles.languageIcon} />
      <select id={id} value={current} onChange={(e) => change(e.target.value as Locale)}>
        {languages.map((l) => (
          <option key={l.code} value={l.code} lang={l.code}>
            {l.name}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={18} className={styles.languageChevron} />
    </div>
  );
}
