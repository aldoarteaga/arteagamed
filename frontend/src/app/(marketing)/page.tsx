import { PLAN_DETAILS } from '@eart/shared-types';
import { config } from '@/config';
import { getDictionary, getLocale } from '@/i18n';
import { PLAN_ORDER, site } from '@/content/site';
import { Hero } from '@/components/home/Hero';
import { Benefits } from '@/components/home/Benefits';
import { Audience } from '@/components/home/Audience';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Membership } from '@/components/home/Membership';
import { Included } from '@/components/home/Included';
import { Teleassistance } from '@/components/home/Teleassistance';
import { Services } from '@/components/home/Services';
import { WhyUs } from '@/components/home/WhyUs';
import { Trust } from '@/components/home/Trust';
import { ServiceArea } from '@/components/home/ServiceArea';
import { Faq, faqEntries } from '@/components/home/Faq';
import { Contact } from '@/components/home/Contact';
import { FinalCta } from '@/components/home/FinalCta';

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <>
      <StructuredData t={t} />
      <Hero t={t.hero} />
      <Benefits t={t.benefits} />
      <Audience t={t.audience} />
      <HowItWorks t={t.how} />
      <Membership t={t.membership} locale={locale} />
      <Included t={t.included} />
      <Teleassistance t={t.teleassistance} />
      <Services t={t.services} />
      <WhyUs t={t.why} />
      <Trust t={t.trust} />
      <ServiceArea t={t.area} />
      <Faq t={t.faq} />
      <Contact t={t.contact} plans={t.membership.plans} />
      <FinalCta t={t.finalCta} />
    </>
  );
}

/** schema.org data: the business, its plans as offers, and the FAQ. */
function StructuredData({ t }: { t: Awaited<ReturnType<typeof getDictionary>> }) {
  const graph = [
    {
      '@type': 'MedicalBusiness',
      '@id': `${config.SITE_URL}/#business`,
      name: site.name,
      url: config.SITE_URL,
      telephone: site.phone.e164,
      description: t.meta.description,
      areaServed: site.towns.map((name) => ({ '@type': 'City', name })),
      address: { '@type': 'PostalAddress', addressRegion: 'Alicante', addressCountry: 'ES' },
      availableLanguage: ['English', 'Spanish'],
      makesOffer: PLAN_ORDER.map((id) => ({
        '@type': 'Offer',
        name: t.membership.plans[id].name,
        description: t.membership.plans[id].summary,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: PLAN_DETAILS[id].monthlyPriceCents / 100,
          priceCurrency: 'EUR',
          unitText: 'MONTH',
        },
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqEntries(t.faq).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own static content.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
          /</g,
          '\\u003c',
        ),
      }}
    />
  );
}
