import { HomePage, homeMetadata } from '@/components/pages/HomePage';
import type { Locale } from '@/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  return homeMetadata((await params).locale);
}

export default async function Page({ params }: Props) {
  return <HomePage locale={(await params).locale} />;
}
