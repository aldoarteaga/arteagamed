import { TeleassistancePage, teleassistanceMetadata } from '@/components/pages/TeleassistancePage';
import type { Locale } from '@/i18n';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  return teleassistanceMetadata((await params).locale);
}

export default async function Page({ params }: Props) {
  return <TeleassistancePage locale={(await params).locale} />;
}
