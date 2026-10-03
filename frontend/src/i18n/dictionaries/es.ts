import type { Dictionary } from '../index';

/** Spanish (usted). Mirrors en.ts; keep both in sync when copy changes. */
const es = {
  meta: {
    title: 'ArteagaMed: asistencia sanitaria en la Costa Blanca',
    titleTemplate: '%s | ArteagaMed',
    description:
      'Membresía de asistencia sanitaria para visitantes internacionales en Calpe, Moraira, Benissa, Teulada y Benidorm. Médico por teléfono, visitas a domicilio y al hotel, y atención en inglés y español.',
    ogAlt: 'ArteagaMed: asistencia sanitaria para visitantes en la Costa Blanca',
  },

  common: {
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo electrónico',
    callUs: 'Llámenos',
    learnMore: 'Más información',
    opensPhone: 'Llamar a ArteagaMed al {phone}',
  },

  nav: {
    skip: 'Saltar al contenido principal',
    home: 'Inicio',
    howItWorks: 'Cómo funciona',
    services: 'Servicios',
    membership: 'Membresía',
    teleassistance: 'Teleasistencia',
    faq: 'Preguntas',
    contact: 'Contacto',
    getMembership: 'Hacerse miembro',
    openMenu: 'Menú',
    closeMenu: 'Cerrar',
    mainLabel: 'Principal',
    language: 'Idioma',
    comingSoon: 'próximamente',
    utilityPhone: 'Llámenos las 24 horas:',
  },

  hero: {
    title: 'Disfrute de Alicante. Nosotros nos ocupamos del resto.',
    lead: 'Asistencia sanitaria premium para visitantes europeos en la Costa Blanca, con un equipo local que habla su idioma.',
    primary: 'Ver la membresía',
    secondary: 'Cómo funciona ArteagaMed',
    trust: ['Asistencia sanitaria', 'Apoyo local', 'Tranquilidad'],
    trustLabel: 'Lo que ofrece ArteagaMed',
    area: 'Le visitamos en Calpe, Moraira, Benissa, Teulada y Benidorm.',
    photo: {
      alt: 'Una pareja mayor paseando de la mano por la playa',
      brief:
        'Foto real: pareja europea mayor paseando por el paseo marítimo de Calpe, con el Peñón de Ifach detrás. Natural, sin elementos médicos.',
    },
  },

  benefits: {
    title: 'La sanidad en el extranjero, más fácil',
    items: [
      {
        icon: 'stethoscope',
        title: 'Atención sanitaria cuando la necesita',
        body: 'Apoyo médico profesional, sin el estrés de un sistema sanitario desconocido.',
      },
      {
        icon: 'language',
        title: 'Ayuda en su idioma',
        body: 'Explicaciones claras y apoyo personal durante toda su estancia en España.',
      },
      {
        icon: 'pin',
        title: 'Apoyo local',
        body: 'Un equipo que conoce la zona, sabe dónde se aloja y conoce su historial de salud.',
      },
      {
        icon: 'sun',
        title: 'Tranquilidad',
        body: 'Disfrute de la Costa Blanca sabiendo que la ayuda está a una llamada de distancia.',
      },
    ],
  },

  audience: {
    title: 'Pensado para quienes pasan parte del año aquí',
    body: 'Tanto si se queda tres semanas como seis meses, ArteagaMed le ofrece un médico y un equipo a quien llamar. No necesita entender cómo funciona la sanidad española.',
    listLabel: 'ArteagaMed es para',
    items: [
      'Jubilados que pasan semanas o meses aquí',
      'Parejas que viajan juntas',
      'Propietarios de una segunda residencia en la Costa Blanca',
      'Familias que organizan la atención de un padre o una madre en España',
    ],
    cta: 'Ver las opciones de membresía',
    photo: {
      alt: 'Una pareja mayor sonriente tomando un café junto al mar',
      brief:
        'Foto real: jubilados disfrutando del día a día (terraza, mercado, paseo). Cálida y espontánea, sin elementos médicos.',
    },
  },

  how: {
    title: 'Cómo funciona ArteagaMed',
    steps: [
      {
        title: 'Elija su membresía',
        body: 'Escoja el plan que mejor se adapte a su estancia. Empezamos con una revisión completa en su domicilio u hotel.',
      },
      {
        title: 'Disfrute de Alicante',
        body: 'Viaje, descanse y disfrute de la Costa Blanca. Su historial de salud estará listo si nos necesita.',
      },
      {
        title: 'Reciba ayuda cuando la necesite',
        body: 'Llame a ArteagaMed siempre que necesite una ayuda incluida en su membresía. Nosotros nos encargamos del resto.',
      },
    ],
    cta: 'Empezar',
  },

  membership: {
    title: 'Elija su membresía',
    intro:
      'Todas las membresías empiezan con una revisión de salud completa en su domicilio u hotel. El primer mes cuesta un poco más; después paga la cuota mensual.',
    perMonth: 'al mes',
    firstMonth: 'Primer mes {price}',
    recommended: 'Recomendado',
    choose: 'Elegir {plan}',
    keyFeatures: 'Lo más destacado',
    seeAll: 'Todo lo que incluye',
    extrasTitle: 'Con coste adicional',
    note: 'Precios en euros, con cobro mensual. La permanencia mínima, la cancelación y los reembolsos se explican en las condiciones de la membresía.',
    termsLink: 'Leer las condiciones de la membresía',
    plans: {
      basic: {
        name: 'Asistencia Básica',
        summary: 'Un médico al teléfono cuando lo necesite y una revisión completa para empezar.',
        highlights: [
          'Revisión completa en su domicilio u hotel',
          'Hasta 4 consultas telefónicas con un médico al mes',
          'Línea telefónica 24/7 para consultas médicas urgentes',
          'Ayuda para pedir cita con especialistas, análisis y pruebas',
        ],
        included: [
          'Revisión y exploración física completa en su domicilio u hotel',
          'Revisión de los medicamentos que toma habitualmente',
          'Valoración nutricional',
          'Historial de salud personal para el seguimiento de sus patologías',
          'Línea telefónica 24/7 para consultas médicas urgentes',
          'Consultas telefónicas con un médico (hasta 4 al mes)',
          'Gestión y coordinación de citas con especialistas, análisis y pruebas radiológicas',
        ],
        extras: [
          'Visita médica a domicilio u hotel: 90 €',
          'Receta y entrega a domicilio de la medicación habitual: 25 € al mes',
        ],
      },
      integral: {
        name: 'Asistencia Integral',
        summary:
          'Una visita médica a domicilio cada mes, enfermería por teléfono en inglés y su medicación bajo control.',
        highlights: [
          'Una visita médica a domicilio cada mes',
          'Hasta 8 consultas telefónicas al mes',
          'Línea de enfermería 24/7 en inglés',
          'Receta y entrega de su medicación habitual',
        ],
        included: [
          'Revisión y exploración física completa en su domicilio u hotel',
          'Revisión de los medicamentos que toma habitualmente',
          'Valoración nutricional con recomendaciones dietéticas',
          'Revisión de la medicación para evitar fármacos innecesarios o incompatibles',
          'Historial de salud que reúne sus resultados hospitalarios y de consulta',
          'Consultas telefónicas con un médico (hasta 8 al mes)',
          'Línea de enfermería 24/7 en inglés',
          'Línea telefónica 24/7 para consultas médicas urgentes',
          'Una visita médica a domicilio cada mes',
          'Gestión y coordinación de citas con especialistas, análisis y pruebas radiológicas',
          'Receta y entrega a domicilio de la medicación habitual',
        ],
        extras: ['Visita médica adicional: 80 €'],
      },
      continuada: {
        name: 'Asistencia Continuada',
        summary:
          'Para estancias largas o patologías crónicas: dos visitas al mes y un médico al teléfono a diario si lo necesita.',
        highlights: [
          'Dos visitas médicas al mes con controles de salud',
          'Una consulta telefónica diaria si la necesita',
          'Plan de dieta personalizado',
          'Línea de enfermería 24/7 en inglés',
        ],
        included: [
          'Revisión y exploración física completa en su domicilio u hotel',
          'Revisión de los medicamentos que toma habitualmente',
          'Plan de dieta personalizado según sus patologías',
          'Revisión de la medicación para evitar fármacos innecesarios o incompatibles',
          'Historial de salud que reúne sus resultados hospitalarios y de consulta',
          'Una consulta telefónica diaria con un médico, si la necesita',
          'Línea de enfermería 24/7 en inglés',
          'Línea telefónica 24/7 para consultas médicas urgentes',
          'Dos visitas médicas al mes, con control de tensión arterial, oxígeno, glucosa y electrocardiograma',
          'Receta y entrega a domicilio de la medicación habitual',
          'Gestión y coordinación de citas con especialistas, análisis y pruebas radiológicas',
        ],
        extras: ['Visita médica adicional: 80 €'],
      },
      avanzada: {
        name: 'Asistencia Avanzada',
        summary:
          'Seguimiento médico estrecho cada semana, revisado periódicamente por un equipo de especialistas.',
        highlights: [
          'Visita médica semanal con controles de salud',
          'Revisión de su caso cada dos semanas por un internista, un cardiólogo y un geriatra',
          'Una consulta telefónica diaria si la necesita',
          'Receta y entrega de su medicación habitual',
        ],
        included: [
          'Revisión y exploración física completa en su domicilio u hotel',
          'Revisión de los medicamentos que toma habitualmente',
          'Plan de dieta personalizado según sus patologías',
          'Revisión de la medicación para evitar fármacos innecesarios o incompatibles',
          'Historial de salud que reúne sus resultados hospitalarios y de consulta',
          'Una consulta telefónica diaria con un médico, si la necesita',
          'Línea de enfermería 24/7 en inglés',
          'Línea telefónica 24/7 para consultas médicas urgentes',
          'Visita médica semanal, con control de tensión arterial, oxígeno, glucosa y electrocardiograma',
          'Revisión de su caso cada dos semanas por un internista, un cardiólogo y un geriatra',
          'Receta y entrega a domicilio de la medicación habitual',
          'Gestión y coordinación de citas con especialistas, análisis y pruebas radiológicas',
        ],
        extras: ['Visita médica adicional: 80 €'],
      },
    },
  },

  included: {
    title: '¿Qué incluye?',
    intro: 'Lo que cubre su membresía, lo que tiene coste adicional y lo que la membresía no es.',
    includedTitle: 'Incluido en todas las membresías',
    includedItems: [
      'Una revisión de salud completa en su domicilio u hotel al darse de alta',
      'Una revisión de los medicamentos que toma habitualmente',
      'Una valoración nutricional',
      'Su historial de salud personal, siempre actualizado',
      'Línea telefónica 24/7 para consultas médicas urgentes',
      'Consultas telefónicas con un médico',
      'Gestión y coordinación de citas con especialistas, análisis y pruebas',
    ],
    extraTitle: 'Con coste adicional',
    extraItems: [
      'Visitas médicas adicionales, a precio de miembro',
      'Honorarios de especialistas, análisis, pruebas y atención hospitalaria. Los factura el proveedor o los cubre su propio seguro.',
      'Fisioterapia, ayuda a domicilio y transporte sanitario, bajo petición',
      'Dispositivo y servicio de teleasistencia',
    ],
    notTitle: 'Lo que la membresía no es',
    notItems: [
      'No es un seguro médico. No sustituye a su Tarjeta Sanitaria Europea, GHIC ni a su seguro de viaje.',
      'No es un servicio de emergencias. En una emergencia, llame siempre al 112.',
    ],
  },

  teleassistance: {
    title: 'La ayuda, siempre a su alcance.',
    body: 'Con la teleasistencia de ArteagaMed lleva un pequeño dispositivo con un solo botón. Si se encuentra mal, sufre una caída o simplemente necesita ayuda, púlselo y quedará conectado con nuestro servicio de atención.',
    stepsLabel: 'Cómo funciona el botón de ayuda',
    steps: [
      'Pulse el botón',
      'Le respondemos y hablamos con usted',
      'Organizamos la ayuda adecuada: desde un consejo o una visita a domicilio hasta llamar al 112 por usted',
    ],
    note: 'La teleasistencia se ofrece como complemento a su membresía. Le confirmaremos el precio antes de contratarla.',
    cta: 'Conocer la teleasistencia',
    photo: {
      alt: 'Un hombre mayor sonriente hablando por el móvil, con un reloj en la muñeca',
      brief:
        'Foto real: persona mayor en casa o en una terraza con un botón de ayuda en la muñeca o al cuello. Tranquila e independiente, no frágil.',
    },
  },

  services: {
    title: 'Nuestros servicios',
    intro: 'Lo que ofrecemos y cómo se paga cada servicio.',
    status: {
      included: 'Incluido',
      plan: 'Según el plan',
      extra: 'Coste adicional',
    },
    statusLabel: 'Coste',
    items: [
      {
        icon: 'stethoscope',
        status: 'included',
        title: 'Asistencia médica',
        body: 'Consultas telefónicas con un médico y visitas a su domicilio u hotel según su plan.',
      },
      {
        icon: 'pill',
        status: 'plan',
        title: 'Asistencia farmacéutica',
        body: 'Revisamos su medicación habitual, hacemos las recetas y se la llevamos a casa.',
      },
      {
        icon: 'leaf',
        status: 'included',
        title: 'Nutrición',
        body: 'Una valoración nutricional para cada miembro y un plan de dieta personalizado en algunos planes.',
      },
      {
        icon: 'document',
        status: 'included',
        title: 'Citas y trámites',
        body: 'Pedimos citas con especialistas y pruebas, gestionamos autorizaciones y ordenamos sus documentos.',
      },
      {
        icon: 'watch',
        status: 'extra',
        title: 'Teleasistencia',
        body: 'Un botón de ayuda que se lleva puesto y le conecta con nuestro servicio de atención.',
      },
      {
        icon: 'stretch',
        status: 'extra',
        title: 'Fisioterapia',
        body: 'Sesiones de fisioterapia en su domicilio, bajo petición.',
      },
      {
        icon: 'home',
        status: 'extra',
        title: 'Ayuda a domicilio',
        body: 'Ayuda en casa con las tareas diarias y el cuidado personal, bajo petición.',
      },
      {
        icon: 'car',
        status: 'extra',
        title: 'Transporte sanitario',
        body: 'Traslados a citas, pruebas u hospital, bajo petición.',
      },
    ],
  },

  why: {
    title: 'Por qué ArteagaMed',
    items: [
      {
        title: 'Locales',
        body: 'Estamos en la Costa Blanca y le visitamos allí donde se aloje.',
      },
      {
        title: 'Cercanos',
        body: 'Un equipo pequeño que le conoce a usted y su historial de salud, no un centro de llamadas anónimo.',
      },
      {
        title: 'Sencillos',
        body: 'Nos ocupamos de la sanidad española por usted: citas, pruebas, recetas y trámites.',
      },
      {
        title: 'Multilingües',
        body: 'Trabajamos en inglés y español a diario, y nuestro servicio está pensado para visitantes internacionales.',
      },
      {
        title: 'Centrados en las personas mayores',
        body: 'Nuestros servicios están diseñados para viajeros maduros, desde la medicación habitual hasta mantenerse activo.',
      },
    ],
    photo: {
      alt: 'Un cuidador sostiene las manos de una mujer mayor mientras conversan y sonríen',
      brief:
        'Foto real: profesional de ArteagaMed con un paciente mayor en casa. Conversación natural, contacto visual, luz de día. A ser posible, su propio equipo.',
    },
  },

  trust: {
    title: 'Sepa quién le cuida',
    intro:
      'La salud se basa en la confianza. Esto es lo que puede comprobar antes de hacerse miembro.',
    items: [
      {
        icon: 'users',
        title: 'Nuestro equipo médico',
        body: 'Médicos, enfermeros y auxiliares de enfermería que trabajan juntos en su atención.',
        placeholder:
          'Añadir: nombre del director médico, especialidad y número de colegiado del Colegio de Médicos de Alicante. Fotos del equipo.',
      },
      {
        icon: 'shield',
        title: 'Registro sanitario',
        body: '',
        placeholder:
          'Añadir: número de inscripción en el Registro de Centros, Servicios y Establecimientos Sanitarios (Comunitat Valenciana), razón social y CIF.',
      },
      {
        icon: 'euro',
        title: 'Precios publicados',
        body: 'Todos los precios de las membresías están en esta página, junto con lo que tiene coste adicional.',
      },
      {
        icon: 'lock',
        title: 'Sus datos de salud',
        body: 'Sus datos se guardan en servidores de la Unión Europea y se tratan conforme al RGPD.',
      },
      {
        icon: 'document',
        title: 'Condiciones claras',
        body: 'Lea las condiciones de la membresía y las limitaciones del servicio antes de hacerse miembro.',
      },
    ],
    links: {
      membership: 'Condiciones de la membresía',
      limitations: 'Limitaciones del servicio',
      privacy: 'Política de privacidad',
    },
    testimonialsTitle: 'Lo que dicen nuestros miembros',
  },

  area: {
    title: 'Dónde trabajamos',
    body: 'Visitamos a nuestros miembros en su domicilio, en alojamientos vacacionales y en hoteles de estas localidades del norte de la Costa Blanca:',
    note: '¿Se aloja cerca? Llámenos y le diremos si podemos ayudarle.',
    mapTitle: 'Mapa del norte de la Costa Blanca',
    mapDescription:
      'Mapa de la costa entre Dénia y Benidorm. Están marcadas las localidades que atendemos: Teulada, Moraira, Benissa, Calpe y Benidorm.',
    legend: 'Localidades que visitamos',
    sea: 'Mar Mediterráneo',
    ifach: 'Peñón de Ifach',
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Para quién es ArteagaMed?',
        a: 'ArteagaMed es para visitantes de otros países europeos que pasan temporadas en la Costa Blanca. La mayoría de nuestros miembros están jubilados y se quedan unas semanas o varios meses al año.',
      },
      {
        q: '¿Puedo hacerme miembro si solo estoy de visita en España?',
        a: 'Sí. No necesita vivir en España ni tener un seguro médico español. Díganos cuándo llega y dónde se aloja, y organizaremos su primera revisión.',
      },
      {
        q: '¿Cuánto dura la membresía?',
        a: 'La membresía se paga mes a mes. El primer mes cuesta un poco más que los siguientes. Las condiciones de la membresía explican la permanencia mínima y cómo darse de baja.',
      },
      {
        q: '¿Qué zonas cubren?',
        a: 'Actualmente visitamos a miembros en Calpe, Moraira, Benissa, Teulada y Benidorm. Si se aloja cerca, llámenos y le diremos si podemos ayudarle.',
      },
      {
        q: '¿Qué pasa cuando necesito ayuda?',
        a: 'Llámenos al {phone}. Le escucharemos, le daremos consejo médico por teléfono y, si hace falta, organizaremos una visita, una prueba o una cita con un especialista. También nos ocupamos de los trámites.',
      },
      {
        q: '¿Está incluida la teleasistencia?',
        a: 'La teleasistencia se ofrece como complemento a su membresía, con coste adicional. Le explicaremos cómo funciona y le confirmaremos el precio antes de contratarla.',
      },
      {
        q: '¿La membresía incluye servicios médicos?',
        a: 'Sí. Las consultas telefónicas con un médico están incluidas en todos los planes, y las visitas a domicilio u hotel en la mayoría. Los honorarios de especialistas, los análisis, las pruebas y la atención hospitalaria los factura aparte el proveedor o los cubre su seguro.',
      },
      {
        q: '¿Puede mi familia contactar con ArteagaMed por mí?',
        a: 'Sí. Muchas membresías las contrata un hijo o una hija para su padre o su madre. Con su permiso, sus familiares pueden llamarnos. Solo compartimos información médica con las personas que usted haya autorizado.',
      },
      {
        q: '¿Ofrecen atención en inglés?',
        a: 'Sí. Trabajamos en inglés y español a diario, y la línea de enfermería de los planes Integral, Continuada y Avanzada es en inglés.',
      },
      {
        q: '¿Qué hago en una emergencia médica?',
        a: 'Llame inmediatamente al 112. El 112 es el número europeo de emergencias, gratuito y disponible desde cualquier teléfono, y sus operadores pueden atenderle en inglés. ArteagaMed no es un servicio de emergencias y no sustituye al 112. Cuando esté a salvo, llámenos y le ayudaremos con todo lo que venga después.',
      },
    ],
  },

  contact: {
    title: 'Hable con ArteagaMed',
    intro:
      'Para hacerse miembro o resolver cualquier duda, llámenos. Le atenderemos y organizaremos su primera revisión.',
    phoneNote: 'Disponible las 24 horas, los 7 días de la semana',
    emailNote: 'Respondemos en menos de 24 horas',
    emergencyTitle: 'En una emergencia, llame al 112',
    emergencyBody:
      'El 112 es gratuito, funciona desde cualquier teléfono en España y sus operadores pueden atenderle en inglés. ArteagaMed no es un servicio de emergencias.',
  },

  finalCta: {
    title: 'Disfrute de su tiempo en España con más tranquilidad.',
    body: 'Descubra una forma más sencilla de recibir asistencia sanitaria durante su estancia en la Costa Blanca.',
    primary: 'Ver la membresía',
    secondary: 'Hablar con ArteagaMed',
  },

  footer: {
    tagline:
      'Membresía de asistencia sanitaria para visitantes internacionales en la Costa Blanca.',
    explore: 'Explorar',
    legal: 'Legal',
    contact: 'Contacto',
    disclaimer:
      'ArteagaMed no es una compañía de seguros ni un servicio de emergencias. En una emergencia médica, llame al 112.',
    copyright: '© {year} ArteagaMed. Todos los derechos reservados.',
    region: 'Costa Blanca, Alicante, España',
  },

  stickyBar: {
    label: 'Acciones rápidas',
    call: 'Llamar',
    membership: 'Ver membresía',
  },

  teleassistancePage: {
    title: 'Teleasistencia',
    heading: 'La ayuda, siempre a su alcance.',
    intro:
      'Un sencillo botón de ayuda que se lleva en la muñeca o al cuello. Con una sola pulsación queda conectado con nuestro servicio de atención, sin tener que buscar ningún número de teléfono.',
    howTitle: 'Cómo funciona',
    forTitle: 'Para quién es',
    forItems: [
      'Personas que se alojan solas o cuya pareja sale a menudo',
      'Cualquiera que se sienta menos seguro al caminar',
      'Familias que quieren estar tranquilas mientras su padre o su madre está en España',
    ],
    notTitle: 'Lo que la teleasistencia no es',
    notBody:
      'La teleasistencia le ayuda a contactar con nosotros rápidamente. No es un servicio de emergencias. Si su vida corre peligro, llame directamente al 112.',
    priceTitle: 'Precio',
    priceBody:
      'La teleasistencia se ofrece como complemento a cualquier membresía de ArteagaMed. Llámenos y le explicaremos los dispositivos disponibles y le confirmaremos el precio antes de contratarla.',
    cta: 'Preguntar por la teleasistencia',
    back: 'Volver a la página de inicio',
  },

  legal: {
    draftNotice: 'Este documento se está ultimando. Si tiene alguna pregunta, llámenos al {phone}.',
    lastUpdated: 'Última actualización',
    pages: {
      terms: {
        title: 'Términos y condiciones',
        summary:
          'Las condiciones que se aplican al usar este sitio web y los servicios de ArteagaMed.',
      },
      privacy: {
        title: 'Política de privacidad',
        summary:
          'Cómo recogemos, usamos y protegemos sus datos personales y de salud conforme al RGPD.',
      },
      cookies: {
        title: 'Política de cookies',
        summary: 'Qué cookies utiliza este sitio web y por qué.',
      },
      'membership-terms': {
        title: 'Condiciones de la membresía',
        summary:
          'Facturación, permanencia mínima, cancelación y reembolsos de las membresías de ArteagaMed.',
      },
      'service-limitations': {
        title: 'Limitaciones del servicio',
        summary: 'Qué cubren las membresías de ArteagaMed y qué no.',
      },
      emergency: {
        title: 'Información de emergencia',
        summary: 'Qué hacer ante una emergencia médica en España.',
      },
    },
    emergency: {
      lead: 'Si la vida de alguien puede estar en peligro, llame inmediatamente al 112.',
      points: [
        'El 112 es el número europeo de emergencias y es gratuito. Funciona desde cualquier móvil o fijo en España, incluso sin saldo.',
        'Los operadores pueden atenderle en inglés y en otros idiomas.',
        'Indique dónde se encuentra con la mayor precisión posible: localidad, calle, nombre del edificio y planta.',
        'ArteagaMed no es un servicio de emergencias y no sustituye al 112. Cuando esté a salvo, llámenos y le ayudaremos con lo que venga después.',
      ],
    },
  },
} satisfies Dictionary;

export default es;
