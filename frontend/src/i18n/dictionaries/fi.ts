import type { Dictionary } from '../index';

/** Finnish. Mirrors en.ts; keep both in sync when copy changes. */
const fi = {
  meta: {
    title: 'ArteagaMed: terveyspalvelut Costa Blancalla',
    titleTemplate: '%s | ArteagaMed',
    description:
      'Terveys- ja avustuspalvelujen jäsenyys kansainvälisille vierailijoille Calpessa, Morairassa, Benissassa, Teuladassa ja Benidormissa. Lääkäri puhelimessa, käynnit kotona tai hotellissa ja apua englanniksi.',
    ogAlt: 'ArteagaMed: terveyspalvelut Costa Blancan vierailijoille',
  },

  common: {
    phoneLabel: 'Puhelin',
    emailLabel: 'Sähköposti',
    callUs: 'Soita meille',
    learnMore: 'Lue lisää',
    opensPhone: 'Soita ArteagaMedille numeroon {phone}',
  },

  nav: {
    skip: 'Siirry pääsisältöön',
    home: 'Etusivu',
    howItWorks: 'Näin se toimii',
    services: 'Palvelut',
    membership: 'Jäsenyys',
    teleassistance: 'Turvapuhelin',
    faq: 'Kysymykset',
    contact: 'Yhteystiedot',
    getMembership: 'Liity jäseneksi',
    openMenu: 'Valikko',
    closeMenu: 'Sulje',
    mainLabel: 'Päävalikko',
    language: 'Kieli',
    comingSoon: 'tulossa',
    utilityPhone: 'Soita meille ympäri vuorokauden:',
  },

  hero: {
    title: 'Nauti Alicantesta. Me huolehdimme lopusta.',
    lead: 'Laadukkaat terveys- ja avustuspalvelut eurooppalaisille vierailijoille Costa Blancalla – paikalliselta tiimiltä, joka puhuu kieltäsi.',
    primary: 'Tutustu jäsenyyteen',
    secondary: 'Näin ArteagaMed toimii',
    trust: ['Terveyspalvelut', 'Paikallinen tuki', 'Mielenrauha'],
    trustLabel: 'ArteagaMedin palvelut',
    area: 'Käymme luonasi Calpessa, Morairassa, Benissassa, Teuladassa ja Benidormissa.',
    photo: {
      alt: 'Iäkäs pariskunta kävelee käsi kädessä rannalla',
      brief:
        'Aito kuva: iäkäs eurooppalainen pariskunta Calpen rantakadulla, taustalla Peñón de Ifach. Luonteva, ei lääketieteellisiä esineitä.',
    },
  },

  benefits: {
    title: 'Terveydenhoito ulkomailla, helposti',
    items: [
      {
        icon: 'stethoscope',
        title: 'Hoitoa silloin, kun tarvitset',
        body: 'Ammattimaista lääketieteellistä tukea ilman vieraan terveydenhuoltojärjestelmän stressiä.',
      },
      {
        icon: 'language',
        title: 'Apua omalla kielelläsi',
        body: 'Selkeitä selityksiä ja henkilökohtaista tukea koko Espanjan-oleskelusi ajan.',
      },
      {
        icon: 'pin',
        title: 'Paikallinen tuki',
        body: 'Tiimi, joka tuntee alueen, tietää missä asut ja tuntee terveyshistoriasi.',
      },
      {
        icon: 'sun',
        title: 'Mielenrauha',
        body: 'Nauti Costa Blancasta tietäen, että apu on vain puhelinsoiton päässä.',
      },
    ],
  },

  audience: {
    title: 'Niille, jotka viettävät osan vuodesta täällä',
    body: 'Viivytpä kolme viikkoa tai kuusi kuukautta, ArteagaMedin kautta sinulla on lääkäri ja tiimi, jolle voit soittaa. Sinun ei tarvitse tuntea Espanjan terveydenhuoltoa.',
    listLabel: 'ArteagaMed on tarkoitettu',
    items: [
      'Eläkeläisille, jotka viipyvät viikkoja tai kuukausia',
      'Yhdessä matkustaville pariskunnille',
      'Costa Blancan loma-asuntojen omistajille',
      'Perheille, jotka järjestävät hoitoa Espanjassa olevalle vanhemmalleen',
    ],
    cta: 'Katso jäsenyysvaihtoehdot',
    photo: {
      alt: 'Hymyilevä iäkäs pariskunta nauttii kahvista meren äärellä',
      brief:
        'Aito kuva: eläkeläiset nauttimassa arjesta (terassi, tori, rantakatu). Lämmin ja luonteva, ei lääketieteellisiä esineitä.',
    },
  },

  how: {
    title: 'Näin ArteagaMed toimii',
    steps: [
      {
        title: 'Valitse jäsenyys',
        body: 'Valitse oleskeluusi sopiva paketti. Aloitamme perusteellisella terveystarkastuksella kotonasi tai hotellissasi.',
      },
      {
        title: 'Nauti Alicantesta',
        body: 'Matkustele, rentoudu ja nauti ajastasi Costa Blancalla. Terveystietosi ovat valmiina, jos tarvitset meitä.',
      },
      {
        title: 'Saat apua, kun tarvitset',
        body: 'Soita ArteagaMedille aina, kun tarvitset jäsenyyteesi kuuluvaa apua. Me hoidamme loput.',
      },
    ],
    cta: 'Aloita',
  },

  membership: {
    title: 'Valitse jäsenyys',
    intro:
      'Jokainen jäsenyys alkaa perusteellisella terveystarkastuksella kotonasi tai hotellissasi. Ensimmäinen kuukausi maksaa hieman enemmän, sen jälkeen maksat kuukausihinnan.',
    perMonth: 'kuukaudessa',
    firstMonth: 'Ensimmäinen kuukausi {price}',
    recommended: 'Suositeltu',
    choose: 'Valitse {plan}',
    keyFeatures: 'Tärkeimmät',
    seeAll: 'Kaikki sisältö',
    extrasTitle: 'Lisämaksusta',
    note: 'Hinnat euroina, laskutus kuukausittain. Vähimmäiskesto, irtisanominen ja hyvitykset kerrotaan jäsenyysehdoissa.',
    termsLink: 'Lue jäsenyysehdot',
    plans: {
      basic: {
        name: 'Perusapu',
        summary: 'Lääkäri puhelimessa tarvittaessa ja perusteellinen terveystarkastus alkuun.',
        highlights: [
          'Perusteellinen tarkastus kotonasi tai hotellissasi',
          'Enintään 4 puhelinvastaanottoa lääkärin kanssa kuukaudessa',
          'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
          'Apua erikoislääkäriaikojen, laboratoriokokeiden ja kuvausten varaamiseen',
        ],
        included: [
          'Perusteellinen terveystarkastus ja lääkärintutkimus kotonasi tai hotellissasi',
          'Säännöllisesti käyttämiesi lääkkeiden läpikäynti',
          'Ravitsemusarvio',
          'Henkilökohtainen terveyskertomus sairauksien seurantaan',
          'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
          'Puhelinvastaanotot lääkärin kanssa (enintään 4 kuukaudessa)',
          'Erikoislääkäriaikojen, verikokeiden ja kuvantamistutkimusten varaaminen ja koordinointi',
        ],
        extras: [
          'Lääkärikäynti kotona tai hotellissa: 90 €',
          'Säännöllisten lääkkeiden resepti ja kotiinkuljetus: 25 € kuukaudessa',
        ],
      },
      integral: {
        name: 'Kokonaisvaltainen apu',
        summary:
          'Lääkärin kotikäynti joka kuukausi, englanninkielinen sairaanhoitaja puhelimessa ja lääkkeesi hoidettuina.',
        highlights: [
          'Yksi lääkärin kotikäynti joka kuukausi',
          'Enintään 8 puhelinvastaanottoa kuukaudessa',
          'Englanninkielinen sairaanhoitajalinja ympäri vuorokauden',
          'Säännölliset lääkkeet määrättyinä ja toimitettuina',
        ],
        included: [
          'Perusteellinen terveystarkastus ja lääkärintutkimus kotonasi tai hotellissasi',
          'Säännöllisesti käyttämiesi lääkkeiden läpikäynti',
          'Ravitsemusarvio ja ruokavalio-ohjeet',
          'Lääkityksen arviointi tarpeettomien tai yhteensopimattomien lääkkeiden välttämiseksi',
          'Terveyskertomus, johon kootaan sairaalan ja vastaanoton tulokset',
          'Puhelinvastaanotot lääkärin kanssa (enintään 8 kuukaudessa)',
          'Englanninkielinen sairaanhoitajalinja ympäri vuorokauden',
          'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
          'Yksi lääkärin kotikäynti joka kuukausi',
          'Erikoislääkäriaikojen, verikokeiden ja kuvantamistutkimusten varaaminen ja koordinointi',
          'Säännöllisten lääkkeiden resepti ja kotiinkuljetus',
        ],
        extras: ['Ylimääräinen lääkärikäynti: 80 €'],
      },
      continuada: {
        name: 'Jatkuva apu',
        summary:
          'Pitkiin oleskeluihin tai pitkäaikaissairauksiin: kaksi käyntiä kuukaudessa ja tarvittaessa lääkäri puhelimessa päivittäin.',
        highlights: [
          'Kaksi lääkärikäyntiä kuukaudessa terveysmittauksineen',
          'Puhelinvastaanotto joka päivä tarvittaessa',
          'Henkilökohtainen ruokavaliosuunnitelma',
          'Englanninkielinen sairaanhoitajalinja ympäri vuorokauden',
        ],
        included: [
          'Perusteellinen terveystarkastus ja lääkärintutkimus kotonasi tai hotellissasi',
          'Säännöllisesti käyttämiesi lääkkeiden läpikäynti',
          'Sairauksiisi perustuva henkilökohtainen ruokavaliosuunnitelma',
          'Lääkityksen arviointi tarpeettomien tai yhteensopimattomien lääkkeiden välttämiseksi',
          'Terveyskertomus, johon kootaan sairaalan ja vastaanoton tulokset',
          'Puhelinvastaanotto lääkärin kanssa joka päivä tarvittaessa',
          'Englanninkielinen sairaanhoitajalinja ympäri vuorokauden',
          'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
          'Kaksi lääkärikäyntiä kuukaudessa: verenpaine, happisaturaatio, verensokeri ja EKG',
          'Säännöllisten lääkkeiden resepti ja kotiinkuljetus',
          'Erikoislääkäriaikojen, verikokeiden ja kuvantamistutkimusten varaaminen ja koordinointi',
        ],
        extras: ['Ylimääräinen lääkärikäynti: 80 €'],
      },
      avanzada: {
        name: 'Tehostettu apu',
        summary:
          'Tiivis lääketieteellinen seuranta joka viikko, ja erikoislääkäritiimi käy tilanteesi säännöllisesti läpi.',
        highlights: [
          'Viikoittainen lääkärikäynti terveysmittauksineen',
          'Sisätautilääkäri, kardiologi ja geriatri käyvät tilanteesi läpi joka toinen viikko',
          'Puhelinvastaanotto joka päivä tarvittaessa',
          'Säännölliset lääkkeet määrättyinä ja toimitettuina',
        ],
        included: [
          'Perusteellinen terveystarkastus ja lääkärintutkimus kotonasi tai hotellissasi',
          'Säännöllisesti käyttämiesi lääkkeiden läpikäynti',
          'Sairauksiisi perustuva henkilökohtainen ruokavaliosuunnitelma',
          'Lääkityksen arviointi tarpeettomien tai yhteensopimattomien lääkkeiden välttämiseksi',
          'Terveyskertomus, johon kootaan sairaalan ja vastaanoton tulokset',
          'Puhelinvastaanotto lääkärin kanssa joka päivä tarvittaessa',
          'Englanninkielinen sairaanhoitajalinja ympäri vuorokauden',
          'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
          'Viikoittainen lääkärikäynti: verenpaine, happisaturaatio, verensokeri ja EKG',
          'Sisätautilääkäri, kardiologi ja geriatri käyvät tilanteesi läpi joka toinen viikko',
          'Säännöllisten lääkkeiden resepti ja kotiinkuljetus',
          'Erikoislääkäriaikojen, verikokeiden ja kuvantamistutkimusten varaaminen ja koordinointi',
        ],
        extras: ['Ylimääräinen lääkärikäynti: 80 €'],
      },
    },
  },

  included: {
    title: 'Mitä jäsenyyteen sisältyy?',
    intro: 'Mitä jäsenyytesi kattaa, mikä maksaa lisää ja mitä jäsenyys ei ole.',
    includedTitle: 'Sisältyy jokaiseen jäsenyyteen',
    includedItems: [
      'Perusteellinen terveystarkastus kotonasi tai hotellissasi liittyessäsi',
      'Säännöllisesti käyttämiesi lääkkeiden läpikäynti',
      'Ravitsemusarvio',
      'Henkilökohtainen terveyskertomuksesi, aina ajan tasalla',
      'Ympärivuorokautinen puhelinlinja kiireellisiin lääketieteellisiin kysymyksiin',
      'Puhelinvastaanotot lääkärin kanssa',
      'Erikoislääkäriaikojen, kokeiden ja kuvausten varaaminen ja koordinointi',
    ],
    extraTitle: 'Lisämaksusta',
    extraItems: [
      'Ylimääräiset lääkärikäynnit jäsenhintaan',
      'Erikoislääkäreiden palkkiot, kokeet, kuvaukset ja sairaalahoito. Palveluntarjoaja laskuttaa ne, tai ne korvataan omasta vakuutuksestasi.',
      'Fysioterapia, kotiapu ja sairaankuljetus pyynnöstä',
      'Turvapuhelinlaite ja -palvelu',
    ],
    notTitle: 'Mitä jäsenyys ei ole',
    notItems: [
      'Se ei ole sairausvakuutus. Se ei korvaa eurooppalaista sairaanhoitokorttia (EHIC) tai matkavakuutusta.',
      'Se ei ole hätäpalvelu. Hätätilanteessa soita aina 112.',
    ],
  },

  teleassistance: {
    title: 'Apu aina ulottuvillasi.',
    body: 'ArteagaMedin turvapuhelimessa sinulla on pieni laite, jossa on yksi painike. Jos voit huonosti, kaadut tai tarvitset muuten apua, paina painiketta, niin saat yhteyden palvelukeskukseemme.',
    stepsLabel: 'Näin hälytyspainike toimii',
    steps: [
      'Paina painiketta',
      'Vastaamme ja puhumme kanssasi',
      'Järjestämme oikeanlaisen avun neuvoista ja kotikäynnistä aina hätänumeroon 112 soittamiseen puolestasi',
    ],
    note: 'Turvapuhelinta tarjotaan jäsenyyden lisäpalveluna. Vahvistamme hinnan ennen kuin teet sopimuksen.',
    cta: 'Tutustu turvapuhelimeen',
    photo: {
      alt: 'Hymyilevä iäkäs mies puhuu matkapuhelimeen rannekello ranteessaan',
      brief:
        'Aito kuva: iäkäs henkilö kotona tai terassilla yksinkertainen hälytyspainike ranteessa tai kaulassa. Rauhallinen ja omatoiminen, ei hauras.',
    },
  },

  services: {
    title: 'Palvelumme',
    intro: 'Mitä tarjoamme ja miten kukin palvelu maksetaan.',
    status: {
      included: 'Sisältyy',
      plan: 'Paketin mukaan',
      extra: 'Lisämaksu',
    },
    statusLabel: 'Hinta',
    items: [
      {
        icon: 'stethoscope',
        status: 'included',
        title: 'Lääkäripalvelut',
        body: 'Puhelinvastaanotot lääkärin kanssa sekä paketista riippuen käynnit kotonasi tai hotellissasi.',
      },
      {
        icon: 'pill',
        status: 'plan',
        title: 'Apteekkipalvelut',
        body: 'Käymme säännölliset lääkkeesi läpi, kirjoitamme reseptit ja toimitamme lääkkeet kotiovellesi.',
      },
      {
        icon: 'leaf',
        status: 'included',
        title: 'Ravitsemus',
        body: 'Ravitsemusarvio jokaiselle jäsenelle ja osassa paketteja henkilökohtainen ruokavaliosuunnitelma.',
      },
      {
        icon: 'document',
        status: 'included',
        title: 'Ajanvaraukset ja paperityöt',
        body: 'Varaamme erikoislääkäri- ja tutkimusajat, hoidamme luvat ja pidämme asiakirjasi järjestyksessä.',
      },
      {
        icon: 'watch',
        status: 'extra',
        title: 'Turvapuhelin',
        body: 'Mukana kulkeva hälytyspainike, joka yhdistää sinut palvelukeskukseemme.',
      },
      {
        icon: 'stretch',
        status: 'extra',
        title: 'Fysioterapia',
        body: 'Fysioterapiaa kotonasi pyynnöstä.',
      },
      {
        icon: 'home',
        status: 'extra',
        title: 'Kotiapu',
        body: 'Apua kotona päivittäisissä askareissa ja henkilökohtaisessa hoidossa pyynnöstä.',
      },
      {
        icon: 'car',
        status: 'extra',
        title: 'Sairaankuljetus',
        body: 'Kuljetus vastaanotolle, tutkimuksiin tai sairaalaan pyynnöstä.',
      },
    ],
  },

  why: {
    title: 'Miksi ArteagaMed',
    items: [
      {
        title: 'Paikallinen',
        body: 'Toimimme Costa Blancalla ja tulemme luoksesi sinne, missä asut.',
      },
      {
        title: 'Henkilökohtainen',
        body: 'Pieni tiimi, joka oppii tuntemaan sinut ja terveyshistoriasi, ei nimetön puhelinpalvelu.',
      },
      {
        title: 'Helppo',
        body: 'Hoidamme asiat Espanjan terveydenhuollon kanssa puolestasi: ajanvaraukset, tutkimukset, reseptit ja paperityöt.',
      },
      {
        title: 'Monikielinen',
        body: 'Työskentelemme päivittäin englanniksi ja espanjaksi, ja palvelumme on suunniteltu kansainvälisille vierailijoille.',
      },
      {
        title: 'Ikääntyneiden ehdoilla',
        body: 'Palvelumme on suunniteltu kypsän iän matkailijoille, säännöllisestä lääkityksestä liikkumiskyvyn ylläpitoon.',
      },
    ],
    photo: {
      alt: 'Hoitaja pitää iäkästä naista käsistä, kun he juttelevat ja hymyilevät',
      brief:
        'Aito kuva: ArteagaMedin ammattilainen iäkkään potilaan luona kotona. Luonteva keskustelu, katsekontakti, päivänvalo. Mieluiten oma tiimisi.',
    },
  },

  trust: {
    title: 'Tiedä, kuka sinusta huolehtii',
    intro: 'Terveydenhoito perustuu luottamukseen. Nämä asiat voit tarkistaa ennen liittymistä.',
    items: [
      {
        icon: 'users',
        title: 'Lääketieteellinen tiimimme',
        body: 'Lääkärit, sairaanhoitajat ja lähihoitajat, jotka tekevät yhdessä työtä hoitosi eteen.',
        placeholder:
          'Lisää: vastaavan lääkärin nimi, erikoisala ja Colegio de Médicos de Alicante -rekisterinumero. Tiimikuvat.',
      },
      {
        icon: 'shield',
        title: 'Terveydenhuollon rekisteröinti',
        body: '',
        placeholder:
          'Lisää: rekisterinumero Registro de Centros, Servicios y Establecimientos Sanitarios -rekisterissä (Comunitat Valenciana), yrityksen nimi ja CIF.',
      },
      {
        icon: 'euro',
        title: 'Julkiset hinnat',
        body: 'Kaikki jäsenyyshinnat ovat tällä sivulla, samoin tieto siitä, mikä maksaa lisää.',
      },
      {
        icon: 'lock',
        title: 'Terveystietosi',
        body: 'Tietojasi säilytetään Euroopan unionissa sijaitsevilla palvelimilla, ja niitä käsitellään tietosuoja-asetuksen (GDPR) mukaisesti.',
      },
      {
        icon: 'document',
        title: 'Selkeät ehdot',
        body: 'Lue jäsenyysehdot ja palvelun rajoitukset ennen liittymistä.',
      },
    ],
    links: {
      membership: 'Jäsenyysehdot',
      limitations: 'Palvelun rajoitukset',
      privacy: 'Tietosuojaseloste',
    },
    testimonialsTitle: 'Jäsenten kokemuksia',
  },

  area: {
    title: 'Missä toimimme',
    body: 'Käymme jäsentemme luona kotona, loma-asunnoissa ja hotelleissa näillä paikkakunnilla pohjoisella Costa Blancalla:',
    note: 'Asutko lähistöllä? Soita meille, niin kerromme, voimmeko auttaa.',
    mapTitle: 'Pohjoisen Costa Blancan kartta',
    mapDescription:
      'Kartta rannikosta Dénian ja Benidormin välillä. Palvelemamme paikkakunnat on merkitty: Teulada, Moraira, Benissa, Calpe ja Benidorm.',
    legend: 'Paikkakunnat, joilla käymme',
    sea: 'Välimeri',
    ifach: 'Peñón de Ifach',
  },

  faq: {
    title: 'Kysymyksiä ja vastauksia',
    items: [
      {
        q: 'Kenelle ArteagaMed on tarkoitettu?',
        a: 'ArteagaMed on tarkoitettu muista Euroopan maista tuleville vierailijoille, jotka viettävät aikaa Costa Blancalla. Useimmat jäsenemme ovat eläkeläisiä ja viipyvät vuosittain muutamasta viikosta useisiin kuukausiin.',
      },
      {
        q: 'Voinko liittyä, jos olen Espanjassa vain käymässä?',
        a: 'Kyllä. Sinun ei tarvitse asua Espanjassa eikä sinulla tarvitse olla espanjalaista sairausvakuutusta. Kerro, milloin saavut ja missä asut, niin järjestämme ensimmäisen tarkastuksesi.',
      },
      {
        q: 'Kuinka kauan jäsenyys kestää?',
        a: 'Jäsenyys maksetaan kuukausi kerrallaan. Ensimmäinen kuukausi maksaa hieman enemmän kuin seuraavat. Jäsenyysehdoissa kerrotaan vähimmäiskesto ja irtisanomisen ohjeet.',
      },
      {
        q: 'Millä alueilla toimitte?',
        a: 'Käymme tällä hetkellä jäsenten luona Calpessa, Morairassa, Benissassa, Teuladassa ja Benidormissa. Jos asut lähistöllä, soita meille, niin kerromme, voimmeko auttaa.',
      },
      {
        q: 'Mitä tapahtuu, kun tarvitsen apua?',
        a: 'Soita meille numeroon {phone}. Kuuntelemme, annamme lääketieteellisiä neuvoja puhelimessa ja järjestämme tarvittaessa käynnin, tutkimuksen tai erikoislääkäriajan. Hoidamme myös paperityöt.',
      },
      {
        q: 'Sisältyykö turvapuhelin jäsenyyteen?',
        a: 'Turvapuhelinta tarjotaan jäsenyyden lisäpalveluna lisämaksusta. Kerromme, miten se toimii, ja vahvistamme hinnan ennen kuin teet sopimuksen.',
      },
      {
        q: 'Sisältyykö jäsenyyteen lääkäripalveluja?',
        a: 'Kyllä. Puhelinvastaanotot lääkärin kanssa sisältyvät kaikkiin paketteihin ja käynnit kotona tai hotellissa useimpiin. Erikoislääkäreiden palkkiot, kokeet, kuvaukset ja sairaalahoito laskuttaa erikseen palveluntarjoaja, tai ne korvataan vakuutuksestasi.',
      },
      {
        q: 'Voiko perheeni ottaa yhteyttä ArteagaMediin puolestani?',
        a: 'Kyllä. Monet jäsenyydet järjestää poika tai tytär vanhemmalleen. Luvallasi perheenjäsenet voivat soittaa meille. Jaamme terveystietoja vain henkilöille, joille olet antanut luvan.',
      },
      {
        q: 'Saako teiltä apua englanniksi?',
        a: 'Kyllä. Työskentelemme päivittäin englanniksi ja espanjaksi, ja Kokonaisvaltainen apu-, Jatkuva apu- ja Tehostettu apu -pakettien sairaanhoitajalinja on englanninkielinen.',
      },
      {
        q: 'Mitä teen lääketieteellisessä hätätilanteessa?',
        a: 'Soita heti 112. 112 on maksuton eurooppalainen hätänumero. Se toimii mistä tahansa puhelimesta, ja päivystäjät voivat auttaa englanniksi. ArteagaMed ei ole hätäpalvelu eikä korvaa numeroa 112. Kun olet turvassa, soita meille, niin autamme kaikessa, mitä sen jälkeen tarvitaan.',
      },
    ],
  },

  contact: {
    title: 'Ota yhteyttä ArteagaMediin',
    intro:
      'Haluatko liittyä jäseneksi tai kysyä jäsenyydestä? Soita meille. Vastaamme kysymyksiisi ja sovimme ensimmäisen terveystarkastuksesi.',
    phoneNote: 'Palvelemme ympäri vuorokauden, joka päivä',
    emailNote: 'Vastaamme 24 tunnin kuluessa',
    emergencyTitle: 'Hätätilanteessa soita 112',
    emergencyBody:
      '112 on maksuton, toimii mistä tahansa puhelimesta Espanjassa, ja päivystäjät voivat auttaa englanniksi. ArteagaMed ei ole hätäpalvelu.',
  },

  finalCta: {
    title: 'Nauti ajastasi Espanjassa entistä huolettomammin.',
    body: 'Tutustu helpompaan tapaan saada terveyspalveluja Costa Blanca -oleskelusi aikana.',
    primary: 'Tutustu jäsenyyteen',
    secondary: 'Ota yhteyttä',
  },

  footer: {
    tagline:
      'Terveys- ja avustuspalvelujen jäsenyys kansainvälisille vierailijoille Costa Blancalla.',
    explore: 'Tutustu',
    legal: 'Juridiset tiedot',
    contact: 'Yhteystiedot',
    disclaimer:
      'ArteagaMed ei ole vakuutusyhtiö eikä hätäpalvelu. Lääketieteellisessä hätätilanteessa soita 112.',
    copyright: '© {year} ArteagaMed. Kaikki oikeudet pidätetään.',
    region: 'Costa Blanca, Alicante, Espanja',
  },

  stickyBar: {
    label: 'Pikatoiminnot',
    call: 'Soita',
    membership: 'Jäsenyys',
  },

  teleassistancePage: {
    title: 'Turvapuhelin',
    heading: 'Apu aina ulottuvillasi.',
    intro:
      'Yksinkertainen hälytyspainike ranteessa tai kaulassa. Yksi painallus yhdistää sinut palvelukeskukseemme, joten sinun ei koskaan tarvitse etsiä puhelinnumeroa.',
    howTitle: 'Näin se toimii',
    forTitle: 'Kenelle se sopii',
    forItems: [
      'Yksin asuville tai niille, joiden puoliso on usein poissa',
      'Kaikille, jotka tuntevat olonsa epävarmemmaksi jaloillaan',
      'Perheille, jotka haluavat mielenrauhaa vanhemman ollessa Espanjassa',
    ],
    notTitle: 'Mitä turvapuhelin ei ole',
    notBody:
      'Turvapuhelimen avulla tavoitat meidät nopeasti. Se ei ole hätäpalvelu. Jos henkesi on vaarassa, soita suoraan 112.',
    priceTitle: 'Hinta',
    priceBody:
      'Turvapuhelinta tarjotaan kaikkien ArteagaMed-jäsenyyksien lisäpalveluna. Soita meille, niin kerromme laitevaihtoehdoista ja vahvistamme hinnan ennen kuin teet sopimuksen.',
    cta: 'Kysy turvapuhelimesta',
    back: 'Takaisin etusivulle',
  },

  legal: {
    draftNotice:
      'Tämä asiakirja viimeistellään parhaillaan. Jos sinulla on siitä kysyttävää, soita meille numeroon {phone}.',
    lastUpdated: 'Päivitetty viimeksi',
    pages: {
      terms: {
        title: 'Käyttöehdot',
        summary:
          'Ehdot, joita sovelletaan, kun käytät tätä verkkosivustoa ja ArteagaMedin palveluja.',
      },
      privacy: {
        title: 'Tietosuojaseloste',
        summary:
          'Miten keräämme, käytämme ja suojaamme henkilö- ja terveystietojasi tietosuoja-asetuksen mukaisesti.',
      },
      cookies: {
        title: 'Evästekäytäntö',
        summary: 'Mitä evästeitä tämä sivusto käyttää ja miksi.',
      },
      'membership-terms': {
        title: 'Jäsenyysehdot',
        summary: 'ArteagaMed-jäsenyyksien laskutus, vähimmäiskesto, irtisanominen ja hyvitykset.',
      },
      'service-limitations': {
        title: 'Palvelun rajoitukset',
        summary: 'Mitä ArteagaMed-jäsenyydet kattavat ja mitä eivät.',
      },
      emergency: {
        title: 'Hätätilanneohjeet',
        summary: 'Miten toimia lääketieteellisessä hätätilanteessa Espanjassa.',
      },
    },
    emergency: {
      lead: 'Jos jonkun henki voi olla vaarassa, soita heti 112.',
      points: [
        '112 on maksuton eurooppalainen hätänumero. Se toimii kaikista matka- ja lankapuhelimista Espanjassa, myös ilman saldoa.',
        'Päivystäjät voivat auttaa englanniksi ja muilla kielillä.',
        'Kerro sijaintisi mahdollisimman tarkasti: paikkakunta, katu, rakennuksen nimi ja kerros.',
        'ArteagaMed ei ole hätäpalvelu eikä korvaa numeroa 112. Kun olet turvassa, soita meille, niin autamme eteenpäin.',
      ],
    },
  },
} satisfies Dictionary;

export default fi;
