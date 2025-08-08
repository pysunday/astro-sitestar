export default {
  menus: [{
    href: '#home',
    label: 'Accueil',
    key: 'home',
  }, {
    href: '#about',
    label: 'À propos',
    key: 'about',
  }, {
    href: '#service',
    label: 'Services',
    key: 'service',
  }, {
    href: '#sites',
    label: 'Sites',
    key: 'site',
  }, {
    href: '#contact',
    label: 'Contact',
    key: 'contact',
  }],
  btn: {
    back: "Retour",
    siter: "Galerie de sites",
    contact: "Nous contacter",
  },
  html_head: {
    title: "Page {{page}} de la liste des sites",
  },
  about: {
    who: {
      name: "Qui sommes-nous ?",
      content: [{
        title: "Équipe de design et développement",
        desc: [
          "Nous sommes une équipe composée de développeurs et de designers.",
          "Nous mettons nos compétences au service de nos amis pour les aider à construire leur présence en ligne. Avec l’évolution rapide d’internet, les entreprises doivent aujourd’hui présenter leurs produits, logos et images de marque via des sites web attrayants."
        ],
      }]
    },
    service: {
      name: "Présentation des services",
      content: [{
        title: 'Développement',
        desc: [
          "Nos développeurs ont plus de 7 ans d'expérience et maîtrisent le développement frontend, backend, scraping et bases de données.",
          "Nous proposons des services complets de développement web moderne, en mettant l'accent sur l'expérience utilisateur et le référencement naturel (SEO)."
        ],
        goto: 'Voir le blog technique',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: 'Design',
        desc: [
          "Notre designer est diplômé d'une des quatre grandes écoles d'art de Chine, spécialisé en branding, packaging, design de logos, et maîtrise Photoshop, Illustrator, InDesign, etc.",
          "Ses œuvres couvrent divers secteurs : immobilier, industrie, commerce extérieur. Il dispose d’une solide expérience et d’une vision créative unique.",
        ],
        goto: 'Voir le portfolio',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: 'Nos avantages',
    desc: "Nous offrons un service complet de développement de sites web personnalisés : développement, enregistrement de domaine, déploiement et maintenance. Vous pouvez choisir un site modèle ou un site existant que vous aimez, et nous le développerons selon vos besoins. Nous proposons également des services de scraping et de rétro-ingénierie web, dans le respect des lois en vigueur. Besoin de design pour un logo, une marque ou un emballage ? Nous sommes là pour vous.",
    infos: [{
      title: 'Développement Web',
      img: '/images/sitestar/img1.svg',
      small: 'Développement moderne avec séparation front-end / back-end',
      p: 'Développement SPA avec React, Vue ; rendu côté serveur avec Astro ou Next.js.',
    }, {
      title: '100 % personnalisé',
      img: '/images/sitestar/img2.svg',
      small: 'Conception adaptée à vos besoins et à votre image',
      p: 'De nombreux sites se ressemblent car ils utilisent des modèles standard. Nous offrons un développement sur-mesure au prix d’un modèle.',
    }, {
      title: 'Nom de domaine et enregistrement',
      img: '/images/sitestar/img3.svg',
      small: 'Demande de domaine via Aliyun et aide à l’enregistrement auprès du MIIT',
      p: 'En Chine, l’exploitation d’un site nécessite un enregistrement auprès du MIIT, ce qui prend environ 7 jours.',
    }, {
      title: 'SEO Friendly',
      img: '/images/sitestar/img4.svg',
      small: 'Optimisé pour les moteurs de recherche',
      p: 'Pour apparaître dans les premiers résultats sur Google ou Baidu, il faut un site bien optimisé SEO.',
    }, {
      title: 'Support SSL',
      img: '/images/sitestar/img15.svg',
      small: 'Sécurité des échanges, protection contre les attaques man-in-the-middle',
      p: 'Les utilisateurs sont redirigés automatiquement vers une version HTTPS sécurisée.',
    }, {
      title: 'Hébergement web',
      img: '/images/sitestar/img6.svg',
      small: 'Hébergement sur les serveurs cloud d’Aliyun ou Tencent',
      p: 'Fonctionnalités supplémentaires disponibles : protection DDoS, CDN, etc.',
    }, {
      title: 'Scraping et rétro-ingénierie',
      img: '/images/sitestar/img7.svg',
      small: 'Collecte de données sur des sites cibles avec support de rétro-ingénierie',
      p: 'Respectant la légalité, nous collectons et traitons les données pour créer des visualisations ou des analyses.',
    }, {
      title: 'Services backend',
      img: '/images/sitestar/img8.svg',
      small: 'Services backend en Python ou Node.js',
      p: 'Exemple : implémenter des fonctionnalités de site officiel dans une mini-application via API.',
    }, {
      title: 'Design de marque',
      img: '/images/sitestar/img9.svg',
      small: 'Construire l’identité, la confiance et l’émotion de votre marque',
      p: 'Nous exprimons la vision et les valeurs de votre marque à travers un design structuré et cohérent.',
    }, {
      title: 'Conception de logo',
      img: '/images/sitestar/img10.svg',
      small: 'Logos professionnels pour les entreprises',
      p: 'Des logos uniques et stratégiques, mémorables, qui représentent votre identité.',
    }, {
      title: 'Design packaging',
      img: '/images/sitestar/img11.svg',
      small: 'Combinaison esthétique et fonctionnelle pour vos emballages',
      p: 'Le packaging est le premier lien avec le consommateur. Il véhicule les valeurs de la marque par le visuel, la forme et la texture.',
    }],
  },
  contact: {
    title: 'Ajoutez-moi pour envoyer vos besoins',
    wechat_tip: 'Scannez pour ajouter sur WeChat',
    qq_tip: 'Scannez pour ajouter sur QQ',
    tip: "Vous avez besoin d’un site, de développement ou de design ? Contactez-nous ! Nous avons des développeurs et designers professionnels à votre service. De préférence via WeChat, mais vous pouvez aussi nous écrire par e-mail à :",
  },
  siter: {
    title: 'Galerie de sites',
    desc: "Parcourez notre galerie de sites pour choisir un design ou une fonctionnalité que vous aimez. Tous les sites sont issus de tiers, nous ne réutilisons jamais leur code, il n’y a donc aucun risque de violation de copyright.",
    more: 'Voir plus',
  },
  header: {
    tip: 'Votre développeur\n✨et designer\n　personnel✨',
  },
  footer: {
    cr: 'Tous droits réservés.',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: 'URL invalide, merci de vérifier :',
    desktop: 'Ordinateur',
    tablet: 'Tablette',
    mobile: 'Mobile',
    full: 'Plein écran',
    loading: 'Chargement...',
  },
  page_404: {
    oops: 'Oups !',
    tip: 'La page demandée n’existe pas. L’URL est-elle correcte ?',
    home: 'Retour à l’accueil',
  },
}
