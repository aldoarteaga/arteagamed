import { LegalPage, legalMetadata } from '@/components/pages/LegalPage';
import { LEGAL_SLUGS } from '@/content/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  return legalMetadata('es', (await params).slug);
}

export default async function Page({ params }: Props) {
  return <LegalPage locale="es" slug={(await params).slug} />;
}
