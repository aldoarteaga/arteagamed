import { LegalPage, legalMetadata } from '@/components/pages/LegalPage';
import { LEGAL_SLUGS } from '@/content/site';
import type { Locale } from '@/i18n';

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  return legalMetadata(locale, slug);
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  return <LegalPage locale={locale} slug={slug} />;
}
