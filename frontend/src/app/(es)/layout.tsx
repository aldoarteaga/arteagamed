import { RootDocument } from '@/components/layout/RootDocument';

export { viewport } from '@/components/layout/RootDocument';

/** Spanish (default language) at the site root. */
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
