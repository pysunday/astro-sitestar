export default {
  menus: [{
    href: '#home',
    label: 'Startseite',
    key: 'home',
  }, {
    href: '#about',
    label: 'Über uns',
    key: 'about',
  }, {
    href: '#service',
    label: 'Dienstleistungen',
    key: 'service',
  }, {
    href: '#sites',
    label: 'Websites',
    key: 'site',
  }, {
    href: '#contact',
    label: 'Kontakt',
    key: 'contact',
  }],
  btn: {
    back: "Zurück",
    siter: "Website-Galerie",
    contact: "Kontaktieren Sie uns",
  },
  html_head: {
    title: "Seite {{page}} der Website-Liste",
  },
  about: {
    who: {
      name: "Wer sind wir?",
      content: [{
        title: "Design- und Entwicklungsteam",
        desc: [
          "Wir sind ein Team aus Entwicklern und Designern.",
          "Mit unseren Fähigkeiten helfen wir Freunden und Unternehmen bei der Entwicklung ihrer Online-Präsenz. In den letzten Jahren hat sich das Internet rasant entwickelt. Neben hochwertiger Produktqualität benötigen Unternehmen auch Websites, Logos und Online-Präsentationen, um ihre Produkte und Marken sichtbar zu machen."
        ],
      }]
    },
    service: {
      name: "Dienstleistungsübersicht",
      content: [{
        title: 'Entwicklung',
        desc: [
          "Unsere Entwickler verfügen über mehr als 7 Jahre Erfahrung in der Webentwicklung (Frontend & Backend), im Web Scraping und in Datenbanktechnologien.",
          "Wir bieten moderne Frontend- und Backend-Webentwicklung an, mit Fokus auf Benutzerfreundlichkeit und SEO-Optimierung für bessere Suchmaschinenplatzierung."
        ],
        goto: 'Technikblog besuchen',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: 'Design',
        desc: [
          "Unser Designer hat an einer der vier führenden Kunsthochschulen Chinas studiert und ist spezialisiert auf Branding, Verpackungsdesign und Logodesign. Er beherrscht Adobe-Tools wie Photoshop, Illustrator und InDesign.",
          "Seine Arbeiten umfassen Branchen wie Immobilien, Industrie und Außenhandel und zeichnen sich durch Erfahrung und eine starke Designphilosophie aus.",
        ],
        goto: 'Portfolio ansehen',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: 'Unsere Vorteile',
    desc: "Wir bieten maßgeschneiderte Website-Komplettlösungen inklusive Entwicklung, Domainregistrierung, Deployment und Wartung. Sie können eine bestehende Website als Vorlage wählen oder uns Ihre Wünsche mitteilen – wir entwickeln individuell. Darüber hinaus bieten wir Web-Scraping und Reverse Engineering unter Beachtung gesetzlicher Vorgaben. Auch Branding, Logodesign und Verpackungsdesign gehören zu unseren Leistungen.",
    infos: [{
      title: 'Webentwicklung',
      img: '/images/sitestar/img1.svg',
      small: 'Moderne Webentwicklung mit klarer Trennung von Frontend und Backend',
      p: 'Entwicklung von SPA-Seiten mit React/Vue oder serverseitigem Rendering mit Astro/Next.js.',
    }, {
      title: '100% Individualisierung',
      img: '/images/sitestar/img2.svg',
      small: 'Individuelle Gestaltung gemäß Kundenanforderungen',
      p: 'Viele Websites sehen gleich aus, da sie auf Vorlagen basieren. Wir bieten maßgeschneiderte Lösungen zum Preis einer Vorlage.',
    }, {
      title: 'Domain und Registrierung',
      img: '/images/sitestar/img3.svg',
      small: 'Domainanmeldung über Aliyun und Unterstützung bei der ICP-Registrierung',
      p: 'In China ist vor dem Livegang einer Website eine Registrierung beim MIIT erforderlich. Diese dauert ca. 7 Tage und benötigt Unterlagen wie Gewerbeanmeldung.',
    }, {
      title: 'SEO-freundlich',
      img: '/images/sitestar/img4.svg',
      small: 'Suchmaschinenoptimierung für bessere Rankings',
      p: 'Ob Google oder Baidu – ein SEO-optimierter Auftritt sorgt für bessere Sichtbarkeit bei potenziellen Kunden.',
    }, {
      title: 'SSL-Unterstützung',
      img: '/images/sitestar/img15.svg',
      small: 'Sichere Datenübertragung, Schutz vor Weiterleitungen und Werbeeinblendungen',
      p: 'Automatische Weiterleitung auf HTTPS zur Erhöhung der Sicherheit.',
    }, {
      title: 'Website-Hosting',
      img: '/images/sitestar/img6.svg',
      small: 'Hosting auf Cloud-Servern wie Alibaba Cloud oder Tencent Cloud',
      p: 'Individuelle Erweiterungen wie DDoS-Schutz, CDN-Beschleunigung etc. möglich.',
    }, {
      title: 'Reverse Engineering & Daten-Scraping',
      img: '/images/sitestar/img7.svg',
      small: 'Datenerfassung von Zielwebseiten – auch bei starker Absicherung',
      p: 'Datensammlung unter Einhaltung gesetzlicher Bestimmungen. Die Daten können zur Visualisierung oder Analyse verwendet werden.',
    }, {
      title: 'Backend-Services',
      img: '/images/sitestar/img8.svg',
      small: 'Backend-Anwendungen mit Python oder Node.js',
      p: 'Zum Beispiel für Mini-Apps, die Funktionen von Behördenwebsites übernehmen – wir bieten API-gestützte Backend-Dienste an.',
    }, {
      title: 'Markendesign',
      img: '/images/sitestar/img9.svg',
      small: 'Aufbau von Markenidentität, Vertrauen und emotionaler Bindung',
      p: 'Wir transportieren Ihre Markenwerte und -vision durch ein kohärentes Designsystem zu Ihrer Zielgruppe.',
    }, {
      title: 'Logodesign',
      img: '/images/sitestar/img10.svg',
      small: 'Professionelle Logoentwicklung für Unternehmen',
      p: 'Individuelle Logos mit Wiedererkennungswert und strategischer Aussagekraft – visuell ansprechend und leicht einprägsam.',
    }, {
      title: 'Verpackungsdesign',
      img: '/images/sitestar/img11.svg',
      small: 'Kreative Gestaltung, die Ästhetik mit Funktion vereint',
      p: 'Verpackung ist der erste Kontakt mit dem Kunden – durch visuelles, strukturelles und haptisches Design vermitteln wir Markenbotschaften und steigern Verkaufschancen.',
    }],
  },
  contact: {
    title: 'Fügen Sie mich hinzu und senden Sie Ihre Anfrage',
    wechat_tip: 'Scannen Sie den QR-Code, um WeChat hinzuzufügen',
    qq_tip: 'Scannen Sie den QR-Code, um QQ hinzuzufügen',
    tip: "Benötigen Sie eine Website, Datenentwicklung oder Markendesign? Kontaktieren Sie uns! Wir haben erfahrene Entwickler und Designer, die Ihnen zur Seite stehen. Bevorzugt via WeChat, aber auch per E-Mail möglich. Schreiben Sie an:",
  },
  siter: {
    title: 'Website-Galerie',
    desc: "Durchstöbern Sie unsere Galerie, wählen Sie ein Design oder eine Funktion, die Ihnen gefällt, und wir setzen Ihre Website individuell um. Alle gezeigten Seiten gehören Dritten – wir verwenden keinen fremden Quellcode, daher besteht kein Urheberrechtsrisiko.",
    more: 'Mehr anzeigen',
  },
  header: {
    tip: 'Ihr persönlicher\n✨Entwickler &\n　Designer✨',
  },
  footer: {
    cr: 'Alle Rechte vorbehalten.',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: 'Ungültige URL. Bitte überprüfen:',
    desktop: 'PC',
    tablet: 'Tablet',
    mobile: 'Mobil',
    full: 'Vollbild',
    loading: 'Lädt...',
  },
  page_404: {
    oops: 'Hoppla!',
    tip: 'Die angeforderte Seite wurde nicht gefunden. Bitte überprüfen Sie die URL.',
    home: 'Zur Startseite',
  },
}
