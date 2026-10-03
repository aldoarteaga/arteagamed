'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef } from 'react';
import { sendContactMessage, type ContactField, type ContactState } from '@/app/actions/contact';
import type { Dictionary } from '@/i18n';
import { fill } from '@/i18n/format';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import styles from './Contact.module.css';

type Props = {
  t: Dictionary['contact']['form'];
  phone: string;
  plans: { id: string; name: string }[];
};

const initial: ContactState = { status: 'idle' };

export function ContactForm({ t, phone, plans }: Props) {
  const [state, action, pending] = useActionState(sendContactMessage, initial);
  const statusRef = useRef<HTMLDivElement>(null);

  const errors = state.status === 'invalid' ? state.errors : [];
  const values = state.status === 'invalid' ? state.values : {};
  const has = (f: ContactField) => errors.includes(f);

  // Move focus to the outcome so screen-reader and keyboard users hear it.
  useEffect(() => {
    if (state.status !== 'idle') statusRef.current?.focus();
  }, [state]);

  if (state.status === 'sent') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        className={`${styles.formCard} ${styles.success}`}
        role="status"
      >
        <Icon name="check" size={40} />
        <p>{t.success}</p>
      </div>
    );
  }

  const field = (name: ContactField, withHint = false) => ({
    id: `contact-${name}`,
    name,
    'aria-invalid': has(name) || undefined,
    'aria-describedby':
      [has(name) && `contact-${name}-error`, withHint && `contact-${name}-hint`]
        .filter(Boolean)
        .join(' ') || undefined,
  });

  const error = (name: ContactField) =>
    has(name) ? (
      <p id={`contact-${name}-error`} className={styles.error}>
        <Icon name="alert" size={20} />
        {t.errors[name]}
      </p>
    ) : null;

  return (
    <form action={action} noValidate className={styles.formCard}>
      <h3>{t.title}</h3>

      <div ref={statusRef} tabIndex={-1} className={styles.status}>
        {state.status === 'invalid' && (
          <p className={styles.summary} role="alert">
            <Icon name="alert" size={24} />
            {t.errorSummary}
          </p>
        )}
        {state.status === 'unavailable' && (
          <p className={styles.summary} role="alert">
            <Icon name="phone" size={24} />
            {fill(t.unavailable, { phone })}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-name">{t.name}</label>
        {error('name')}
        <input
          {...field('name')}
          type="text"
          autoComplete="name"
          required
          defaultValue={values.name}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">{t.email}</label>
        {error('email')}
        <input
          {...field('email')}
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          defaultValue={values.email}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone">
          {t.phone} <span className={styles.optional}>({t.optional})</span>
        </label>
        <p id="contact-phone-hint" className={styles.hint}>
          {t.phoneHint}
        </p>
        {error('phone')}
        <input
          {...field('phone', true)}
          type="tel"
          autoComplete="tel"
          defaultValue={values.phone}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-plan">
          {t.plan} <span className={styles.optional}>({t.optional})</span>
        </label>
        <select id="contact-plan" name="plan" defaultValue={values.plan ?? ''}>
          <option value="">{t.planNone}</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">{t.message}</label>
        <p id="contact-message-hint" className={styles.hint}>
          {t.messageHint}
        </p>
        {error('message')}
        <textarea {...field('message', true)} rows={5} required defaultValue={values.message} />
      </div>

      <div className={styles.field}>
        {error('consent')}
        <div className={styles.check}>
          <input
            {...field('consent')}
            type="checkbox"
            required
            defaultChecked={values.consent === 'on'}
          />
          <label htmlFor="contact-consent">
            {t.consent} <Link href="/legal/privacy">{t.privacyLink}</Link>.
          </label>
        </div>
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" block disabled={pending}>
        {pending ? t.sending : t.submit}
      </Button>
    </form>
  );
}
