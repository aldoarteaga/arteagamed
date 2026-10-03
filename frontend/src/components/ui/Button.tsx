import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';

type CommonProps = {
  variant?: Variant | undefined;
  compact?: boolean | undefined;
  block?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
};

function classes({
  variant = 'primary',
  compact,
  block,
  className,
}: Omit<CommonProps, 'children'>) {
  return [
    styles.button,
    styles[variant],
    compact && styles.compact,
    block && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

type ButtonLinkProps = CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  'aria-label'?: string;
  'aria-describedby'?: string;
};

/** A link that looks like a button. Use for navigation (most CTAs). */
export function ButtonLink({
  href,
  variant,
  compact,
  block,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = classes({ variant, compact, block, className });
  // In-page anchors, tel: and mailto: links don't go through the router.
  if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps & {
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/** A real <button>, for forms and in-page actions. */
export function Button({
  variant,
  compact,
  block,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={classes({ variant, compact, block, className })} {...rest}>
      {children}
    </button>
  );
}
