export default {
  menus: [{
    href: '#home',
    label: '家',
    key: 'home',
  }, {
    href: '#about',
    label: '关于',
    key: 'about',
  }, {
    href: '#service',
    label: '服务',
    key: 'service',
  }, {
    href: '#sites',
    label: '站点',
    key: 'site',
  }, {
    href: '#contact',
    label: '联系',
    key: 'contact',
  }],
  btn: {
    back: "返回",
    siter: "站点长廊",
    contact: "联系我们",
  },
  html_head: {
    title: "站点列表第{{page}}页"
  },
  about: {
    who: {
      name: "我们是谁?",
      content: [{
        title: "设计与开发组合",
        desc: [
          "我们由开发人员和设计师组成。",
          "我们通过自己的技能帮助朋友们完成企业互联网基础建设。近几年互联网得到了长足发展， 企业除了朴实无华的产品质量之外，还需要借助互联网之力，通过线上的网站展示产品及包装logo设计等让客户了解企业。"
        ],
      }]
    },
    service: {
      name: "服务介绍",
      content: [{
        title: '开发方向',
        desc: [
          "开发人员有7年+开发经验，熟悉网站前后端开发、爬虫开发、数据库开发等。",
          "可以为企业提供网站前后端开发，利用现代化前端技术开发优美的网站页面。注重交互和体验， 通过SEO优化帮助客户将网站在搜索引擎排名中靠前。"
        ],
        goto: '点击访问技术博客',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: '设计方向',
        desc: [
          "设计师毕业于四大美院之一，擅长品牌设计、包装设计、Logo设计等，熟悉Adobe开发工具. Photoshop, Illustrator, InDesign等。",
          "设计师作品覆盖地产、工业、外贸等行业，有着丰富的设计经验和独特的设计理念。",
        ],
        goto: '点击访问作品集',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: '我们的优势',
    desc: '我们提供个性化定制网站开发全套服务，包括网站的开发、备案、部署、运维等一条龙服务，我们提供个性化定制网站， 可以选定样例网站或者您感兴趣的网站，根据您的需求我们再个性化开发。 如果您有网站需要采集数据，在不违反法律法规的情况，也可以提供相关服务，我们同时提供网站逆向、数据采集服务。 如您需要设计logo、品牌、包装也可以选择我们，期待为您提供最优质的服务。',
    infos: [{
      title: '网站开发',
      img: '/images/sitestar/img1.svg',
      small: '前后端分离现代化网页开发，对增加新功能及现有代码维护非常好',
      p: 'React、Vue的动态渲染SPA页面开发、Astro、Nextjs后端渲染页面开发。',
    }, {
      title: '100%定制',
      img: '/images/sitestar/img2.svg',
      small: '根据客户需求设计网页展示形式，增加能凸显个性化的元素',
      p: '可以看到很多网站都长得差不多，这是因为市面上很多站点都是通过一套模版生成的，我们提供定制开发仅花费模版的价格，帮助您的网站与众不同，',
    }, {
      title: '域名申请与备案',
      img: '/images/sitestar/img3.svg',
      small: '阿里万网申请域名并协助企业工信部备案',
      p: '国内站点投入使用前需要到国家工信部ICP备案网站提交备案，需要用到企业营业执照等关键材料，备案大概需要7天。',
    }, {
      title: 'SEO友好',
      img: '/images/sitestar/img4.svg',
      small: '搜索引擎竞价排名友好，帮助企业网站在搜索引擎结果排名靠前',
      p: '国内外客户搜索一款产品基本是到google、baidu等搜索引擎搜索，SEO友好的网站是会在用户搜索结果的前几页显示。',
    }, {
      title: 'SSL支持',
      img: '/images/sitestar/img15.svg',
      small: '保护网站传输安全，避免中间人工具导致的域名跳转与广告植入',
      p: '请求前面需要带https，用户浏览器输入http会自动跳转到https。',
    }, {
      title: '网站托管',
      img: '/images/sitestar/img6.svg',
      small: '网站最终会托管到阿里云、腾讯云等云服务器',
      p: '可以根据需求增加个性化功能，如防DDOS攻击、CDN加速等。',
    }, {
      title: '网站逆向与数据采集',
      img: '/images/sitestar/img7.svg',
      small: '采集指定站点数据，站点安防能力强的需要逆向网站，我们同时提供网站逆向支持',
      p: '数据采集基于合法合规原则，合理采集数据，可通过采集到的数据进行进一步可视化加工与数据行为分析。',
    }, {
      title: '后端应用服务',
      img: '/images/sitestar/img8.svg',
      small: '基于Python、NodeJS的后端应用服务，如：网站功能代理等',
      p: '如何需要代理其它网站功能，如做一个小程序实现税务局的功能，此时就可以利用后端服务提供接口支持。',
    }, {
      title: '品牌设计',
      img: '/images/sitestar/img9.svg',
      small: '建立和强化品牌的识别度、信任感和情感联结',
      p: '通过视觉、语言和情感元素，将一个品牌的核心理念、价值观和个性，以系统化的方式传达给目标受众。',
    }, {
      title: 'Logo设计',
      img: '/images/sitestar/img10.svg',
      small: '专业的企业Logo设计',
      p: '根据企业特点设计符合企业发展与定位的Logo，有战略、有故事，不仅美观，更有明确的识别性和传播力，让客户一眼就能记住',
    }, {
      title: '包装设计',
      img: '/images/sitestar/img11.svg',
      small: '将产品的外包装进行美学 + 功能性结合的创意设计工作',
      p: '包装是产品与消费者第一次“面对面”接触时的重要桥梁。它不仅仅是“包住产品”，而是用视觉、结构和触感传达品牌价值、吸引注意力，并促进销售。',
    }],
  },
  contact: {
    title: '添加好友发送您的需求',
    wechat_tip: '扫码加微信好友',
    qq_tip: '扫码加QQ好友',
    tip: '需要网站开发、数据开发、品牌设计的请联系我，我们有专业开发工程师和设计师为您服务，最好使用微信联系，当然也可以通过邮件找到我们，邮件请发送：',
  },
  siter: {
    title: '站点长廊',
    desc: '您可以查看站点长廊内网站，选择喜欢的网站或者网站的部分功能，我们会根据您选择的内容设计并开发成网站页面。 收集的站点全部为第三方网站，我们不会复用网站源码，因此不会有侵权风险，请放心选用。',
    more: '查看更多',
  },
  header: {
    tip: '做您的专属\n✨程序员　\n　设计师✨',
  },
  footer: {
    cr: '保留所有权利。',
    icp: '沪ICP备2022020686号',
  },
  preview: {
    tip: '目标网址不合法请检查：',
    desktop: '电脑',
    tablet: '平板',
    mobile: '手机',
    full: '全屏',
    loading: '加载中...',
  },
  page_404: {
    oops: '糟糕!',
    tip: '当前访问的页面不存在，不确定要访问的页面地址？',
    home: '进入首页',
  },
}
