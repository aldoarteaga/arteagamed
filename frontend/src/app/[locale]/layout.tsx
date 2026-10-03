import { notFound } from 'next/navigation';
import { RootDocument } from '@/components/layout/RootDocument';
import { isLocale, PREFIXED_LOCALES } from '@/i18n';

export { viewport } from '@/components/layout/RootDocument';

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

/** Every non-default language, under its own prefix: /en, /nl, /no, /fi. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RootDocument locale={locale}>{children}</RootDocument>;
}
