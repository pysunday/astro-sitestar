export default {
  menus: [{
    href: '#home',
    label: 'Inicio',
    key: 'home',
  }, {
    href: '#about',
    label: 'Acerca de',
    key: 'about',
  }, {
    href: '#service',
    label: 'Servicios',
    key: 'service',
  }, {
    href: '#sites',
    label: 'Sitios',
    key: 'site',
  }, {
    href: '#contact',
    label: 'Contacto',
    key: 'contact',
  }],
  btn: {
    back: "Volver",
    siter: "Galería de Sitios",
    contact: "Contáctanos",
  },
  html_head: {
    title: "Lista de sitios página {{page}}",
  },
  about: {
    who: {
      name: "¿Quiénes somos?",
      content: [{
        title: "Equipo de diseño y desarrollo",
        desc: [
          "Somos un equipo de desarrolladores y diseñadores.",
          "Con nuestras habilidades ayudamos a amigos a construir infraestructuras de internet para empresas. En los últimos años, el internet ha avanzado rápidamente. Además de la calidad del producto, las empresas necesitan mostrar sus productos, diseño de empaques y logos en línea para que los clientes conozcan la empresa."
        ],
      }]
    },
    service: {
      name: "Introducción a servicios",
      content: [{
        title: 'Dirección de desarrollo',
        desc: [
          "Nuestros desarrolladores tienen más de 7 años de experiencia y están familiarizados con desarrollo frontend, backend, scraping y bases de datos.",
          "Ofrecemos desarrollo completo de sitios web usando tecnologías modernas frontend y backend, enfocados en experiencia e interacción, y optimización SEO para mejorar el ranking en buscadores."
        ],
        goto: 'Visitar blog técnico',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: 'Dirección de diseño',
        desc: [
          "Nuestro diseñador se graduó en una de las cuatro principales academias de arte, especializado en diseño de marca, empaques y logos, y domina herramientas de Adobe como Photoshop, Illustrator, InDesign.",
          "Su portafolio cubre bienes raíces, industria y comercio exterior, con amplia experiencia y conceptos únicos de diseño.",
        ],
        goto: 'Ver portafolio',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: 'Nuestras ventajas',
    desc: "Ofrecemos servicios completos personalizados de desarrollo web, incluyendo desarrollo, registro, despliegue y mantenimiento. Puede elegir un sitio de ejemplo o uno que le interese, y lo desarrollamos personalizado según sus necesidades. También brindamos servicios legales de scraping y reverse engineering. Si necesita diseño de logo, marca o empaques, también podemos ayudarle con el mejor servicio.",
    infos: [{
      title: 'Desarrollo web',
      img: '/images/sitestar/img1.svg',
      small: 'Desarrollo web moderno con separación clara entre frontend y backend',
      p: 'Desarrollo de páginas SPA con React, Vue y renderizado backend con Astro, Next.js.',
    }, {
      title: '100% personalizado',
      img: '/images/sitestar/img2.svg',
      small: 'Diseño del sitio según requerimientos del cliente con elementos personalizados',
      p: 'Muchos sitios se parecen porque usan plantillas. Nosotros ofrecemos desarrollo personalizado al costo de una plantilla.',
    }, {
      title: 'Registro de dominio y备案',
      img: '/images/sitestar/img3.svg',
      small: 'Registro de dominio en Aliyun y asistencia en备案 con el Ministerio de Industria',
      p: 'En China, se requiere备案 ante el Ministerio antes de usar el sitio, proceso que tarda alrededor de 7 días y requiere documentos de la empresa.',
    }, {
      title: 'SEO amigable',
      img: '/images/sitestar/img4.svg',
      small: 'Optimización para buscadores para mejor posicionamiento',
      p: 'Clientes buscan productos en Google, Baidu, etc. Un sitio SEO amigable aparece en las primeras páginas.',
    }, {
      title: 'Soporte SSL',
      img: '/images/sitestar/img15.svg',
      small: 'Protege la transmisión para evitar redirecciones no deseadas y anuncios',
      p: 'Las peticiones se hacen con https; el navegador redirige automáticamente de http a https.',
    }, {
      title: 'Hosting web',
      img: '/images/sitestar/img6.svg',
      small: 'Hospedaje en servidores en la nube como Alibaba Cloud, Tencent Cloud',
      p: 'Se pueden añadir funciones personalizadas como protección DDoS, aceleración CDN, etc.',
    }, {
      title: 'Reverse engineering y recolección de datos',
      img: '/images/sitestar/img7.svg',
      small: 'Recolección de datos de sitios específicos, soporte para sitios protegidos',
      p: 'La recolección se realiza conforme a la ley, y los datos pueden usarse para visualización y análisis.',
    }, {
      title: 'Servicios backend',
      img: '/images/sitestar/img8.svg',
      small: 'Servicios backend basados en Python, NodeJS',
      p: 'Por ejemplo, proxys para funcionalidades gubernamentales a través de APIs.',
    }, {
      title: 'Diseño de marca',
      img: '/images/sitestar/img9.svg',
      small: 'Construcción y fortalecimiento de identidad y confianza de marca',
      p: 'Transmitimos los valores y la visión del núcleo de la marca al público objetivo mediante elementos visuales y emocionales.',
    }, {
      title: 'Diseño de logos',
      img: '/images/sitestar/img10.svg',
      small: 'Diseño profesional de logos corporativos',
      p: 'Diseños estratégicos, con historia y reconocimiento claro, visualmente atractivos y memorables.',
    }, {
      title: 'Diseño de empaques',
      img: '/images/sitestar/img11.svg',
      small: 'Diseño creativo que combina estética y funcionalidad en empaques',
      p: 'El empaque es el primer contacto entre producto y consumidor, transmite valor, atrae atención y fomenta ventas.',
    }],
  },
  contact: {
    title: 'Agrega y envía tus solicitudes',
    wechat_tip: 'Escanea para agregar en WeChat',
    qq_tip: 'Escanea para agregar en QQ',
    tip: "Si necesitas desarrollo web, desarrollo de datos o diseño de marca, contáctanos. Tenemos desarrolladores y diseñadores profesionales. Preferible por WeChat, pero también por email:",
  },
  siter: {
    title: 'Galería de sitios',
    desc: "Puedes explorar la galería, elegir sitios o funciones que te gusten, y desarrollaremos las páginas web basándonos en tus elecciones. Todos los sitios son de terceros, no reutilizamos código fuente, por lo que no hay riesgo de infracción.",
    more: 'Ver más',
  },
  header: {
    tip: 'Tu programador\n✨y diseñador✨',
  },
  footer: {
    cr: 'Todos los derechos reservados.',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: 'URL no válida, por favor verifica:',
    desktop: 'Escritorio',
    tablet: 'Tablet',
    mobile: 'Móvil',
    full: 'Pantalla completa',
    loading: 'Cargando...',
  },
  page_404: {
    oops: '¡Vaya!',
    tip: 'La página que buscas no existe. ¿Estás seguro de la URL?',
    home: 'Ir al inicio',
  },
}

