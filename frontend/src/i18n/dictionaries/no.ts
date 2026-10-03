import type { Dictionary } from '../index';

/** Norwegian (bokmål). Mirrors en.ts; keep both in sync when copy changes. */
const no = {
  meta: {
    title: 'ArteagaMed: helseassistanse på Costa Blanca',
    titleTemplate: '%s | ArteagaMed',
    description:
      'Medlemskap for helse og assistanse for internasjonale besøkende i Calpe, Moraira, Benissa, Teulada og Benidorm. Lege på telefon, besøk hjemme eller på hotellet, og hjelp på engelsk.',
    ogAlt: 'ArteagaMed: helseassistanse for besøkende på Costa Blanca',
  },

  common: {
    phoneLabel: 'Telefon',
    emailLabel: 'E-post',
    callUs: 'Ring oss',
    learnMore: 'Les mer',
    opensPhone: 'Ring ArteagaMed på {phone}',
  },

  nav: {
    skip: 'Gå til hovedinnholdet',
    home: 'Hjem',
    howItWorks: 'Slik fungerer det',
    services: 'Tjenester',
    membership: 'Medlemskap',
    teleassistance: 'Trygghetsalarm',
    faq: 'Spørsmål',
    contact: 'Kontakt',
    getMembership: 'Bli medlem',
    openMenu: 'Meny',
    closeMenu: 'Lukk',
    mainLabel: 'Hovedmeny',
    language: 'Språk',
    comingSoon: 'kommer snart',
    utilityPhone: 'Ring oss døgnet rundt:',
  },

  hero: {
    title: 'Nyt Alicante. Vi tar oss av resten.',
    lead: 'Førsteklasses helsehjelp og assistanse for europeiske besøkende på Costa Blanca, fra et lokalt team som snakker ditt språk.',
    primary: 'Se medlemskapet',
    secondary: 'Slik fungerer ArteagaMed',
    trust: ['Helseassistanse', 'Lokal støtte', 'Trygghet'],
    trustLabel: 'Dette tilbyr ArteagaMed',
    area: 'Vi besøker deg i Calpe, Moraira, Benissa, Teulada og Benidorm.',
    photo: {
      alt: 'Et eldre par som går hånd i hånd langs stranden',
      brief:
        'Ekte bilde: eldre europeisk par på strandpromenaden i Calpe, med Peñón de Ifach i bakgrunnen. Naturlig, uten medisinsk utstyr.',
    },
  },

  benefits: {
    title: 'Helsehjelp i utlandet, gjort enkelt',
    items: [
      {
        icon: 'stethoscope',
        title: 'Helsehjelp når du trenger det',
        body: 'Profesjonell medisinsk støtte, uten stresset med et ukjent helsesystem.',
      },
      {
        icon: 'language',
        title: 'Hjelp på ditt språk',
        body: 'Tydelige forklaringer og personlig støtte så lenge du er i Spania.',
      },
      {
        icon: 'pin',
        title: 'Lokal støtte',
        body: 'Et team som kjenner området, vet hvor du bor og kjenner helsehistorien din.',
      },
      {
        icon: 'sun',
        title: 'Trygghet',
        body: 'Nyt Costa Blanca, vel vitende om at hjelpen bare er en telefon unna.',
      },
    ],
  },

  audience: {
    title: 'Laget for deg som tilbringer deler av året her',
    body: 'Enten du blir i tre uker eller seks måneder, gir ArteagaMed deg en lege og et team du kan ringe. Du trenger ikke å forstå hvordan det spanske helsevesenet fungerer.',
    listLabel: 'ArteagaMed passer for',
    items: [
      'Pensjonister som blir i uker eller måneder',
      'Par som reiser sammen',
      'Eiere av fritidsbolig på Costa Blanca',
      'Familier som ordner omsorg for en forelder i Spania',
    ],
    cta: 'Se medlemskapene',
    photo: {
      alt: 'Et smilende eldre par som nyter en kaffe ved sjøen',
      brief:
        'Ekte bilde: pensjonister som nyter hverdagen (uteservering, marked, promenade). Varmt og spontant, uten medisinsk utstyr.',
    },
  },

  how: {
    title: 'Slik fungerer ArteagaMed',
    steps: [
      {
        title: 'Velg medlemskap',
        body: 'Velg planen som passer oppholdet ditt. Vi starter med en grundig helsesjekk hjemme hos deg eller på hotellet.',
      },
      {
        title: 'Nyt Alicante',
        body: 'Reis, slapp av og nyt tiden på Costa Blanca. Helsejournalen din er klar hvis du trenger oss.',
      },
      {
        title: 'Få hjelp når du trenger det',
        body: 'Ring ArteagaMed når du trenger hjelp som dekkes av medlemskapet ditt. Vi tar det derfra.',
      },
    ],
    cta: 'Kom i gang',
  },

  membership: {
    title: 'Velg medlemskap',
    intro:
      'Alle medlemskap starter med en grundig helsesjekk hjemme hos deg eller på hotellet. Den første måneden koster litt mer; deretter betaler du månedsprisen.',
    perMonth: 'per måned',
    firstMonth: 'Første måned {price}',
    recommended: 'Anbefalt',
    choose: 'Velg {plan}',
    keyFeatures: 'Høydepunkter',
    seeAll: 'Alt som er inkludert',
    extrasTitle: 'Mot tillegg',
    note: 'Priser i euro, fakturert månedlig. Minste varighet, oppsigelse og refusjon er forklart i medlemsvilkårene.',
    termsLink: 'Les medlemsvilkårene',
    plans: {
      basic: {
        name: 'Grunnleggende assistanse',
        summary:
          'En lege på telefon når du trenger det, og en grundig helsesjekk til å begynne med.',
        highlights: [
          'Grundig helsesjekk hjemme eller på hotellet',
          'Opptil 4 legekonsultasjoner på telefon per måned',
          'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
          'Hjelp med timer hos spesialister, prøver og undersøkelser',
        ],
        included: [
          'Grundig helsesjekk og legeundersøkelse hjemme eller på hotellet',
          'Gjennomgang av de faste medisinene dine',
          'Ernæringsvurdering',
          'Personlig helsejournal for oppfølging av sykdommer',
          'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
          'Legekonsultasjoner på telefon (opptil 4 per måned)',
          'Bestilling og koordinering av spesialisttimer, blodprøver og bildeundersøkelser',
        ],
        extras: [
          'Legebesøk hjemme eller på hotellet: 90 €',
          'Resept og hjemlevering av faste medisiner: 25 € per måned',
        ],
      },
      integral: {
        name: 'Helhetlig assistanse',
        summary:
          'Et legebesøk hjemme hver måned, en sykepleier du kan ringe på engelsk, og medisinene dine tatt hånd om.',
        highlights: [
          'Ett legebesøk hjemme hver måned',
          'Opptil 8 konsultasjoner på telefon per måned',
          'Sykepleierlinje på engelsk døgnet rundt',
          'Faste medisiner forskrevet og levert',
        ],
        included: [
          'Grundig helsesjekk og legeundersøkelse hjemme eller på hotellet',
          'Gjennomgang av de faste medisinene dine',
          'Ernæringsvurdering med kostholdsråd',
          'Legemiddelgjennomgang for å unngå unødvendige eller uheldige kombinasjoner',
          'Helsejournal som samler resultater fra sykehus og legekontor',
          'Legekonsultasjoner på telefon (opptil 8 per måned)',
          'Sykepleierlinje på engelsk døgnet rundt',
          'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
          'Ett legebesøk hjemme hver måned',
          'Bestilling og koordinering av spesialisttimer, blodprøver og bildeundersøkelser',
          'Resept og hjemlevering av faste medisiner',
        ],
        extras: ['Ekstra legebesøk: 80 €'],
      },
      continuada: {
        name: 'Kontinuerlig assistanse',
        summary:
          'For lange opphold eller kroniske sykdommer: to besøk i måneden og lege på telefon hver dag ved behov.',
        highlights: [
          'To legebesøk i måneden med helsekontroller',
          'Telefonkonsultasjon hver dag ved behov',
          'Personlig kostholdsplan',
          'Sykepleierlinje på engelsk døgnet rundt',
        ],
        included: [
          'Grundig helsesjekk og legeundersøkelse hjemme eller på hotellet',
          'Gjennomgang av de faste medisinene dine',
          'Personlig kostholdsplan tilpasset dine sykdommer',
          'Legemiddelgjennomgang for å unngå unødvendige eller uheldige kombinasjoner',
          'Helsejournal som samler resultater fra sykehus og legekontor',
          'Legekonsultasjon på telefon hver dag ved behov',
          'Sykepleierlinje på engelsk døgnet rundt',
          'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
          'To legebesøk i måneden, med kontroll av blodtrykk, oksygen, blodsukker og EKG',
          'Resept og hjemlevering av faste medisiner',
          'Bestilling og koordinering av spesialisttimer, blodprøver og bildeundersøkelser',
        ],
        extras: ['Ekstra legebesøk: 80 €'],
      },
      avanzada: {
        name: 'Avansert assistanse',
        summary:
          'Tett medisinsk oppfølging hver uke, jevnlig gjennomgått av et team av spesialister.',
        highlights: [
          'Ukentlig legebesøk med helsekontroller',
          'Gjennomgang annenhver uke av en indremedisiner, en kardiolog og en geriater',
          'Telefonkonsultasjon hver dag ved behov',
          'Faste medisiner forskrevet og levert',
        ],
        included: [
          'Grundig helsesjekk og legeundersøkelse hjemme eller på hotellet',
          'Gjennomgang av de faste medisinene dine',
          'Personlig kostholdsplan tilpasset dine sykdommer',
          'Legemiddelgjennomgang for å unngå unødvendige eller uheldige kombinasjoner',
          'Helsejournal som samler resultater fra sykehus og legekontor',
          'Legekonsultasjon på telefon hver dag ved behov',
          'Sykepleierlinje på engelsk døgnet rundt',
          'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
          'Ukentlig legebesøk, med kontroll av blodtrykk, oksygen, blodsukker og EKG',
          'Gjennomgang annenhver uke av en indremedisiner, en kardiolog og en geriater',
          'Resept og hjemlevering av faste medisiner',
          'Bestilling og koordinering av spesialisttimer, blodprøver og bildeundersøkelser',
        ],
        extras: ['Ekstra legebesøk: 80 €'],
      },
    },
  },

  included: {
    title: 'Hva er inkludert?',
    intro: 'Hva medlemskapet dekker, hva som koster ekstra, og hva medlemskapet ikke er.',
    includedTitle: 'Inkludert i alle medlemskap',
    includedItems: [
      'En grundig helsesjekk hjemme eller på hotellet når du blir medlem',
      'En gjennomgang av de faste medisinene dine',
      'En ernæringsvurdering',
      'Din personlige helsejournal, alltid oppdatert',
      'Telefonlinje døgnet rundt for akutte medisinske spørsmål',
      'Legekonsultasjoner på telefon',
      'Bestilling og koordinering av spesialisttimer, prøver og undersøkelser',
    ],
    extraTitle: 'Mot tillegg',
    extraItems: [
      'Ekstra legebesøk, til medlemspris',
      'Honorarer til spesialister, prøver, undersøkelser og sykehusbehandling. Disse faktureres av behandleren eller dekkes av din egen forsikring.',
      'Fysioterapi, hjemmehjelp og pasienttransport, etter avtale',
      'Trygghetsalarm og tilhørende tjeneste',
    ],
    notTitle: 'Hva medlemskapet ikke er',
    notItems: [
      'Det er ikke en helseforsikring. Det erstatter ikke europeisk helsetrygdkort (EHIC) eller reiseforsikring.',
      'Det er ikke en nødetat. Ved nødsituasjoner skal du alltid ringe 112.',
    ],
  },

  teleassistance: {
    title: 'Hjelpen er alltid innen rekkevidde.',
    body: 'Med trygghetsalarm fra ArteagaMed har du på deg en liten enhet med én knapp. Hvis du føler deg dårlig, faller eller bare trenger hjelp, trykker du på knappen og blir koblet til vår hjelpetjeneste.',
    stepsLabel: 'Slik fungerer alarmknappen',
    steps: [
      'Trykk på knappen',
      'Vi svarer og snakker med deg',
      'Vi ordner riktig hjelp, fra råd eller hjemmebesøk til å ringe 112 for deg',
    ],
    note: 'Trygghetsalarm tilbys i tillegg til medlemskapet. Vi bekrefter prisen før du melder deg på.',
    cta: 'Les om trygghetsalarm',
    photo: {
      alt: 'En smilende eldre mann som snakker i mobiltelefonen og har armbåndsur',
      brief:
        'Ekte bilde: eldre person hjemme eller på en terrasse med en enkel alarmknapp rundt håndleddet eller halsen. Rolig og selvstendig, ikke skrøpelig.',
    },
  },

  services: {
    title: 'Våre tjenester',
    intro: 'Hva vi tilbyr, og hvordan hver tjeneste betales.',
    status: {
      included: 'Inkludert',
      plan: 'Avhenger av plan',
      extra: 'Tilleggskostnad',
    },
    statusLabel: 'Kostnad',
    items: [
      {
        icon: 'stethoscope',
        status: 'included',
        title: 'Medisinsk assistanse',
        body: 'Legekonsultasjoner på telefon, og besøk hjemme eller på hotellet avhengig av planen din.',
      },
      {
        icon: 'pill',
        status: 'plan',
        title: 'Apotekhjelp',
        body: 'Vi går gjennom de faste medisinene dine, skriver resepter og leverer dem på døren.',
      },
      {
        icon: 'leaf',
        status: 'included',
        title: 'Ernæring',
        body: 'En ernæringsvurdering for alle medlemmer, og en personlig kostholdsplan i enkelte planer.',
      },
      {
        icon: 'document',
        status: 'included',
        title: 'Timer og papirarbeid',
        body: 'Vi bestiller spesialisttimer og prøver, ordner godkjenninger og holder orden på dokumentene dine.',
      },
      {
        icon: 'watch',
        status: 'extra',
        title: 'Trygghetsalarm',
        body: 'En alarmknapp du bærer på deg, som kobler deg til vår hjelpetjeneste.',
      },
      {
        icon: 'stretch',
        status: 'extra',
        title: 'Fysioterapi',
        body: 'Fysioterapi hjemme hos deg, etter avtale.',
      },
      {
        icon: 'home',
        status: 'extra',
        title: 'Hjemmehjelp',
        body: 'Hjelp hjemme med daglige gjøremål og personlig stell, etter avtale.',
      },
      {
        icon: 'car',
        status: 'extra',
        title: 'Pasienttransport',
        body: 'Transport til timer, prøver eller sykehus, etter avtale.',
      },
    ],
  },

  why: {
    title: 'Hvorfor ArteagaMed',
    items: [
      {
        title: 'Lokale',
        body: 'Vi holder til på Costa Blanca og besøker deg der du bor.',
      },
      {
        title: 'Personlige',
        body: 'Et lite team som blir kjent med deg og helsehistorien din, ikke et anonymt kundesenter.',
      },
      {
        title: 'Enkle',
        body: 'Vi håndterer det spanske helsevesenet for deg: timer, prøver, resepter og papirarbeid.',
      },
      {
        title: 'Flerspråklige',
        body: 'Vi jobber på engelsk og spansk hver dag, og tjenesten er laget for internasjonale besøkende.',
      },
      {
        title: 'For eldre voksne',
        body: 'Tjenestene våre er utformet for godt voksne reisende, fra faste medisiner til å holde seg i bevegelse.',
      },
    ],
    photo: {
      alt: 'En omsorgsperson holder en eldre kvinne i hendene mens de prater og smiler',
      brief:
        'Ekte bilde: fagperson fra ArteagaMed hos en eldre pasient hjemme. Naturlig samtale, øyekontakt, dagslys. Bruk gjerne ditt eget team.',
    },
  },

  trust: {
    title: 'Vit hvem som tar vare på deg',
    intro: 'Helsehjelp bygger på tillit. Dette kan du sjekke før du blir medlem.',
    items: [
      {
        icon: 'users',
        title: 'Vårt medisinske team',
        body: 'Leger, sykepleiere og helsefagarbeidere som samarbeider om din behandling.',
        placeholder:
          'Legg til: navn på medisinsk direktør, spesialitet og registreringsnummer i Colegio de Médicos de Alicante. Teambilder.',
      },
      {
        icon: 'shield',
        title: 'Helseregistrering',
        body: '',
        placeholder:
          'Legg til: registreringsnummer i Registro de Centros, Servicios y Establecimientos Sanitarios (Comunitat Valenciana), firmanavn og CIF.',
      },
      {
        icon: 'euro',
        title: 'Publiserte priser',
        body: 'Alle medlemspriser står på denne siden, sammen med hva som koster ekstra.',
      },
      {
        icon: 'lock',
        title: 'Helseopplysningene dine',
        body: 'Opplysningene dine lagres på servere i EU og behandles i henhold til GDPR.',
      },
      {
        icon: 'document',
        title: 'Tydelige vilkår',
        body: 'Les medlemsvilkårene og tjenestens begrensninger før du blir medlem.',
      },
    ],
    links: {
      membership: 'Medlemsvilkår',
      limitations: 'Tjenestens begrensninger',
      privacy: 'Personvernerklæring',
    },
    testimonialsTitle: 'Det medlemmene sier',
  },

  area: {
    title: 'Hvor vi jobber',
    body: 'Vi besøker medlemmer hjemme, i feriehus og på hoteller i disse stedene på nordlige Costa Blanca:',
    note: 'Bor du i nærheten? Ring oss, så sier vi om vi kan hjelpe.',
    mapTitle: 'Kart over nordlige Costa Blanca',
    mapDescription:
      'Et kart over kysten mellom Dénia og Benidorm. Stedene vi betjener er markert: Teulada, Moraira, Benissa, Calpe og Benidorm.',
    legend: 'Steder vi besøker',
    sea: 'Middelhavet',
    ifach: 'Peñón de Ifach',
  },

  faq: {
    title: 'Spørsmål og svar',
    items: [
      {
        q: 'Hvem er ArteagaMed for?',
        a: 'ArteagaMed er for besøkende fra andre europeiske land som tilbringer tid på Costa Blanca. De fleste medlemmene våre er pensjonister og blir noen uker eller flere måneder hvert år.',
      },
      {
        q: 'Kan jeg bli medlem hvis jeg bare er på besøk i Spania?',
        a: 'Ja. Du trenger ikke å bo i Spania eller ha spansk helseforsikring. Si fra når du kommer og hvor du bor, så ordner vi den første helsesjekken.',
      },
      {
        q: 'Hvor lenge varer medlemskapet?',
        a: 'Medlemskapet betales måned for måned. Den første måneden koster litt mer enn de neste. Medlemsvilkårene forklarer minste varighet og hvordan du sier opp.',
      },
      {
        q: 'Hvilke områder dekker dere?',
        a: 'Vi besøker i dag medlemmer i Calpe, Moraira, Benissa, Teulada og Benidorm. Bor du i nærheten, kan du ringe oss, så sier vi om vi kan hjelpe.',
      },
      {
        q: 'Hva skjer når jeg trenger hjelp?',
        a: 'Ring oss på {phone}. Vi lytter, gir deg medisinske råd på telefon og ordner ved behov et besøk, en prøve eller en spesialisttime. Vi tar oss også av papirarbeidet.',
      },
      {
        q: 'Er trygghetsalarm inkludert?',
        a: 'Trygghetsalarm tilbys i tillegg til medlemskapet, mot en tilleggskostnad. Vi forklarer hvordan den fungerer og bekrefter prisen før du melder deg på.',
      },
      {
        q: 'Er medisinske tjenester inkludert i medlemskapet?',
        a: 'Ja. Legekonsultasjoner på telefon er inkludert i alle planer, og besøk hjemme eller på hotellet i de fleste. Honorarer til spesialister, prøver, undersøkelser og sykehusbehandling faktureres separat av behandleren eller dekkes av forsikringen din.',
      },
      {
        q: 'Kan familien min kontakte ArteagaMed på mine vegne?',
        a: 'Ja. Mange medlemskap ordnes av en sønn eller datter for en forelder. Med din tillatelse kan familiemedlemmer ringe oss. Vi deler bare medisinsk informasjon med personer du har gitt tillatelse til.',
      },
      {
        q: 'Gir dere hjelp på engelsk?',
        a: 'Ja. Vi jobber på engelsk og spansk hver dag, og sykepleierlinjen i planene Helhetlig, Kontinuerlig og Avansert er på engelsk.',
      },
      {
        q: 'Hva gjør jeg i en medisinsk nødsituasjon?',
        a: 'Ring 112 umiddelbart. 112 er det gratis europeiske nødnummeret. Det fungerer fra alle telefoner, og operatørene kan hjelpe deg på engelsk. ArteagaMed er ikke en nødetat og erstatter ikke 112. Når du er i trygghet, kan du ringe oss, så hjelper vi deg med alt som kommer etterpå.',
      },
    ],
  },

  contact: {
    title: 'Snakk med ArteagaMed',
    intro:
      'Vil du bli medlem eller har du spørsmål om medlemskap? Ring oss. Vi svarer på spørsmålene dine og avtaler den første helsesjekken.',
    phoneNote: 'Tilgjengelig døgnet rundt, alle dager',
    emailNote: 'Vi svarer innen 24 timer',
    emergencyTitle: 'Ved nødsituasjoner, ring 112',
    emergencyBody:
      '112 er gratis, fungerer fra alle telefoner i Spania, og operatørene kan hjelpe deg på engelsk. ArteagaMed er ikke en nødetat.',
  },

  finalCta: {
    title: 'Nyt tiden i Spania med større trygghet.',
    body: 'Oppdag en enklere måte å få helseassistanse på under oppholdet ditt på Costa Blanca.',
    primary: 'Se medlemskapet',
    secondary: 'Snakk med ArteagaMed',
  },

  footer: {
    tagline: 'Medlemskap for helse og assistanse for internasjonale besøkende på Costa Blanca.',
    explore: 'Utforsk',
    legal: 'Juridisk',
    contact: 'Kontakt',
    disclaimer:
      'ArteagaMed er verken et forsikringsselskap eller en nødetat. Ved en medisinsk nødsituasjon, ring 112.',
    copyright: '© {year} ArteagaMed. Alle rettigheter forbeholdt.',
    region: 'Costa Blanca, Alicante, Spania',
  },

  stickyBar: {
    label: 'Hurtigvalg',
    call: 'Ring',
    membership: 'Se medlemskap',
  },

  teleassistancePage: {
    title: 'Trygghetsalarm',
    heading: 'Hjelpen er alltid innen rekkevidde.',
    intro:
      'En enkel alarmknapp du bærer rundt håndleddet eller halsen. Ett trykk kobler deg til vår hjelpetjeneste, så du aldri trenger å lete etter et telefonnummer.',
    howTitle: 'Slik fungerer det',
    forTitle: 'Hvem den passer for',
    forItems: [
      'Personer som bor alene, eller som ofte er alene hjemme',
      'Alle som føler seg mindre stødige til beins',
      'Familier som vil være trygge mens en forelder er i Spania',
    ],
    notTitle: 'Hva trygghetsalarmen ikke er',
    notBody:
      'Trygghetsalarmen hjelper deg å nå oss raskt. Den er ikke en nødetat. Er livet ditt i fare, ring 112 direkte.',
    priceTitle: 'Pris',
    priceBody:
      'Trygghetsalarm tilbys i tillegg til alle ArteagaMed-medlemskap. Ring oss, så forklarer vi hvilke enheter som finnes og bekrefter prisen før du melder deg på.',
    cta: 'Spør om trygghetsalarm',
    back: 'Tilbake til forsiden',
  },

  legal: {
    draftNotice:
      'Dette dokumentet ferdigstilles nå. Har du spørsmål om det, kan du ringe oss på {phone}.',
    lastUpdated: 'Sist oppdatert',
    pages: {
      terms: {
        title: 'Vilkår og betingelser',
        summary: 'Vilkårene som gjelder når du bruker dette nettstedet og ArteagaMeds tjenester.',
      },
      privacy: {
        title: 'Personvernerklæring',
        summary:
          'Hvordan vi samler inn, bruker og beskytter person- og helseopplysningene dine i henhold til GDPR.',
      },
      cookies: {
        title: 'Informasjonskapsler',
        summary: 'Hvilke informasjonskapsler dette nettstedet bruker, og hvorfor.',
      },
      'membership-terms': {
        title: 'Medlemsvilkår',
        summary: 'Fakturering, minste varighet, oppsigelse og refusjon for ArteagaMed-medlemskap.',
      },
      'service-limitations': {
        title: 'Tjenestens begrensninger',
        summary: 'Hva ArteagaMed-medlemskap dekker, og hva de ikke dekker.',
      },
      emergency: {
        title: 'Informasjon ved nødsituasjoner',
        summary: 'Hva du skal gjøre ved en medisinsk nødsituasjon i Spania.',
      },
    },
    emergency: {
      lead: 'Hvis noens liv kan være i fare, ring 112 med en gang.',
      points: [
        '112 er det gratis europeiske nødnummeret. Det fungerer fra alle mobil- og fasttelefoner i Spania, også uten saldo.',
        'Operatørene kan hjelpe deg på engelsk og andre språk.',
        'Si så nøyaktig som mulig hvor du er: sted, gate, navn på bygningen og etasje.',
        'ArteagaMed er ikke en nødetat og erstatter ikke 112. Når du er i trygghet, kan du ringe oss, så hjelper vi deg videre.',
      ],
    },
  },
} satisfies Dictionary;

export default no;
