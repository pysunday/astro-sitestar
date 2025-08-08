export default {
  menus: [{
    href: '#home',
    label: 'HOME',
    key: 'home',
  }, {
    href: '#about',
    label: 'ABOUT',
    key: 'about',
  }, {
    href: '#service',
    label: 'SERVICE',
    key: 'service',
  }, {
    href: '#sites',
    label: 'SITES',
    key: 'site',
  }, {
    href: '#contact',
    label: 'CONTACT',
    key: 'contact',
  }],
  btn: {
    back: "back",
    siter: "Website Gallery",
    contact: "Contact Us",
  },
  html_head: {
    title: "site list page of {{page}}"
  },
  about: {
    who: {
      name: "Who Are We?",
      content: [{
        title: "A Design and Development Duo",
        desc: [
          "We are a team of developers and designers.",
          "Using our skills, we help friends build the foundational infrastructure for their businesses online. In recent years, the internet has developed rapidly. Beyond solid product quality, companies now also need to leverage the power of the web—through websites, product showcases, and logo/brand design—to help customers better understand their business."
        ],
      }]
    },
    service: {
      name: "Our Services",
      content: [{
        title: 'Development Focus',
        desc: [
          "Our developer brings over 7 years of experience in web development, including both front-end and back-end work, web scraping, and database development.",
          "We offer full-stack web development services for businesses, creating elegant and modern websites using the latest front-end technologies. We pay close attention to user interaction and experience, and help improve your site's visibility through SEO optimization—aiming for higher rankings in search engine results.",
        ],
        goto: 'Click Here to Visit Our Tech Blog',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: 'Design Focus',
        desc: [
          "Our designer graduated from one of China's top four art academies and specializes in brand identity, packaging design, and logo design. They are highly proficient in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign.",
          "With a strong portfolio spanning industries such as real estate, manufacturing, and international trade, our designer brings both rich experience and a unique creative perspective to every project.",
        ],
        goto: 'Click Here to View Our Portfolio',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: 'Our Strengths',
    desc: 'We offer fully customized, end-to-end website development services, including development, domain registration, deployment, and maintenance. You can choose from sample websites or any site you’re interested in, and we will tailor the development to your specific needs. If you need to collect data from websites, we also provide related services—as long as they comply with laws and regulations—including website reverse engineering and data scraping. If you need logo, branding, or packaging design, you can also count on us. We look forward to providing you with the highest quality service.',
    infos: [{
      title: 'Website Development',
      img: '/images/sitestar/img1.svg',
      small: 'Modern web development with frontend-backend separation, making it easy to add new features and maintain existing code',
      p: 'We develop dynamic SPA pages using React and Vue, as well as server-rendered pages with Astro and Next.js.',
    }, {
      title: '100% Custom-Built',
      img: '/images/sitestar/img2.svg',
      small: 'We design web layouts based on your specific needs, adding personalized elements to make your site stand out.',
      p: 'Many websites today look alike because they are built using the same templates. We offer fully customized development—at the cost of a typical template—helping your site truly stand out from the rest.',
    }, {
      title: 'Domain Registration & ICP Filing',
      img: '/images/sitestar/img3.svg',
      small: 'We help you register a domain via Alibaba Cloud and assist with the ICP filing required by the Ministry of Industry and Information Technology (MIIT).',
      p: 'For domestic websites, ICP filing is mandatory before going live. It typically takes about 7 days and requires key documents such as the company’s business license.',
    }, {
      title: 'SEO-Friendly',
      img: '/images/sitestar/img4.svg',
      small: 'Optimized for search engine ranking to help your website appear higher in search results.',
      p: 'Both domestic and international customers typically use search engines like Google or Baidu to find products. An SEO-friendly website increases the chances of appearing on the first few pages of search results.',
    }, {
      title: 'SSL Support',
      img: '/images/sitestar/img15.svg',
      small: 'Ensures secure data transmission and prevents domain hijacking or ad injection by third-party tools.',
      p: 'All requests are served over HTTPS, and HTTP access automatically redirects to HTTPS.',
    }, {
      title: 'Website Hosting',
      img: '/images/sitestar/img6.svg',
      small: 'The website will be hosted on cloud servers such as Alibaba Cloud or Tencent Cloud.',
      p: 'Personalized features like DDoS protection and CDN acceleration can be added based on your needs.',
    }, {
      title: 'Website Reverse Engineering & Data Collection',
      img: '/images/sitestar/img7.svg',
      small: 'We collect data from specified sites; sites with strong security measures require reverse engineering, which we also support.',
      p: 'Data collection is conducted legally and compliantly, with reasonable data gathering. The collected data can be further processed for visualization and behavioral analysis.',
    }, {
      title: 'Backend Application Services',
      img: '/images/sitestar/img8.svg',
      small: 'Backend services based on Python and Node.js, such as website feature proxies.',
      p: 'If you need to proxy functions from other websites—for example, creating a mini-program to access tax bureau features—backend services can provide the necessary API support.',
    }, {
      title: 'Brand Design',
      img: '/images/sitestar/img9.svg',
      small: 'Establish and strengthen brand recognition, trust, and emotional connection.',
      p: "Using visual, verbal, and emotional elements, we systematically communicate a brand's core values, values, and personality to its target audience.",
    }, {
      title: 'Logo Design',
      img: '/images/sitestar/img10.svg',
      small: 'Professional corporate logo design',
      p: "Design a logo tailored to your company's characteristics, tailored to its development and positioning, with a strategic and compelling story. Not only aesthetically pleasing, but also highly recognizable and instantly memorable, ensuring a memorable experience for customers.",
    }, {
      title: 'Packaging Design',
      img: '/images/sitestar/img11.svg',
      small: 'Creative design combines aesthetics and functionality for product packaging.',
      p: "Packaging is the crucial bridge between a product and the consumer during their first face-to-face encounter. It doesn't just enclose the product; it uses visuals, structure, and tactile properties to convey brand value, attract attention, and drive sales.",
    }],
  },
  contact: {
    title: 'Add friends and send your needs',
    wechat_tip: 'Scan the QR code to add WeChat friends',
    qq_tip: 'Scan the QR code to add QQ friends',
    tip: 'If you need website development, data development, or brand design, feel free to contact me. We have professional developers and designers ready to assist you. The best way to reach us is via WeChat, but you can also contact us by email at:',
  },
  siter: {
    title: 'Website Gallery',
    desc: 'You can browse the websites in our site gallery and choose the ones you like or select specific features you’re interested in. We will design and develop your website pages based on your selections. All sites in the gallery are from third-party sources. We do not reuse any original source code, so there is no risk of copyright infringement. Feel free to make your selections with confidence.',
    more: 'View More',
  },
  header: {
    tip: 'Be Your Dedicated\n✨Developer\nDesigner✨',
  },
  footer: {
    cr: 'All rights reserved.',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: 'The target website is invalid, please check:',
    desktop: 'Desktop',
    tablet: 'Tablet',
    mobile: 'Mobile',
    full: 'Fullscreen',
    loading: 'Loading...',
  },
  page_404: {
    oops: 'Oops!',
    tip: "The page you're trying to access doesn't exist. Not sure about the page address?",
    home: 'Go to Homepage',
  },
}
