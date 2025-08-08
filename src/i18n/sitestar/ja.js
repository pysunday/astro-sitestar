export default {
  menus: [{
    href: '#home',
    label: 'ホーム',
    key: 'home',
  }, {
    href: '#about',
    label: '概要',
    key: 'about',
  }, {
    href: '#service',
    label: 'サービス',
    key: 'service',
  }, {
    href: '#sites',
    label: 'サイト',
    key: 'site',
  }, {
    href: '#contact',
    label: 'お問い合わせ',
    key: 'contact',
  }],
  btn: {
    back: "戻る",
    siter: "サイトギャラリー",
    contact: "お問い合わせ",
  },
  html_head: {
    title: "サイト一覧ページ {{page}}",
  },
  about: {
    who: {
      name: "私たちは誰？",
      content: [{
        title: "デザインと開発のチーム",
        desc: [
          "私たちは開発者とデザイナーで構成されたチームです。",
          "私たちはスキルを活かして、友人たちの企業のインターネット基盤構築を支援しています。近年、インターネットは大きく発展し、企業は質の高い製品に加え、Webサイトやロゴデザインを通じて製品やブランドを紹介する必要があります。"
        ],
      }]
    },
    service: {
      name: "サービス紹介",
      content: [{
        title: '開発分野',
        desc: [
          "開発者は7年以上の経験を持ち、フロントエンド・バックエンド・クローラー・データベース開発に精通しています。",
          "企業向けに美しいWebサイトをモダンな技術で開発可能。ユーザー体験とSEO最適化を重視し、検索エンジンでの上位表示を支援します。"
        ],
        goto: '技術ブログを見る',
        url: 'https://howduudu.tech/blog/home/',
      }, {
        title: 'デザイン分野',
        desc: [
          "デザイナーは中国四大美術大学の一つを卒業し、ブランド・パッケージ・ロゴデザインに精通、Photoshop、Illustrator、InDesignなどAdobeツールを熟知しています。",
          "不動産・製造・貿易業界など幅広い経験を持ち、独自のデザイン理念があります。",
        ],
        goto: 'ポートフォリオを見る',
        url: 'https://rabbitit.fun'
      }],
    }
  },
  pros: {
    title: '私たちの強み',
    desc: 'Webサイトの開発、登録、運用などワンストップのカスタムサービスを提供します。お好みのサイトを参考にしながら、ニーズに応じて個別に開発いたします。また、合法の範囲でデータ収集やWebサイトリバースエンジニアリングにも対応可能です。ロゴやブランド、パッケージデザインのご依頼も承っております。',
    infos: [{
      title: 'Web開発',
      img: '/images/sitestar/img1.svg',
      small: 'モダンなフロントエンド・バックエンド分離型のWeb開発',
      p: 'React・VueによるSPA開発、Astro・Next.jsによるSSR開発に対応。',
    }, {
      title: '100%カスタム',
      img: '/images/sitestar/img2.svg',
      small: '個別ニーズに応じてカスタマイズされたデザイン',
      p: '多くのWebサイトが似通っているのはテンプレートの使い回しが原因です。当社はテンプレート価格でオリジナル開発を提供します。',
    }, {
      title: 'ドメイン申請と登録',
      img: '/images/sitestar/img3.svg',
      small: '阿里万网を通じてドメイン申請し、中国の情報化部に登録',
      p: '中国国内でWebサイトを運用するには情報化部への登録が必要で、通常7日程度かかります。',
    }, {
      title: 'SEO対応',
      img: '/images/sitestar/img4.svg',
      small: '検索エンジン最適化で上位表示をサポート',
      p: 'GoogleやBaiduでの検索結果上位を狙うには、SEOに対応した構造が不可欠です。',
    }, {
      title: 'SSL対応',
      img: '/images/sitestar/img15.svg',
      small: '通信の安全性を確保し、広告などの中間攻撃を防止',
      p: 'httpsに対応しており、httpアクセス時も自動的にhttpsへリダイレクトされます。',
    }, {
      title: 'Webホスティング',
      img: '/images/sitestar/img6.svg',
      small: '阿里雲・テンセントクラウドにホスティング',
      p: 'DDOS攻撃対策やCDN加速など、カスタム機能の追加も可能です。',
    }, {
      title: 'リバース＆データ収集',
      img: '/images/sitestar/img7.svg',
      small: '対象サイトのデータを収集し、必要に応じて逆解析',
      p: '合法な範囲でのデータ収集を行い、データの可視化や分析に活用します。',
    }, {
      title: 'バックエンドアプリケーション',
      img: '/images/sitestar/img8.svg',
      small: 'Python・Node.jsベースのバックエンドサービス',
      p: 'たとえば小規模なWebアプリで税務局の機能を実現したい場合などに、APIとして提供可能です。',
    }, {
      title: 'ブランドデザイン',
      img: '/images/sitestar/img9.svg',
      small: 'ブランドの認知・信頼・共感を構築',
      p: '視覚・言語・感情要素でブランド理念を明確に伝え、ターゲットにアプローチします。',
    }, {
      title: 'ロゴデザイン',
      img: '/images/sitestar/img10.svg',
      small: 'プロフェッショナルな企業ロゴ設計',
      p: '企業の特徴に合った、戦略的かつ印象的なロゴを設計します。',
    }, {
      title: 'パッケージデザイン',
      img: '/images/sitestar/img11.svg',
      small: '美しさと機能性を兼ね備えた外装デザイン',
      p: 'パッケージはブランド価値を伝える第一接点。視覚・構造・触感で消費者の心を掴みます。',
    }],
  },
  contact: {
    title: '友達追加してご要望を送ってください',
    wechat_tip: 'WeChatでQRコードをスキャン',
    qq_tip: 'QQでQRコードをスキャン',
    tip: 'Web開発、データ開発、ブランドデザインをご希望の方はぜひご連絡ください。専門エンジニアとデザイナーが対応いたします。できるだけWeChatでのご連絡を推奨していますが、メールでも可能です。メールアドレス：',
  },
  siter: {
    title: 'サイトギャラリー',
    desc: 'このギャラリーでは、気になるWebサイトや機能を選んで、カスタマイズ開発を依頼できます。すべてのサイトは第三者のもので、ソースコードの流用はせず、著作権の問題もありません。',
    more: 'もっと見る',
  },
  header: {
    tip: 'あなた専属の\n✨エンジニア　\n　デザイナー✨',
  },
  footer: {
    cr: '全著作権所有。',
    icp: 'ICP License No. 2022020686, Shanghai',
  },
  preview: {
    tip: '無効なURLです。ご確認ください：',
    desktop: 'PC',
    tablet: 'タブレット',
    mobile: 'スマホ',
    full: '全画面',
    loading: '読み込み中...',
  },
  page_404: {
    oops: 'おっと！',
    tip: 'このページは存在しません。正しいURLをご確認ください。',
    home: 'ホームに戻る',
  },
}
