export const PLAN_OPTION_DATA = [
  {
    categoryId: "free-option",
    id: "google-analytics",
    name: "Google Analytics導入代行",
    text: <>ホームページへのアクセス数や流入元などを解析するツールです。</>,
    iconPath: "/images/common/logo-ga.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-option",
    id: "google-search-console",
    name: "Google Search Console導入代行",
    text: <>ホームページの検索順位やクリック数などを分析するためのツールです。</>,
    iconPath: "/images/common/logo-sc.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-option",
    id: "favicon",
    name: "ファビコン作成・設置",
    text: <>ホームページのシンボルとなるアイコンを作成・設置します。</>,
    iconPath: "/images/common/logo-favi.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-option",
    id: "google-map",
    name: "Google Map埋め込み",
    text: <>店舗や会社の所在地を表示するマップをホームページ内に設置します。</>,
    iconPath: "/images/common/logo-gm.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-option",
    id: "google-calendar",
    name: "Google Calendar埋め込み",
    text: <>予定やイベントのスケジュールを表示するカレンダーをホームページ内に設置します。</>,
    iconPath: "/images/common/logo-gc.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-option",
    id: "sns-embed",
    name: "SNS埋め込み",
    text: <>Instagram・X(Twitter)・Facebookなどのタイムラインをホームページ内に設置します。</>,
    iconPath: "/images/common/logo-sns-timeline.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  // paid options
  {
    categoryId: "paid-option",
    id: "add-revision",
    name: "画像・テキスト修正の追加",
    text: <>各プランの画像・テキスト修正回数の上限以上に修正が必要な場合は、1回分ずつ追加可能です。</>,
    iconPath: "/images/common/logo-revision.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 3000,
      countUnit: "回",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-option",
    id: "add-page",
    name: "ページ追加",
    text: <>各プランのページ数上限以上のページが必要な場合は、ページを追加可能です。</>,
    iconPath: "/images/common/logo-add-page.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 15000,
      countUnit: "P",
    },
    availablePlans: ["basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-option",
    id: "add-section",
    name: "セクション追加",
    text: (
      <>
        ページ内にコンテンツを追加したい場合は、セクションを追加可能です。
        <br />
        ※TOPページ：6セクションまで無料
        <br />
        ※下層ページ：3セクションまで無料
      </>
    ),
    iconPath: "/images/common/logo-add-section.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 3000,
      countUnit: "P",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-option",
    id: "add-form",
    name: "フォーム追加",
    text: (
      <>
        お問い合わせフォーム以外に、資料請求やエントリーフォームなど、お客様が希望するフォームを追加します。
        <br />
        ※フォームは全プランで1つまで無料です。
      </>
    ),
    iconPath: "/images/common/logo-add-form.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 30000,
      countUnit: "個",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },

  {
    categoryId: "paid-option",
    id: "add-cms",
    name: "お客様更新機能（投稿タイプ）の追加",
    text: <>お知らせやブログの他に、「商品情報」や「物件情報」など、お客様が希望する更新可能なシステムを追加します。</>,
    iconPath: "/images/common/logo-cms.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 30000,
      countUnit: "種",
    },
    availablePlans: ["cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-option",
    id: "add-cf",
    name: "お客様更新機能（カスタムフィールド）の追加",
    text: <>ホームページ内の画像やテキストをお客様自身で更新可能にするカスタムフィールドを追加します。</>,
    iconPath: "/images/common/logo-cf.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 2000,
      countUnit: "個",
    },
    availablePlans: ["cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-option",
    id: "sns-api",
    name: "SNS連携（API）",
    text: (
      <>ホームページ内にSNSの投稿を表示する機能を追加します。iframe埋め込みよりも自由度の高いデザインが可能です。</>
    ),
    iconPath: "/images/common/logo-sns-api.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 30000,
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },

  // free animation
  {
    categoryId: "free-animation",
    id: "hamburger-menu",
    name: "ハンバーガーメニュー",
    text: <>クリックすると、ナビゲーションメニューが表示される機能です。スクロール追従も無料で実装可能です。</>,
    iconPath: "/images/common/logo-hamburger-menu.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-animation",
    id: "simple-button-animation",
    name: "シンプルなボタンアニメーション",
    text: (
      <>
        ボタンにマウスカーソルを当てた時のアニメーションを実装します。色の反転や透明度を下げるなど、シンプルな動きに限ります。
      </>
    ),
    iconPath: "/images/common/logo-btn-anim-free.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-animation",
    id: "simple-slider",
    name: "シンプルな画像スライダー",
    text: <>複数の画像やコンテンツをスライドショー形式で表示する機能です。</>,
    iconPath: "/images/common/logo-simple-slider.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "free-animation",
    id: "accordion",
    name: "アコーディオン",
    text: (
      <>クリックすると中身の要素が展開される機能です。Q&Aや説明文など、コンテンツを省スペースで表示するのに便利です。</>
    ),
    iconPath: "/images/common/logo-accordion.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: false,
      priceNum: null,
      countUnit: null,
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  // paid animation
  {
    categoryId: "paid-animation",
    id: "loading-animation",
    name: "ローディングアニメーション",
    text: <>ページの読み込み中に表示するアニメーションです。</>,
    iconPath: "/images/common/logo-loading.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 5000,
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-animation",
    id: "fadein-animation",
    name: "フェードインアニメーション",
    text: <>スクロールで要素が画面内に入ると、対象に動きを付けて表示するアニメーションです。</>,
    iconPath: "/images/common/logo-fadein.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 3000,
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-animation",
    id: "advanced-button-animation",
    name: "高度なボタンアニメーション",
    text: (
      <>
        マウスカーソルを当てるとテキストが変化したり、アイコンが動いたりなど、高度なボタンアニメーションを実装します。
      </>
    ),
    iconPath: "/images/common/logo-btn-anim-advanced.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 3000,
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-animation",
    id: "advanced-slider",
    name: "高度な画像スライダー",
    text: <>サムネイル付き画像スライダーや、モーダル連動スライダーなど、高度なスライダーを実装します。</>,
    iconPath: "/images/common/logo-slider-advanced.svg",
    countable: true,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: 5000,
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: true,
  },
  {
    categoryId: "paid-animation",
    id: "other-animation",
    name: "その他カスタムアニメーション",
    text: (
      <>
        ご要望に合わせて、カスタムアニメーションを実装します。上記以外のアニメーションをご希望でしたら、お気軽にご相談ください。
      </>
    ),
    iconPath: "/images/common/logo-custom-animation.svg",
    countable: false,
    quantity: 1,
    isChecked: false,
    price: {
      showPrice: true,
      priceNum: "要相談",
      countUnit: "種",
    },
    availablePlans: ["minimal", "basic", "cms"],
    showInSimulation: false,
  },
];

export const PLAN_DATA = [
  {
    planId: "minimal",
    planName: "Minimal",
    monthlyPrice: 5980,
    yearlyPrice: 65780,
    yearlyCampaignPrice: 32890,
  },
  {
    planId: "basic",
    planName: "Basic",
    monthlyPrice: 8980,
    yearlyPrice: 98780,
    yearlyCampaignPrice: 49390,
  },
  {
    planId: "cms",
    planName: "CMS",
    monthlyPrice: 12980,
    yearlyPrice: 142780,
    yearlyCampaignPrice: 71390,
  },
];
