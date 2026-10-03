import type { Dictionary } from '../index';

/** Dutch (u-vorm). Mirrors en.ts; keep both in sync when copy changes. */
const nl = {
  meta: {
    title: 'ArteagaMed: zorgassistentie aan de Costa Blanca',
    titleTemplate: '%s | ArteagaMed',
    description:
      'Lidmaatschap voor zorg en assistentie voor internationale bezoekers in Calpe, Moraira, Benissa, Teulada en Benidorm. Een arts aan de telefoon, bezoek thuis of in uw hotel, en hulp in het Engels.',
    ogAlt: 'ArteagaMed: zorgassistentie voor bezoekers aan de Costa Blanca',
  },

  common: {
    phoneLabel: 'Telefoon',
    emailLabel: 'E-mail',
    callUs: 'Bel ons',
    learnMore: 'Meer informatie',
    opensPhone: 'Bel ArteagaMed op {phone}',
  },

  nav: {
    skip: 'Naar de hoofdinhoud',
    home: 'Home',
    howItWorks: 'Hoe het werkt',
    services: 'Diensten',
    membership: 'Lidmaatschap',
    teleassistance: 'Personenalarmering',
    faq: 'Vragen',
    contact: 'Contact',
    getMembership: 'Word lid',
    openMenu: 'Menu',
    closeMenu: 'Sluiten',
    mainLabel: 'Hoofdmenu',
    language: 'Taal',
    comingSoon: 'binnenkort',
    utilityPhone: 'Bel ons 24 uur per dag:',
  },

  hero: {
    title: 'Geniet van Alicante. Wij zorgen voor de rest.',
    lead: 'Hoogwaardige zorg en assistentie voor Europese bezoekers aan de Costa Blanca, van een lokaal team dat uw taal spreekt.',
    primary: 'Bekijk het lidmaatschap',
    secondary: 'Zo werkt ArteagaMed',
    trust: ['Zorgassistentie', 'Lokale ondersteuning', 'Gemoedsrust'],
    trustLabel: 'Wat ArteagaMed biedt',
    area: 'Wij bezoeken u in Calpe, Moraira, Benissa, Teulada en Benidorm.',
    photo: {
      alt: 'Een ouder echtpaar wandelt hand in hand langs het strand',
      brief:
        'Echte foto: ouder Europees echtpaar op de boulevard van Calpe, met de Peñón de Ifach op de achtergrond. Natuurlijk, zonder medische attributen.',
    },
  },

  benefits: {
    title: 'Zorg in het buitenland, eenvoudig geregeld',
    items: [
      {
        icon: 'stethoscope',
        title: 'Zorg wanneer u die nodig hebt',
        body: 'Professionele medische ondersteuning, zonder de stress van een onbekend zorgsysteem.',
      },
      {
        icon: 'language',
        title: 'Hulp in uw taal',
        body: 'Duidelijke uitleg en persoonlijke ondersteuning zolang u in Spanje bent.',
      },
      {
        icon: 'pin',
        title: 'Lokale ondersteuning',
        body: 'Een team dat de omgeving kent, weet waar u verblijft en uw medische voorgeschiedenis kent.',
      },
      {
        icon: 'sun',
        title: 'Gemoedsrust',
        body: 'Geniet van de Costa Blanca in de wetenschap dat hulp maar één telefoontje ver weg is.',
      },
    ],
  },

  audience: {
    title: 'Voor wie een deel van het jaar hier doorbrengt',
    body: 'Of u nu drie weken of zes maanden blijft: met ArteagaMed hebt u een arts en een team dat u kunt bellen. U hoeft niet te weten hoe de Spaanse gezondheidszorg werkt.',
    listLabel: 'ArteagaMed is voor',
    items: [
      'Gepensioneerden die weken of maanden blijven',
      'Stellen die samen reizen',
      'Eigenaren van een tweede woning aan de Costa Blanca',
      'Families die zorg regelen voor een ouder in Spanje',
    ],
    cta: 'Bekijk de lidmaatschappen',
    photo: {
      alt: 'Een lachend ouder echtpaar drinkt koffie aan zee',
      brief:
        'Echte foto: gepensioneerden die genieten van het dagelijks leven (terras, markt, boulevard). Warm en spontaan, zonder medische attributen.',
    },
  },

  how: {
    title: 'Zo werkt ArteagaMed',
    steps: [
      {
        title: 'Kies uw lidmaatschap',
        body: 'Kies het plan dat bij uw verblijf past. We beginnen met een volledige controle bij u thuis of in uw hotel.',
      },
      {
        title: 'Geniet van Alicante',
        body: 'Reis, ontspan en geniet van de Costa Blanca. Uw medisch dossier ligt klaar als u ons nodig hebt.',
      },
      {
        title: 'Hulp wanneer u die nodig hebt',
        body: 'Bel ArteagaMed wanneer u hulp nodig hebt die onder uw lidmaatschap valt. Wij regelen de rest.',
      },
    ],
    cta: 'Aan de slag',
  },

  membership: {
    title: 'Kies uw lidmaatschap',
    intro:
      'Elk lidmaatschap begint met een volledige gezondheidscontrole bij u thuis of in uw hotel. De eerste maand kost iets meer; daarna betaalt u het maandbedrag.',
    perMonth: 'per maand',
    firstMonth: 'Eerste maand {price}',
    recommended: 'Aanbevolen',
    choose: 'Kies {plan}',
    keyFeatures: 'Hoogtepunten',
    seeAll: 'Alles wat inbegrepen is',
    extrasTitle: 'Tegen meerprijs',
    note: 'Prijzen in euro, maandelijks gefactureerd. Minimale looptijd, opzegging en terugbetaling staan in de lidmaatschapsvoorwaarden.',
    termsLink: 'Lees de lidmaatschapsvoorwaarden',
    plans: {
      basic: {
        name: 'Basisassistentie',
        summary:
          'Een arts aan de telefoon wanneer u die nodig hebt, en een volledige controle om te beginnen.',
        highlights: [
          'Volledige controle bij u thuis of in uw hotel',
          'Tot 4 telefonische consulten met een arts per maand',
          '24/7 telefoonlijn voor dringende medische vragen',
          'Hulp bij afspraken met specialisten, onderzoeken en scans',
        ],
        included: [
          'Volledige gezondheidscontrole en lichamelijk onderzoek bij u thuis of in uw hotel',
          'Controle van de medicijnen die u vast gebruikt',
          'Voedingsbeoordeling',
          'Persoonlijk medisch dossier voor de opvolging van aandoeningen',
          '24/7 telefoonlijn voor dringende medische vragen',
          'Telefonische consulten met een arts (tot 4 per maand)',
          'Planning en coördinatie van specialistenafspraken, bloedonderzoek en scans',
        ],
        extras: [
          'Doktersbezoek thuis of in uw hotel: € 90',
          'Recept en thuisbezorging van vaste medicatie: € 25 per maand',
        ],
      },
      integral: {
        name: 'Integrale assistentie',
        summary:
          'Elke maand een huisbezoek, een verpleegkundige die u in het Engels kunt bellen, en uw medicatie geregeld.',
        highlights: [
          'Elke maand één doktersbezoek aan huis',
          'Tot 8 telefonische consulten per maand',
          '24/7 verpleegkundigenlijn in het Engels',
          'Vaste medicatie voorgeschreven en bezorgd',
        ],
        included: [
          'Volledige gezondheidscontrole en lichamelijk onderzoek bij u thuis of in uw hotel',
          'Controle van de medicijnen die u vast gebruikt',
          'Voedingsbeoordeling met voedingsadvies',
          'Medicatiecontrole om overbodige of tegenstrijdige middelen te voorkomen',
          'Medisch dossier dat uw uitslagen van ziekenhuis en praktijk bundelt',
          'Telefonische consulten met een arts (tot 8 per maand)',
          '24/7 verpleegkundigenlijn in het Engels',
          '24/7 telefoonlijn voor dringende medische vragen',
          'Elke maand één doktersbezoek aan huis',
          'Planning en coördinatie van specialistenafspraken, bloedonderzoek en scans',
          'Recept en thuisbezorging van vaste medicatie',
        ],
        extras: ['Extra doktersbezoek: € 80'],
      },
      continuada: {
        name: 'Voortdurende assistentie',
        summary:
          'Voor lange verblijven of chronische aandoeningen: twee bezoeken per maand en zo nodig dagelijks een arts aan de telefoon.',
        highlights: [
          'Twee doktersbezoeken per maand met gezondheidscontroles',
          'Zo nodig elke dag een telefonisch consult',
          'Persoonlijk voedingsplan',
          '24/7 verpleegkundigenlijn in het Engels',
        ],
        included: [
          'Volledige gezondheidscontrole en lichamelijk onderzoek bij u thuis of in uw hotel',
          'Controle van de medicijnen die u vast gebruikt',
          'Persoonlijk voedingsplan op basis van uw aandoeningen',
          'Medicatiecontrole om overbodige of tegenstrijdige middelen te voorkomen',
          'Medisch dossier dat uw uitslagen van ziekenhuis en praktijk bundelt',
          'Zo nodig elke dag een telefonisch consult met een arts',
          '24/7 verpleegkundigenlijn in het Engels',
          '24/7 telefoonlijn voor dringende medische vragen',
          'Twee doktersbezoeken per maand, met controle van bloeddruk, zuurstof, bloedsuiker en ECG',
          'Recept en thuisbezorging van vaste medicatie',
          'Planning en coördinatie van specialistenafspraken, bloedonderzoek en scans',
        ],
        extras: ['Extra doktersbezoek: € 80'],
      },
      avanzada: {
        name: 'Geavanceerde assistentie',
        summary:
          'Elke week nauwe medische opvolging, regelmatig besproken door een team van specialisten.',
        highlights: [
          'Wekelijks doktersbezoek met gezondheidscontroles',
          'Elke twee weken een casusbespreking door een internist, een cardioloog en een geriater',
          'Zo nodig elke dag een telefonisch consult',
          'Vaste medicatie voorgeschreven en bezorgd',
        ],
        included: [
          'Volledige gezondheidscontrole en lichamelijk onderzoek bij u thuis of in uw hotel',
          'Controle van de medicijnen die u vast gebruikt',
          'Persoonlijk voedingsplan op basis van uw aandoeningen',
          'Medicatiecontrole om overbodige of tegenstrijdige middelen te voorkomen',
          'Medisch dossier dat uw uitslagen van ziekenhuis en praktijk bundelt',
          'Zo nodig elke dag een telefonisch consult met een arts',
          '24/7 verpleegkundigenlijn in het Engels',
          '24/7 telefoonlijn voor dringende medische vragen',
          'Wekelijks doktersbezoek, met controle van bloeddruk, zuurstof, bloedsuiker en ECG',
          'Elke twee weken een casusbespreking door een internist, een cardioloog en een geriater',
          'Recept en thuisbezorging van vaste medicatie',
          'Planning en coördinatie van specialistenafspraken, bloedonderzoek en scans',
        ],
        extras: ['Extra doktersbezoek: € 80'],
      },
    },
  },

  included: {
    title: 'Wat is inbegrepen?',
    intro: 'Wat uw lidmaatschap dekt, wat extra kost en wat een lidmaatschap niet is.',
    includedTitle: 'Inbegrepen in elk lidmaatschap',
    includedItems: [
      'Een volledige gezondheidscontrole bij u thuis of in uw hotel bij aanmelding',
      'Een controle van de medicijnen die u vast gebruikt',
      'Een voedingsbeoordeling',
      'Uw persoonlijke medisch dossier, altijd bijgewerkt',
      '24/7 telefoonlijn voor dringende medische vragen',
      'Telefonische consulten met een arts',
      'Planning en coördinatie van specialistenafspraken, onderzoeken en scans',
    ],
    extraTitle: 'Tegen meerprijs',
    extraItems: [
      'Extra doktersbezoeken, tegen ledenprijs',
      'Kosten van specialisten, onderzoeken, scans en ziekenhuiszorg. Die worden door de zorgverlener gefactureerd of door uw eigen verzekering vergoed.',
      'Fysiotherapie, thuiszorg en ziekenvervoer, op aanvraag',
      'Apparaat en dienst voor personenalarmering',
    ],
    notTitle: 'Wat een lidmaatschap niet is',
    notItems: [
      'Het is geen zorgverzekering. Het vervangt uw EHIC (Europese zorgpas) of reisverzekering niet.',
      'Het is geen alarmdienst. Bel bij een noodgeval altijd 112.',
    ],
  },

  teleassistance: {
    title: 'Hulp altijd binnen handbereik.',
    body: 'Met personenalarmering van ArteagaMed draagt u een klein apparaatje met één knop. Voelt u zich niet goed, valt u of hebt u gewoon hulp nodig? Druk op de knop en u bent verbonden met onze hulpdienst.',
    stepsLabel: 'Zo werkt de alarmknop',
    steps: [
      'Druk op de knop',
      'Wij nemen op en praten met u',
      'Wij regelen de juiste hulp: van advies of een huisbezoek tot 112 bellen voor u',
    ],
    note: 'Personenalarmering wordt aangeboden naast uw lidmaatschap. We bevestigen de prijs voordat u zich aanmeldt.',
    cta: 'Meer over personenalarmering',
    photo: {
      alt: 'Een lachende oudere man belt met zijn mobiele telefoon en draagt een polshorloge',
      brief:
        'Echte foto: oudere persoon thuis of op een terras met een eenvoudige alarmknop om de pols of hals. Rustig en zelfstandig, niet kwetsbaar.',
    },
  },

  services: {
    title: 'Onze diensten',
    intro: 'Wat we bieden en hoe elke dienst wordt betaald.',
    status: {
      included: 'Inbegrepen',
      plan: 'Afhankelijk van plan',
      extra: 'Meerprijs',
    },
    statusLabel: 'Kosten',
    items: [
      {
        icon: 'stethoscope',
        status: 'included',
        title: 'Medische assistentie',
        body: 'Telefonische consulten met een arts en, afhankelijk van uw plan, bezoeken bij u thuis of in uw hotel.',
      },
      {
        icon: 'pill',
        status: 'plan',
        title: 'Apotheekassistentie',
        body: 'We controleren uw vaste medicijnen, schrijven recepten uit en bezorgen ze aan de deur.',
      },
      {
        icon: 'leaf',
        status: 'included',
        title: 'Voeding',
        body: 'Een voedingsbeoordeling voor elk lid en in sommige plannen een persoonlijk voedingsplan.',
      },
      {
        icon: 'document',
        status: 'included',
        title: 'Afspraken en papierwerk',
        body: 'We plannen specialisten en onderzoeken, regelen machtigingen en houden uw documenten op orde.',
      },
      {
        icon: 'watch',
        status: 'extra',
        title: 'Personenalarmering',
        body: 'Een draagbare alarmknop die u verbindt met onze hulpdienst.',
      },
      {
        icon: 'stretch',
        status: 'extra',
        title: 'Fysiotherapie',
        body: 'Fysiotherapie bij u thuis, op aanvraag.',
      },
      {
        icon: 'home',
        status: 'extra',
        title: 'Thuiszorg',
        body: 'Hulp thuis bij dagelijkse taken en persoonlijke verzorging, op aanvraag.',
      },
      {
        icon: 'car',
        status: 'extra',
        title: 'Ziekenvervoer',
        body: 'Vervoer naar afspraken, onderzoeken of het ziekenhuis, op aanvraag.',
      },
    ],
  },

  why: {
    title: 'Waarom ArteagaMed',
    items: [
      {
        title: 'Lokaal',
        body: 'We zijn gevestigd aan de Costa Blanca en bezoeken u waar u verblijft.',
      },
      {
        title: 'Persoonlijk',
        body: 'Een klein team dat u en uw medische voorgeschiedenis leert kennen, geen anoniem callcenter.',
      },
      {
        title: 'Eenvoudig',
        body: 'Wij regelen de Spaanse zorg voor u: afspraken, onderzoeken, recepten en papierwerk.',
      },
      {
        title: 'Meertalig',
        body: 'We werken dagelijks in het Engels en Spaans, en onze dienst is gemaakt voor internationale bezoekers.',
      },
      {
        title: 'Gericht op ouderen',
        body: 'Onze diensten zijn afgestemd op oudere reizigers, van vaste medicatie tot in beweging blijven.',
      },
    ],
    photo: {
      alt: 'Een zorgverlener houdt de handen van een oudere vrouw vast terwijl ze praten en lachen',
      brief:
        'Echte foto: professional van ArteagaMed bij een oudere patiënt thuis. Natuurlijk gesprek, oogcontact, daglicht. Bij voorkeur uw eigen team.',
    },
  },

  trust: {
    title: 'Weet wie er voor u zorgt',
    intro: 'Zorg draait om vertrouwen. Dit kunt u controleren voordat u lid wordt.',
    items: [
      {
        icon: 'users',
        title: 'Ons medisch team',
        body: 'Artsen, verpleegkundigen en verzorgenden die samen aan uw zorg werken.',
        placeholder:
          'Toevoegen: naam van de medisch directeur, specialisme en registratienummer bij het Colegio de Médicos de Alicante. Teamfoto’s.',
      },
      {
        icon: 'shield',
        title: 'Zorgregistratie',
        body: '',
        placeholder:
          'Toevoegen: inschrijvingsnummer in het Registro de Centros, Servicios y Establecimientos Sanitarios (Comunitat Valenciana), bedrijfsnaam en CIF.',
      },
      {
        icon: 'euro',
        title: 'Gepubliceerde prijzen',
        body: 'Alle lidmaatschapsprijzen staan op deze pagina, samen met wat extra kost.',
      },
      {
        icon: 'lock',
        title: 'Uw gezondheidsgegevens',
        body: 'Uw gegevens worden bewaard op servers in de Europese Unie en verwerkt volgens de AVG.',
      },
      {
        icon: 'document',
        title: 'Duidelijke voorwaarden',
        body: 'Lees de lidmaatschapsvoorwaarden en de beperkingen van de dienst voordat u lid wordt.',
      },
    ],
    links: {
      membership: 'Lidmaatschapsvoorwaarden',
      limitations: 'Beperkingen van de dienst',
      privacy: 'Privacybeleid',
    },
    testimonialsTitle: 'Wat leden zeggen',
  },

  area: {
    title: 'Waar we werken',
    body: 'We bezoeken leden thuis, in vakantiewoningen en in hotels in deze plaatsen aan de noordelijke Costa Blanca:',
    note: 'Verblijft u in de buurt? Bel ons en we laten u weten of we kunnen helpen.',
    mapTitle: 'Kaart van de noordelijke Costa Blanca',
    mapDescription:
      'Een kaart van de kust tussen Dénia en Benidorm. De plaatsen waar we komen zijn gemarkeerd: Teulada, Moraira, Benissa, Calpe en Benidorm.',
    legend: 'Plaatsen die we bezoeken',
    sea: 'Middellandse Zee',
    ifach: 'Peñón de Ifach',
  },

  faq: {
    title: 'Vragen en antwoorden',
    items: [
      {
        q: 'Voor wie is ArteagaMed?',
        a: 'ArteagaMed is voor bezoekers uit andere Europese landen die tijd doorbrengen aan de Costa Blanca. De meeste leden zijn gepensioneerd en blijven elk jaar enkele weken of maanden.',
      },
      {
        q: 'Kan ik lid worden als ik alleen op bezoek ben in Spanje?',
        a: 'Ja. U hoeft niet in Spanje te wonen of een Spaanse zorgverzekering te hebben. Laat ons weten wanneer u aankomt en waar u verblijft, dan plannen we uw eerste controle.',
      },
      {
        q: 'Hoe lang loopt het lidmaatschap?',
        a: 'Het lidmaatschap wordt per maand betaald. De eerste maand kost iets meer dan de maanden daarna. In de lidmaatschapsvoorwaarden staan de minimale looptijd en hoe u opzegt.',
      },
      {
        q: 'In welke plaatsen bent u actief?',
        a: 'We bezoeken leden op dit moment in Calpe, Moraira, Benissa, Teulada en Benidorm. Verblijft u in de buurt? Bel ons en we laten u weten of we kunnen helpen.',
      },
      {
        q: 'Wat gebeurt er als ik hulp nodig heb?',
        a: 'Bel ons op {phone}. We luisteren, geven u telefonisch medisch advies en regelen zo nodig een bezoek, een onderzoek of een afspraak met een specialist. Ook het papierwerk nemen we voor onze rekening.',
      },
      {
        q: 'Is personenalarmering inbegrepen?',
        a: 'Personenalarmering wordt aangeboden naast uw lidmaatschap, tegen meerprijs. We leggen uit hoe het werkt en bevestigen de prijs voordat u zich aanmeldt.',
      },
      {
        q: 'Zijn medische diensten inbegrepen in het lidmaatschap?',
        a: 'Ja. Telefonische consulten met een arts zitten in elk plan, en bezoeken thuis of in uw hotel in de meeste plannen. Kosten van specialisten, onderzoeken, scans en ziekenhuiszorg worden apart gefactureerd door de zorgverlener of vergoed door uw verzekering.',
      },
      {
        q: 'Kan mijn familie namens mij contact opnemen?',
        a: 'Ja. Veel lidmaatschappen worden door een zoon of dochter voor een ouder geregeld. Met uw toestemming kunnen familieleden ons bellen. We delen medische informatie alleen met mensen die u daarvoor toestemming hebt gegeven.',
      },
      {
        q: 'Bieden jullie ondersteuning in het Engels?',
        a: 'Ja. We werken dagelijks in het Engels en Spaans, en de verpleegkundigenlijn in de plannen Integraal, Voortdurend en Geavanceerd is Engelstalig.',
      },
      {
        q: 'Wat moet ik doen bij een medisch noodgeval?',
        a: 'Bel direct 112. 112 is het gratis Europese alarmnummer. Het werkt vanaf elke telefoon en de medewerkers kunnen u in het Engels helpen. ArteagaMed is geen alarmdienst en vervangt 112 niet. Zodra u veilig bent, belt u ons en helpen we u met alles wat daarna komt.',
      },
    ],
  },

  contact: {
    title: 'Neem contact op met ArteagaMed',
    intro:
      'Wilt u lid worden of hebt u vragen over het lidmaatschap? Bel ons. We beantwoorden uw vragen en plannen uw eerste controle.',
    phoneNote: '24 uur per dag, 7 dagen per week bereikbaar',
    emailNote: 'We antwoorden binnen 24 uur',
    emergencyTitle: 'Bel bij een noodgeval 112',
    emergencyBody:
      '112 is gratis, werkt vanaf elke telefoon in Spanje en de medewerkers kunnen u in het Engels helpen. ArteagaMed is geen alarmdienst.',
  },

  finalCta: {
    title: 'Geniet met meer gemoedsrust van uw tijd in Spanje.',
    body: 'Ontdek een eenvoudigere manier om zorgassistentie te krijgen tijdens uw verblijf aan de Costa Blanca.',
    primary: 'Bekijk het lidmaatschap',
    secondary: 'Neem contact op',
  },

  footer: {
    tagline:
      'Lidmaatschap voor zorg en assistentie voor internationale bezoekers aan de Costa Blanca.',
    explore: 'Ontdekken',
    legal: 'Juridisch',
    contact: 'Contact',
    disclaimer:
      'ArteagaMed is geen verzekeraar en geen alarmdienst. Bel bij een medisch noodgeval 112.',
    copyright: '© {year} ArteagaMed. Alle rechten voorbehouden.',
    region: 'Costa Blanca, Alicante, Spanje',
  },

  stickyBar: {
    label: 'Snelle acties',
    call: 'Bellen',
    membership: 'Lidmaatschap',
  },

  teleassistancePage: {
    title: 'Personenalarmering',
    heading: 'Hulp altijd binnen handbereik.',
    intro:
      'Een eenvoudige alarmknop die u om uw pols of hals draagt. Eén druk verbindt u met onze hulpdienst, zodat u nooit een telefoonnummer hoeft te zoeken.',
    howTitle: 'Hoe het werkt',
    forTitle: 'Voor wie',
    forItems: [
      'Mensen die alleen verblijven of van wie de partner vaak weg is',
      'Iedereen die minder stevig ter been is',
      'Families die gerustgesteld willen zijn terwijl een ouder in Spanje is',
    ],
    notTitle: 'Wat personenalarmering niet is',
    notBody:
      'Personenalarmering helpt u ons snel te bereiken. Het is geen alarmdienst. Is uw leven in gevaar? Bel dan direct 112.',
    priceTitle: 'Prijs',
    priceBody:
      'Personenalarmering wordt aangeboden naast elk ArteagaMed-lidmaatschap. Bel ons en we leggen de apparaten uit en bevestigen de prijs voordat u zich aanmeldt.',
    cta: 'Vraag naar personenalarmering',
    back: 'Terug naar de homepage',
  },

  legal: {
    draftNotice:
      'Dit document wordt momenteel afgerond. Hebt u er een vraag over? Bel ons op {phone}.',
    lastUpdated: 'Laatst bijgewerkt',
    pages: {
      terms: {
        title: 'Algemene voorwaarden',
        summary:
          'De voorwaarden die gelden wanneer u deze website en de diensten van ArteagaMed gebruikt.',
      },
      privacy: {
        title: 'Privacybeleid',
        summary:
          'Hoe we uw persoons- en gezondheidsgegevens verzamelen, gebruiken en beschermen volgens de AVG.',
      },
      cookies: {
        title: 'Cookiebeleid',
        summary: 'Welke cookies deze website gebruikt en waarom.',
      },
      'membership-terms': {
        title: 'Lidmaatschapsvoorwaarden',
        summary:
          'Facturering, minimale looptijd, opzegging en terugbetaling van ArteagaMed-lidmaatschappen.',
      },
      'service-limitations': {
        title: 'Beperkingen van de dienst',
        summary: 'Wat ArteagaMed-lidmaatschappen wel en niet dekken.',
      },
      emergency: {
        title: 'Informatie bij noodgevallen',
        summary: 'Wat u moet doen bij een medisch noodgeval in Spanje.',
      },
    },
    emergency: {
      lead: 'Is iemands leven mogelijk in gevaar? Bel dan direct 112.',
      points: [
        '112 is het gratis Europese alarmnummer. Het werkt vanaf elke mobiele of vaste telefoon in Spanje, ook zonder beltegoed.',
        'De medewerkers kunnen u helpen in het Engels en andere talen.',
        'Vertel zo precies mogelijk waar u bent: plaats, straat, naam van het gebouw en verdieping.',
        'ArteagaMed is geen alarmdienst en vervangt 112 niet. Zodra u veilig bent, belt u ons en helpen we u verder.',
      ],
    },
  },
} satisfies Dictionary;

export default nl;
