import Link from 'next/link';
import styles from './SiteHeader.module.css';

/** Mark: the sun rising over the Mediterranean. Deliberately not a medical cross. */
export function Logo({ label, onDark }: { label: string; onDark?: boolean }) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${onDark ? styles.logoOnDark : ''}`}
      aria-label={label}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <rect width="40" height="40" rx="11" fill="#174A5B" />
        <path d="M10 24a10 10 0 0 1 20 0Z" fill="#E8D8BD" />
        <path
          d="M6 27.5c3.5-2 6.5-2 10 0s6.5 2 10 0 6.5-2 8 0"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span>ArteagaMed</span>
    </Link>
  );
}
