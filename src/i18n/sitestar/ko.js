export default {
  menus: [{
    href: '#home',
    label: '홈',
    key: 'home',
  }, {
    href: '#about',
    label: '소개',
    key: 'about',
  }, {
    href: '#service',
    label: '서비스',
    key: 'service',
  }, {
    href: '#sites',
    label: '사이트',
    key: 'site',
  }, {
    href: '#contact',
    label: '문의하기',
    key: 'contact',
  }],
  btn: {
    back: "뒤로가기",
    siter: "사이트 갤러리",
    contact: "문의하기",
  },
  html_head: {
    title: "사이트 목록 {{page}}페이지",
  },
  about: {
    who: {
      name: "우리는 누구인가요?",
      content: [{
        title: "디자인 및 개발 팀",
        desc: [
          "우리는 개발자와 디자이너로 구성된 팀입니다.",
          "우리는 우리의 기술을 통해 친구들의 기업 인터넷 인프라 구축을 도와주고 있습니다. 최근 몇 년 동안 인터넷이 급속히 발전하면서, 기업은 제품 품질 외에도 웹사이트, 로고 디자인 등을 통해 고객에게 기업을 소개해야 합니다."
        ],
      }]
    },
    service: {
      name: "서비스 소개",
      content: [{
        title: '개발 분야',
        desc: [
          "개발자는 7년 이상의 경험을 가지고 있으며, 프론트엔드 및 백엔드, 크롤러, 데이터베이스 개발에 능숙합니다.",
          "현대적인 프론트엔드 기술을 활용하여 아름다운 웹사이트를 개발할 수 있으며, SEO 최적화를 통해 검색 엔진에서 상위 노출을 지원합니다."
        ],
        goto: '기술 블로그 방문하기',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: '디자인 분야',
        desc: [
          "디자이너는 중국 4대 미술대학 중 하나를 졸업하였으며, 브랜드 디자인, 패키지 디자인, 로고 디자인에 능숙하고 Photoshop, Illustrator, InDesign 등 Adobe 도구에 익숙합니다.",
          "디자인 작업은 부동산, 산업, 무역 등 다양한 분야를 포함하며, 풍부한 경험과 독창적인 디자인 철학을 보유하고 있습니다.",
        ],
        goto: '포트폴리오 보기',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: '우리의 강점',
    desc: '우리는 웹사이트 개발, 등록, 배포, 운영 등 모든 서비스를 포함한 맞춤형 웹 개발 서비스를 제공합니다. 샘플 사이트나 관심 있는 사이트를 선택하여 요청하시면, 요구 사항에 맞게 맞춤 개발해 드립니다. 또한 법률 및 규정을 준수하는 범위 내에서 데이터 수집, 웹사이트 리버스 엔지니어링도 지원합니다. 로고, 브랜드, 패키지 디자인도 가능합니다.',
    infos: [{
      title: '웹사이트 개발',
      img: '/images/sitestar/img1.svg',
      small: '프론트엔드와 백엔드가 분리된 현대적인 웹 개발 방식',
      p: 'React, Vue 기반의 SPA 개발과 Astro, Next.js를 통한 서버 사이드 렌더링 개발 지원',
    }, {
      title: '100% 맞춤형',
      img: '/images/sitestar/img2.svg',
      small: '고객 요구에 따라 웹 디자인 형식을 맞춤 제작',
      p: '많은 사이트들이 비슷해 보이는 이유는 동일한 템플릿을 사용하기 때문입니다. 우리는 템플릿 가격으로 맞춤형 개발을 제공합니다.',
    }, {
      title: '도메인 신청 및 등록',
      img: '/images/sitestar/img3.svg',
      small: 'Alibaba를 통해 도메인 신청 및 ICP 등록 지원',
      p: '중국 내 웹사이트 운영 전에는 ICP 등록이 필요하며, 영업허가증 등 서류가 필요하고 약 7일이 소요됩니다.',
    }, {
      title: 'SEO 최적화',
      img: '/images/sitestar/img4.svg',
      small: '검색 엔진 상위 노출을 위한 최적화',
      p: 'Google, Baidu 등 검색엔진에서 제품을 검색하는 고객들을 위해, SEO 친화적인 사이트가 필요합니다.',
    }, {
      title: 'SSL 지원',
      img: '/images/sitestar/img15.svg',
      small: '데이터 전송 보안 강화, 광고 삽입 및 도메인 변조 방지',
      p: 'https를 지원하며, http로 접속 시 자동으로 https로 리디렉션됩니다.',
    }, {
      title: '웹사이트 호스팅',
      img: '/images/sitestar/img6.svg',
      small: 'Aliyun, Tencent Cloud 등 클라우드에 웹사이트 호스팅',
      p: 'DDOS 방지, CDN 가속 등 추가 기능도 지원합니다.',
    }, {
      title: '웹 리버스 엔지니어링 및 데이터 수집',
      img: '/images/sitestar/img7.svg',
      small: '특정 사이트의 데이터 수집 및 보안이 강한 사이트 리버스 가능',
      p: '합법적이고 적절한 방식으로 데이터를 수집하고, 시각화 및 분석을 통해 가치를 창출합니다.',
    }, {
      title: '백엔드 애플리케이션 서비스',
      img: '/images/sitestar/img8.svg',
      small: 'Python, Node.js 기반의 백엔드 서비스',
      p: '예: 세무 기능을 수행하는 미니 앱을 만들기 위해 API 형태로 기능을 제공할 수 있습니다.',
    }, {
      title: '브랜드 디자인',
      img: '/images/sitestar/img9.svg',
      small: '브랜드 인지도, 신뢰도 및 감정 연결 강화',
      p: '시각, 언어, 감성 요소를 통해 브랜드의 핵심 철학과 가치를 체계적으로 전달합니다.',
    }, {
      title: '로고 디자인',
      img: '/images/sitestar/img10.svg',
      small: '전문 기업용 로고 디자인',
      p: '기업 특성에 맞는 전략적이며 기억에 남는 로고를 디자인합니다.',
    }, {
      title: '패키지 디자인',
      img: '/images/sitestar/img11.svg',
      small: '미학과 기능을 결합한 창의적인 패키지 디자인',
      p: '패키지는 제품과 소비자가 처음 만나는 접점으로, 브랜드 가치를 시각, 구조, 촉감을 통해 전달합니다.',
    }],
  },
  contact: {
    title: '친구 추가 후 요구사항을 보내주세요',
    wechat_tip: 'QR코드를 스캔하여 WeChat 추가',
    qq_tip: 'QR코드를 스캔하여 QQ 추가',
    tip: '웹 개발, 데이터 개발, 브랜드 디자인이 필요하신 경우 언제든지 연락 주세요. 전문 개발자 및 디자이너가 대응해 드립니다. 가능하면 WeChat으로 연락주시고, 이메일도 가능합니다. 이메일 주소:',
  },
  siter: {
    title: '사이트 갤러리',
    desc: '갤러리에서 다양한 웹사이트를 확인하고, 마음에 드는 기능이나 디자인을 선택하여 맞춤 개발을 요청할 수 있습니다. 모든 사이트는 제3자 소유이며, 코드 복제는 하지 않으므로 저작권 문제가 없습니다.',
    more: '더보기',
  },
  header: {
    tip: '당신만의\n✨개인 개발자\n　디자이너✨',
  },
  footer: {
    cr: '모든 권리 보유.',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: '잘못된 URL입니다. 다시 확인해주세요:',
    desktop: 'PC',
    tablet: '태블릿',
    mobile: '모바일',
    full: '전체화면',
    loading: '로딩 중...',
  },
  page_404: {
    oops: '앗!',
    tip: '이 페이지는 존재하지 않습니다. 주소를 다시 확인해 주세요.',
    home: '홈으로 이동',
  },
}
