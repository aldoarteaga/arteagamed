import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n';
import { fill } from '@/i18n/format';
import { LEGAL_SLUGS, site, type LegalSlug } from '@/content/site';
import { EmergencyNote } from '@/components/ui/EmergencyNote';
import { Icon } from '@/components/ui/Icon';
import styles from '../../subpage.module.css';

type Params = { params: Promise<{ slug: string }> };

function isLegalSlug(slug: string): slug is LegalSlug {
  return (LEGAL_SLUGS as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!isLegalSlug(slug)) return {};
  const t = await getDictionary();
  return {
    title: t.legal.pages[slug].title,
    description: t.legal.pages[slug].summary,
    alternates: { canonical: `/legal/${slug}` },
  };
}

/**
 * Legal documents. TODO(owner/legal counsel): replace the draft notice with the
 * final texts (Terms incl. DPA clause, Privacy under GDPR + LOPDGDD, Cookies,
 * Membership terms, Service limitations).
 */
export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  if (!isLegalSlug(slug)) notFound();
  const t = await getDictionary();
  const page = t.legal.pages[slug];

  return (
    <article className={styles.page}>
      <div className={`container ${styles.narrow}`}>
        <h1>{page.title}</h1>
        <p className={styles.lead}>{page.summary}</p>

        {slug === 'emergency' ? (
          <div className={styles.block}>
            <EmergencyNote title={t.contact.emergencyTitle} body={t.legal.emergency.lead} />
            <ul role="list" className={styles.checks}>
              {t.legal.emergency.points.map((point) => (
                <li key={point}>
                  <Icon name="info" size={26} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={styles.draft} role="note">
            <Icon name="info" size={26} />
            {fill(t.legal.draftNotice, { phone: site.phone.display })}
          </p>
        )}
      </div>
    </article>
  );
}
