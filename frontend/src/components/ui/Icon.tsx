/**
 * One consistent icon set: 24px grid, 2px rounded strokes, drawn large enough
 * to read at a glance. Icons are decorative unless given a `title`.
 */
const paths = {
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M2.5 12h2M19.5 12h2M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M5 3H4v5a5 5 0 0 0 10 0V3h-1" />
      <path d="M9 13v1.5a5.5 5.5 0 0 0 11 0V13" />
      <circle cx="20" cy="11" r="2" />
    </>
  ),
  language: (
    <>
      <path d="M4 4h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9l-3 3v-3H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="M18 9h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v3l-3-3h-4a1 1 0 0 1-1-1v-1" />
    </>
  ),
  pill: (
    <>
      <path d="M10.5 20.5a4.95 4.95 0 0 1-7-7l6-6a4.95 4.95 0 0 1 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 20c-1-9 4-15 15-16 0 10-5 15-15 16Z" />
      <path d="m5 20 9-9" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  watch: (
    <>
      <rect x="6" y="7" width="12" height="10" rx="3" />
      <path d="m9 7 .5-4h5l.5 4M9 17l.5 4h5l.5-4" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  stretch: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="m4.5 9 7.5 1.5L19.5 9M12 10.5V15l-3.5 6M12 15l3.5 6" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 9.5V20h14V9.5M10 20v-6h4v6" />
    </>
  ),
  car: (
    <>
      <path d="M14 17H9M5 17H3V6h11v11M14 10h4l3 3.5V17h-2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  euro: <path d="M17 6.5a7 7 0 1 0 0 11M4 10h9M4 14h9" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  cross: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  alert: (
    <>
      <path d="M10.3 4.2 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0Z" />
      <path d="M12 10v4M12 17.5h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5h.01" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string | undefined;
  /** Accessible name. Omit for decorative icons next to visible text. */
  title?: string | undefined;
};

export function Icon({ name, size = 28, className, title }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
