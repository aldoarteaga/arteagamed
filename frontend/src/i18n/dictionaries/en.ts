import type { IconName } from '@/components/ui/Icon';

export type ServiceStatus = 'included' | 'plan' | 'extra';

/**
 * English copy for the public site. This file defines the shape every other
 * language must follow (see `Dictionary` in ../index.ts).
 *
 * Content rules (healthcare):
 *  - Never describe ArteagaMed as insurance or an emergency service.
 *  - Prices are NOT written here; they come from PLAN_DETAILS in @eart/shared-types.
 *  - `{placeholders}` are filled with `fill()` from ../format.ts.
 */
const en = {
  meta: {
    title: 'ArteagaMed: healthcare assistance on the Costa Blanca',
    titleTemplate: '%s | ArteagaMed',
    description:
      'Healthcare and assistance membership for international visitors staying in Calpe, Moraira, Benissa, Teulada and Benidorm. Doctor by phone, home and hotel visits, and help in English.',
    ogAlt: 'ArteagaMed: healthcare assistance for visitors on the Costa Blanca',
  },

  common: {
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    callUs: 'Call us',
    learnMore: 'Learn more',
    opensPhone: 'Call ArteagaMed on {phone}',
  },

  nav: {
    skip: 'Skip to main content',
    home: 'Home',
    howItWorks: 'How it works',
    services: 'Services',
    membership: 'Membership',
    teleassistance: 'Teleassistance',
    faq: 'FAQ',
    contact: 'Contact',
    getMembership: 'Get membership',
    openMenu: 'Menu',
    closeMenu: 'Close',
    mainLabel: 'Main',
    language: 'Language',
    comingSoon: 'coming soon',
    utilityPhone: 'Call us 24 hours a day:',
  },

  hero: {
    title: 'Enjoy Alicante. We’ll take care of the rest.',
    lead: 'Premium healthcare and assistance for European visitors on the Costa Blanca, from a local team that speaks your language.',
    primary: 'Explore membership',
    secondary: 'How ArteagaMed works',
    trust: ['Healthcare assistance', 'Local support', 'Peace of mind'],
    trustLabel: 'What ArteagaMed offers',
    area: 'We visit you in Calpe, Moraira, Benissa, Teulada and Benidorm.',
    photo: {
      alt: 'An older couple walking hand in hand along the beach',
      brief:
        'Real photo: older European couple walking on Calpe seafront, Peñón de Ifach behind, morning light. Not posed, not medical.',
    },
  },

  benefits: {
    title: 'Healthcare abroad, made simple',
    items: [
      {
        icon: 'stethoscope' as IconName,
        title: 'Healthcare when you need it',
        body: 'Professional medical support, without the stress of an unfamiliar healthcare system.',
      },
      {
        icon: 'language' as IconName,
        title: 'Help in your language',
        body: 'Clear explanations and personal support for as long as you’re in Spain.',
      },
      {
        icon: 'pin' as IconName,
        title: 'Local support',
        body: 'A team that knows the area, knows where you’re staying and knows your health history.',
      },
      {
        icon: 'sun' as IconName,
        title: 'Peace of mind',
        body: 'Enjoy the Costa Blanca knowing that help is only a phone call away.',
      },
    ],
  },

  audience: {
    title: 'Made for people who spend part of the year here',
    body: 'Whether you’re here for three weeks or six months, ArteagaMed gives you a doctor and a team you can call. You don’t need to understand how Spanish healthcare works.',
    listLabel: 'ArteagaMed is for',
    items: [
      'Retired visitors staying for weeks or months',
      'Couples travelling together',
      'Owners of a second home on the Costa Blanca',
      'Families arranging care for a parent in Spain',
    ],
    cta: 'See membership options',
    photo: {
      alt: 'A smiling older couple enjoying a coffee by the sea',
      brief:
        'Real photo: retired visitors enjoying daily life (café terrace, market, promenade). Warm, candid, no medical props.',
    },
  },

  how: {
    title: 'How ArteagaMed works',
    steps: [
      {
        title: 'Choose your membership',
        body: 'Pick the plan that fits your stay. We start with a full check-up at your home or hotel.',
      },
      {
        title: 'Enjoy Alicante',
        body: 'Travel, relax and enjoy your time on the Costa Blanca. Your health record is ready if you need us.',
      },
      {
        title: 'Get support when you need it',
        body: 'Call ArteagaMed whenever you need help that your membership covers. We take it from there.',
      },
    ],
    cta: 'Get started',
  },

  membership: {
    title: 'Choose your membership',
    intro:
      'Every membership starts with a full health check at your home or hotel. The first month costs a little more. After that, you pay the monthly price.',
    perMonth: 'per month',
    firstMonth: 'First month {price}',
    recommended: 'Recommended',
    choose: 'Choose {plan}',
    keyFeatures: 'Highlights',
    seeAll: 'Everything included',
    extrasTitle: 'At extra cost',
    note: 'Prices in euros, billed monthly. Minimum stay, cancellation and refunds are explained in the membership terms.',
    termsLink: 'Read the membership terms',
    plans: {
      basic: {
        name: 'Basic Assistance',
        summary: 'A doctor on the phone when you need one, and a full check-up to start.',
        highlights: [
          'Full check-up at your home or hotel',
          'Up to 4 phone consultations with a doctor each month',
          '24/7 phone line for urgent medical questions',
          'Help booking specialists, tests and scans',
        ],
        included: [
          'Full health check and examination at your home or hotel',
          'Review of the medicines you take regularly',
          'Nutrition check',
          'Personal health record to follow up any conditions',
          '24/7 phone line for urgent medical questions',
          'Phone consultations with a doctor (up to 4 a month)',
          'Booking and coordination of specialist appointments, blood tests and scans',
        ],
        extras: [
          'Doctor visit at home or hotel: €90',
          'Prescription and home delivery of regular medication: €25 a month',
        ],
      },
      integral: {
        name: 'Comprehensive Assistance',
        summary:
          'A monthly home visit, a nurse to call in English, and your medication taken care of.',
        highlights: [
          'One doctor visit at home every month',
          'Up to 8 phone consultations each month',
          '24/7 nurse line in English',
          'Regular medication prescribed and delivered',
        ],
        included: [
          'Full health check and examination at your home or hotel',
          'Review of the medicines you take regularly',
          'Nutrition check with diet advice',
          'Medication review to avoid unnecessary or conflicting medicines',
          'Health record that brings together your hospital and clinic results',
          'Phone consultations with a doctor (up to 8 a month)',
          '24/7 nurse line in English',
          '24/7 phone line for urgent medical questions',
          'One doctor visit at home every month',
          'Booking and coordination of specialist appointments, blood tests and scans',
          'Prescription and home delivery of regular medication',
        ],
        extras: ['Extra doctor visit: €80'],
      },
      continuada: {
        name: 'Continued Assistance',
        summary:
          'For long stays or ongoing conditions: two visits a month and a doctor on the phone daily if needed.',
        highlights: [
          'Two doctor visits a month with health checks',
          'A phone consultation every day if you need it',
          'Personal diet plan',
          '24/7 nurse line in English',
        ],
        included: [
          'Full health check and examination at your home or hotel',
          'Review of the medicines you take regularly',
          'Personal diet plan based on your health conditions',
          'Medication review to avoid unnecessary or conflicting medicines',
          'Health record that brings together your hospital and clinic results',
          'A phone consultation with a doctor every day, if you need it',
          '24/7 nurse line in English',
          '24/7 phone line for urgent medical questions',
          'Two doctor visits a month, with blood pressure, oxygen, blood sugar and ECG checks',
          'Prescription and home delivery of regular medication',
          'Booking and coordination of specialist appointments, blood tests and scans',
        ],
        extras: ['Extra doctor visit: €80'],
      },
      avanzada: {
        name: 'Advanced Assistance',
        summary: 'Close medical follow-up every week, reviewed regularly by a team of specialists.',
        highlights: [
          'Weekly doctor visit with health checks',
          'Case review every two weeks by an internist, a cardiologist and a geriatrician',
          'A phone consultation every day if you need it',
          'Regular medication prescribed and delivered',
        ],
        included: [
          'Full health check and examination at your home or hotel',
          'Review of the medicines you take regularly',
          'Personal diet plan based on your health conditions',
          'Medication review to avoid unnecessary or conflicting medicines',
          'Health record that brings together your hospital and clinic results',
          'A phone consultation with a doctor every day, if you need it',
          '24/7 nurse line in English',
          '24/7 phone line for urgent medical questions',
          'Weekly doctor visit, with blood pressure, oxygen, blood sugar and ECG checks',
          'Case review every two weeks by an internist, a cardiologist and a geriatrician',
          'Prescription and home delivery of regular medication',
          'Booking and coordination of specialist appointments, blood tests and scans',
        ],
        extras: ['Extra doctor visit: €80'],
      },
    },
  },

  included: {
    title: 'What’s included?',
    intro: 'What your membership pays for, what costs extra, and what membership is not.',
    includedTitle: 'Included in every membership',
    includedItems: [
      'A full health check at your home or hotel when you join',
      'A review of the medicines you take regularly',
      'A nutrition check',
      'Your personal health record, kept up to date',
      '24/7 phone line for urgent medical questions',
      'Phone consultations with a doctor',
      'Booking and coordinating specialist appointments, tests and scans',
    ],
    extraTitle: 'At extra cost',
    extraItems: [
      'Additional doctor visits, at a member price',
      'Specialist fees, tests, scans and hospital care. These are billed by the provider or covered by your own insurance.',
      'Physiotherapy, home care and medical transport, arranged on request',
      'Teleassistance device and service',
    ],
    notTitle: 'What membership is not',
    notItems: [
      'It is not health insurance. It doesn’t replace your EHIC, GHIC or travel insurance.',
      'It is not an emergency service. In an emergency, always call 112.',
    ],
  },

  teleassistance: {
    title: 'Help is always within reach.',
    body: 'With ArteagaMed teleassistance, you wear a small device with a single button. If you feel unwell, have a fall or simply need help, press it and you’re connected to our support service.',
    stepsLabel: 'How the help button works',
    steps: [
      'Press the button',
      'We answer and talk to you',
      'We arrange the right help, from advice or a home visit to calling 112 for you',
    ],
    note: 'Teleassistance is offered alongside your membership. We’ll confirm the price before you sign up.',
    cta: 'Learn about teleassistance',
    photo: {
      alt: 'A smiling older man talking on his mobile phone, wearing a wristwatch',
      brief:
        'Real photo: older person at home or on a terrace, wearing a simple wrist or pendant help button. Calm and independent, not frail.',
    },
  },

  services: {
    title: 'Our services',
    intro: 'What we offer and how each service is paid for.',
    status: {
      included: 'Included',
      plan: 'Depends on plan',
      extra: 'Extra cost',
    },
    statusLabel: 'Cost',
    items: [
      {
        icon: 'stethoscope' as IconName,
        status: 'included' as ServiceStatus,
        title: 'Medical assistance',
        body: 'Phone consultations with a doctor, plus visits to your home or hotel depending on your plan.',
      },
      {
        icon: 'pill' as IconName,
        status: 'plan' as ServiceStatus,
        title: 'Pharmacy assistance',
        body: 'We review your regular medicines, write prescriptions and deliver them to your door.',
      },
      {
        icon: 'leaf' as IconName,
        status: 'included' as ServiceStatus,
        title: 'Nutrition',
        body: 'A nutrition check for every member, and a personal diet plan in some plans.',
      },
      {
        icon: 'document' as IconName,
        status: 'included' as ServiceStatus,
        title: 'Appointments and paperwork',
        body: 'We book specialists and tests, handle authorisations and keep your documents in order.',
      },
      {
        icon: 'watch' as IconName,
        status: 'extra' as ServiceStatus,
        title: 'Teleassistance',
        body: 'A wearable help button that connects you with our support service.',
      },
      {
        icon: 'stretch' as IconName,
        status: 'extra' as ServiceStatus,
        title: 'Physiotherapy',
        body: 'Physiotherapy sessions at your home, arranged on request.',
      },
      {
        icon: 'home' as IconName,
        status: 'extra' as ServiceStatus,
        title: 'Home care',
        body: 'Help at home with daily tasks and personal care, arranged on request.',
      },
      {
        icon: 'car' as IconName,
        status: 'extra' as ServiceStatus,
        title: 'Medical transport',
        body: 'Transport to appointments, tests or hospital, arranged on request.',
      },
    ],
  },

  why: {
    title: 'Why ArteagaMed',
    items: [
      {
        title: 'Local',
        body: 'We’re based on the Costa Blanca and visit you where you’re staying.',
      },
      {
        title: 'Personal',
        body: 'A small team that gets to know you and your health history, not an anonymous call centre.',
      },
      {
        title: 'Simple',
        body: 'We deal with Spanish healthcare for you: appointments, tests, prescriptions and paperwork.',
      },
      {
        title: 'Multilingual',
        body: 'We work in English and Spanish every day, and our service is built for international visitors.',
      },
      {
        title: 'Focused on older adults',
        body: 'Our services are designed around mature travellers, from regular medication to staying mobile.',
      },
    ],
    photo: {
      alt: 'A carer holding an older woman’s hands as they talk and smile',
      brief:
        'Real photo: ArteagaMed professional with an older patient at home. Natural conversation, eye contact, daylight. Use your own team if possible.',
    },
  },

  trust: {
    title: 'Know who looks after you',
    intro: 'Healthcare is built on trust. Here’s what you can check before you join.',
    items: [
      {
        icon: 'users' as IconName,
        title: 'Our medical team',
        body: 'Doctors, nurses and nursing assistants who work together on your care.',
        placeholder:
          'Add: medical director name, specialty and Colegio de Médicos de Alicante registration number. Team photos.',
      },
      {
        icon: 'shield' as IconName,
        title: 'Healthcare registration',
        body: '',
        placeholder:
          'Add: registration number in the Registro de Centros, Servicios y Establecimientos Sanitarios (Comunitat Valenciana), company name and CIF.',
      },
      {
        icon: 'euro' as IconName,
        title: 'Published prices',
        body: 'Every membership price is on this page, along with what costs extra.',
      },
      {
        icon: 'lock' as IconName,
        title: 'Your health data',
        body: 'Your records are kept on servers in the European Union and handled under the GDPR.',
      },
      {
        icon: 'document' as IconName,
        title: 'Clear terms',
        body: 'Read the membership terms and service limitations before you join.',
      },
    ],
    links: {
      membership: 'Membership terms',
      limitations: 'Service limitations',
      privacy: 'Privacy policy',
    },
    testimonialsTitle: 'What members say',
  },

  area: {
    title: 'Where we work',
    body: 'We visit members at home, in holiday rentals and in hotels in these towns on the northern Costa Blanca:',
    note: 'Staying somewhere nearby? Call us and we’ll tell you if we can help.',
    mapTitle: 'Map of the northern Costa Blanca',
    mapDescription:
      'A map of the coast between Dénia and Benidorm. The towns we serve are marked: Teulada, Moraira, Benissa, Calpe and Benidorm.',
    legend: 'Towns we visit',
    sea: 'Mediterranean Sea',
    ifach: 'Peñón de Ifach',
  },

  faq: {
    title: 'Questions and answers',
    items: [
      {
        q: 'Who is ArteagaMed for?',
        a: 'ArteagaMed is for visitors from other European countries who spend time on the Costa Blanca. Most of our members are retired and stay for a few weeks or several months each year.',
      },
      {
        q: 'Can I join if I’m only visiting Spain?',
        a: 'Yes. You don’t need to live in Spain or have Spanish health insurance. Tell us when you arrive and where you’re staying, and we’ll arrange your first check-up.',
      },
      {
        q: 'How long does the membership last?',
        a: 'Membership is paid month by month. The first month costs a little more than the months that follow. The membership terms explain the minimum stay and how to cancel.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'We currently visit members in Calpe, Moraira, Benissa, Teulada and Benidorm. If you’re staying nearby, call us and we’ll tell you whether we can help.',
      },
      {
        q: 'What happens when I need assistance?',
        a: 'Call us on {phone}. We’ll listen, give you medical advice by phone and, if needed, arrange a visit, a test or a specialist appointment. We look after the paperwork too.',
      },
      {
        q: 'Is teleassistance included?',
        a: 'Teleassistance is offered alongside your membership at an extra cost. We’ll explain how it works and confirm the price before you sign up.',
      },
      {
        q: 'Are medical services included in the membership?',
        a: 'Yes. Phone consultations with a doctor are included in every plan, and home or hotel visits are included in most plans. Specialist fees, tests, scans and hospital care are billed separately by the provider or covered by your insurance.',
      },
      {
        q: 'Can my family contact ArteagaMed for me?',
        a: 'Yes. Many memberships are arranged by a son or daughter for a parent. With your permission, family members can call us. We only share medical information with people you have authorised.',
      },
      {
        q: 'Do you provide support in English?',
        a: 'Yes. We work in English and Spanish every day, and the nurse line in our Comprehensive, Continued and Advanced plans is in English.',
      },
      {
        q: 'What happens in a medical emergency?',
        a: 'Call 112 immediately. 112 is the free European emergency number. It works from any phone, and operators can help in English. ArteagaMed is not an emergency service and does not replace 112. Once you’re safe, call us and we’ll help with everything that comes next.',
      },
    ],
  },

  contact: {
    title: 'Talk to ArteagaMed',
    intro: 'Questions about membership? Call us or send a message and we’ll get back to you.',
    phoneNote: 'Available 24 hours a day, 7 days a week',
    emailNote: 'We reply within 24 hours',
    emergencyTitle: 'In an emergency, call 112',
    emergencyBody:
      '112 is free, works from any phone in Spain, and operators can help in English. ArteagaMed is not an emergency service.',
    form: {
      title: 'Send us a message',
      name: 'Your name',
      email: 'Email address',
      phone: 'Phone number',
      optional: 'optional',
      phoneHint: 'Include your country code, for example +44 or +31.',
      plan: 'Membership you’re interested in',
      planNone: 'Not sure yet',
      message: 'Your message',
      messageHint:
        'Please don’t include detailed medical information here. We’ll talk about that by phone.',
      consent:
        'I agree that ArteagaMed may use these details to reply to my message, as described in our',
      privacyLink: 'privacy policy',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Thank you. Your message has been sent and we’ll reply within 24 hours.',
      unavailable:
        'Your message couldn’t be sent online right now. Please call us on {phone}, at any time of day.',
      errorSummary: 'Please check the highlighted fields.',
      errors: {
        name: 'Enter your name.',
        email: 'Enter an email address, for example name@example.com.',
        phone: 'Enter a phone number with the country code, for example +44 7700 900123.',
        message: 'Write a short message so we know how to help.',
        consent: 'Tick the box so we can reply to you.',
      },
    },
  },

  finalCta: {
    title: 'Enjoy your time in Spain with greater peace of mind.',
    body: 'Discover an easier way to get healthcare assistance during your stay on the Costa Blanca.',
    primary: 'Explore membership',
    secondary: 'Talk to ArteagaMed',
  },

  footer: {
    tagline: 'Healthcare and assistance membership for international visitors on the Costa Blanca.',
    explore: 'Explore',
    legal: 'Legal',
    contact: 'Contact',
    disclaimer:
      'ArteagaMed is not an insurance company or an emergency service. In a medical emergency, call 112.',
    copyright: '© {year} ArteagaMed. All rights reserved.',
    region: 'Costa Blanca, Alicante, Spain',
  },

  stickyBar: {
    label: 'Quick actions',
    call: 'Call',
    membership: 'See membership',
  },

  teleassistancePage: {
    title: 'Teleassistance',
    heading: 'Help is always within reach.',
    intro:
      'A simple help button you wear on your wrist or around your neck. One press connects you with our support service, so you never have to look for a phone number.',
    howTitle: 'How it works',
    forTitle: 'Who it’s for',
    forItems: [
      'People who are staying on their own, or whose partner is often out',
      'Anyone who feels less steady on their feet',
      'Families who want reassurance while a parent is in Spain',
    ],
    notTitle: 'What teleassistance is not',
    notBody:
      'Teleassistance helps you reach us quickly. It isn’t an emergency service. If your life is in danger, call 112 directly.',
    priceTitle: 'Price',
    priceBody:
      'Teleassistance is offered alongside any ArteagaMed membership. Call us and we’ll explain the device options and confirm the price before you sign up.',
    cta: 'Ask about teleassistance',
    back: 'Back to the homepage',
  },

  legal: {
    draftNotice:
      'This document is being finalised. If you have a question about it, please call us on {phone}.',
    lastUpdated: 'Last updated',
    pages: {
      terms: {
        title: 'Terms and conditions',
        summary: 'The terms that apply when you use this website and ArteagaMed’s services.',
      },
      privacy: {
        title: 'Privacy policy',
        summary: 'How we collect, use and protect your personal and health data under the GDPR.',
      },
      cookies: {
        title: 'Cookie policy',
        summary: 'Which cookies this website uses and why.',
      },
      'membership-terms': {
        title: 'Membership terms',
        summary: 'Billing, minimum stay, cancellation and refunds for ArteagaMed memberships.',
      },
      'service-limitations': {
        title: 'Service limitations',
        summary: 'What ArteagaMed memberships cover, and what they don’t.',
      },
      emergency: {
        title: 'Emergency information',
        summary: 'What to do in a medical emergency in Spain.',
      },
    },
    emergency: {
      lead: 'If someone’s life may be in danger, call 112 straight away.',
      points: [
        '112 is the free European emergency number. It works from any mobile or landline in Spain, even without credit.',
        'Operators can help in English and other languages.',
        'Say where you are as precisely as you can: town, street, building name and floor.',
        'ArteagaMed is not an emergency service and does not replace 112. Once you’re safe, call us and we’ll help with what comes next.',
      ],
    },
  },
};

export default en;
