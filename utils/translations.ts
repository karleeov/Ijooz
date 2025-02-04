type TranslationType = {
  en: typeof en;
  zh: typeof zh;
}

const en = {
  titleMain: "Fresh. Healthy.",
  titleHighlight: "Instant.",
  subtitle: "Globally loved smart fresh orange juice machine",
  description1: "Experience the revolution in fresh juice vending with iJooz Hong Kong",
  description2: "IJOOZ is currently the world's largest smart fresh orange juice vending machine, deeply loved by the public. IJOOZ allows you to have a fresh orange juice anytime to supplement your vitamins!",
  tryNow: "Try Now",
  // Health Benefits section
  healthBenefitsTitle: "Health Benefits",
  benefits: [
    {
      title: "Heart Health",
      description: "Rich in potassium and antioxidants for cardiovascular health"
    },
    {
      title: "Energy Boost",
      description: "Natural sugars and vitamins for instant energy"
    },
    {
      title: "Immune Support",
      description: "High in Vitamin C to strengthen your immune system"
    },
    {
      title: "Brain Function",
      description: "Flavonoids that support cognitive performance"
    }
  ],
  // Product Showcase section
  productsTitle: "Our Products",
  // Global Presence section
  globalPresenceTitle: "Global Presence",
  globalPresenceImageAlt: "iJooz Global Presence Map",
  stats: [
    {
      value: "10+",
      label: "Countries"
    },
    {
      value: "1000+",
      label: "Locations"
    },
    {
      value: "5M+",
      label: "Happy Customers"
    },
    {
      value: "24/7",
      label: "Service Support"
    }
  ],
  // Media Coverage section
  mediaCoverageTitle: "Media Coverage",
  mediaLogoAlts: [
    "South China Morning Post Logo",
    "Hong Kong Economic Times Logo",
    "Apple Daily Logo",
    "Ming Pao Logo",
    "Oriental Daily Logo",
    "The Standard Logo"
  ],
  mediaQuotes: [
    {
      text: "iJooz revolutionizes the fresh juice industry with their innovative vending machines",
      source: "South China Morning Post"
    },
    {
      text: "The future of healthy refreshments is here with iJooz's smart vending solution",
      source: "Hong Kong Economic Times"
    },
    {
      text: "Making fresh orange juice accessible 24/7 across Hong Kong",
      source: "The Standard"
    }
  ],
  // Testimonials section
  testimonialsTitle: "Customer Testimonials",
  testimonials: [
    {
      name: "Sarah Wong",
      role: "Fitness Enthusiast",
      text: "Having fresh orange juice available 24/7 at my gym is amazing! It's the perfect post-workout refreshment."
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      text: "Our employees love having an iJooz machine in the office. It's a great healthy alternative to sugary drinks."
    },
    {
      name: "David Lee",
      role: "Mall Operations Director",
      text: "The iJooz machine has been a great addition to our food court. Customers appreciate having a healthy option available."
    }
  ],
  // Gallery section
  galleryTitle: "Product Gallery",
  galleryImageAlts: [
    "iJooz vending machine in a modern shopping mall",
    "Close-up of fresh oranges being squeezed",
    "Customer using contactless payment at iJooz machine",
    "iJooz machine's sleek design and interface",
    "Fresh orange juice being dispensed into a cup",
    "Multiple iJooz machines in a prime location"
  ],
  // Features section
  featuresTitle: "Advanced Technology",
  hardwareTitle: "Smart Hardware",
  hardwareDesc: "Our vending machines are equipped with state-of-the-art components, including a precision juice extraction system, temperature-controlled storage, and automated cleaning mechanisms.",
  softwareTitle: "Intelligent Software",
  softwareDesc: "Powered by cloud-based management system with real-time monitoring, automated inventory tracking, and smart maintenance alerts for optimal performance.",
  // Supply Chain section
  supplyCommitmentTitle: "Our Commitment",
  orangeGroveAlt: "Orange grove where we source our oranges",
  supplySection: {
    title: "Sustainable Supply Chain",
    description: "We work directly with certified orange farms to ensure the highest quality fruits while maintaining sustainable practices.",
    features: [
      {
        icon: "truck",
        text: "Direct farm-to-machine delivery"
      },
      {
        icon: "leaf",
        text: "Sustainably grown oranges"
      },
      {
        icon: "shieldCheck",
        text: "Quality assurance at every step"
      }
    ]
  },
  recycleSection: {
    title: "Eco-Friendly Operations",
    description: "Our commitment to sustainability extends to every aspect of our operations, from sourcing to waste management.",
    features: [
      {
        icon: "recycle",
        text: "100% recyclable packaging"
      },
      {
        icon: "leaf",
        text: "Minimal environmental impact"
      },
      {
        icon: "shieldCheck",
        text: "Zero waste initiatives"
      }
    ]
  },
  footer: {
    about: {
      title: "About iJooz",
      description: "iJooz is revolutionizing the fresh juice industry with smart vending machines that deliver premium orange juice on demand."
    },
    contact: {
      title: "Contact Us",
      email: "ijoozhk@gmail.com",
      phone: "+852 5407 6027"
    },
    social: {
      title: "Follow Us",
      facebook: "iJooz on Facebook",
      twitter: "iJooz on Twitter",
      instagram: "iJooz on Instagram"
    },
    newsletter: {
      title: "Newsletter",
      placeholder: "Enter your email",
      button: "Subscribe",
      description: "Stay updated with our latest news and offers"
    },
    copyright: " 2025 iJooz. All rights reserved."
  },
  vendingMachineTitle: "Smart Juice Vending Machine",
  vendingMachineFeatures: [
    "Fresh oranges squeezed on demand",
    "Contactless payment options",
    "Real-time monitoring system",
    "Temperature-controlled storage",
    "Automatic cleaning system"
  ],
  // Contact page
  contact: {
    pageTitle: "Contact Us",
    formTitle: "Get in Touch",
    selectEnquiry: "Select Enquiry Type",
    locationPartnership: "Location Partnership",
    businessPartnership: "Business Partnership",
    generalEnquiry: "General Enquiry",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "Your email",
    phone: "Phone",
    phonePlaceholder: "Your phone number",
    location: "Proposed Location",
    locationPlaceholder: "Address of proposed location",
    message: "Message",
    messagePlaceholder: "Tell us more about your enquiry",
    submit: "Submit",
    locationTitle: "Location Partnership",
    locationDescription: "Join our network of prime locations across Hong Kong. We're looking for high-traffic spots to place our innovative orange juice vending machines.",
    locationBenefits: [
      "Zero setup cost",
      "Regular maintenance and restocking",
      "Passive income opportunity",
      "Attract more foot traffic",
      "24/7 technical support"
    ],
    businessTitle: "Business Partnership",
    businessDescription: "Explore business opportunities with iJooz Hong Kong. We're open to various collaboration models to expand our presence in the market.",
    businessBenefits: [
      "Proven business model",
      "Technical and operational support",
      "Marketing collaboration",
      "Flexible partnership terms",
      "Growing market presence"
    ]
  },
  // ... rest of the English translations
} as const;

const zh = {
  titleMain: "新鮮. 健康.",
  titleHighlight: "即時.",
  subtitle: "深受全球喜愛的智能鮮榨橙汁機",
  description1: "體驗iJooz香港帶來的新鮮果汁革命",
  description2: "IJOOZ 為目前全球規模最大的智能鮮榨橙汁售賣機，深受大眾喜愛。IJOOZ 讓你隨時來一杯鮮榨橙汁，補充維他命！",
  tryNow: "立即體驗",
  // Health Benefits section
  healthBenefitsTitle: "健康好處",
  benefits: [
    {
      title: "心臟健康",
      description: "富含鉀和抗氧化物，有益心血管健康"
    },
    {
      title: "提升能量",
      description: "天然糖分和維生素，即時補充能量"
    },
    {
      title: "增強免疫力",
      description: "高含量維生素C，增強免疫系統"
    },
    {
      title: "腦部功能",
      description: "類黃酮有助提升認知功能"
    }
  ],
  // Product Showcase section
  productsTitle: "我們的產品",
  // Global Presence section
  globalPresenceTitle: "全球業務",
  globalPresenceImageAlt: "iJooz 全球業務分佈圖",
  stats: [
    {
      value: "10+",
      label: "國家"
    },
    {
      value: "1000+",
      label: "營業地點"
    },
    {
      value: "5M+",
      label: "滿意顧客"
    },
    {
      value: "24/7",
      label: "客戶支援"
    }
  ],
  // Media Coverage section
  mediaCoverageTitle: "媒體報導",
  mediaLogoAlts: [
    "南華早報標誌",
    "香港經濟日報標誌",
    "蘋果日報標誌",
    "明報標誌",
    "東方日報標誌",
    "英文虎報標誌"
  ],
  mediaQuotes: [
    {
      text: "iJooz以創新自動售賣機革新鮮榨果汁行業",
      source: "南華早報"
    },
    {
      text: "健康飲品的未來：iJooz智能售賣解決方案",
      source: "香港經濟日報"
    },
    {
      text: "全港24小時提供新鮮橙汁",
      source: "英文虎報"
    }
  ],
  // Testimonials section
  testimonialsTitle: "顧客評價",
  testimonials: [
    {
      name: "王小明",
      role: "健身愛好者",
      text: "在健身房24小時都能喝到新鮮橙汁真是太棒了！這是運動後最完美的補充。"
    },
    {
      name: "陳大文",
      role: "辦公室經理",
      text: "我們的員工都很喜歡辦公室裡的iJooz機。這是含糖飲料的健康替代品。"
    },
    {
      name: "李志強",
      role: "商場營運總監",
      text: "iJooz機是我們美食廣場的絕佳補充。顧客很感激有這個健康的選擇。"
    }
  ],
  // Gallery section
  galleryTitle: "產品圖庫",
  galleryImageAlts: [
    "現代商場中的iJooz自動售賣機",
    "新鮮橙子榨汁特寫",
    "顧客在iJooz機使用非接觸式支付",
    "iJooz機的時尚設計和界面",
    "新鮮橙汁注入杯中",
    "黃金地段的多台iJooz機"
  ],
  // Features section
  featuresTitle: "先進科技",
  hardwareTitle: "智能硬件",
  hardwareDesc: "我們的自動售賣機配備最先進的組件，包括精密榨汁系統、溫度控制儲存和自動清潔機制。",
  softwareTitle: "智能軟件",
  softwareDesc: "採用雲端管理系統，具備實時監控、自動庫存追蹤和智能維護提醒功能，確保最佳性能。",
  // Supply Chain section
  supplyCommitmentTitle: "我們的承諾",
  orangeGroveAlt: "我們採購橙子的果園",
  supplySection: {
    title: "可持續供應鏈",
    description: "我們直接與認證橙園合作，確保最高品質的水果，同時維持可持續發展實踐。",
    features: [
      {
        icon: "truck",
        text: "直接從農場到機器的配送"
      },
      {
        icon: "leaf",
        text: "可持續種植的橙子"
      },
      {
        icon: "shieldCheck",
        text: "每個環節的品質保證"
      }
    ]
  },
  recycleSection: {
    title: "環保營運",
    description: "我們對可持續發展的承諾延伸至營運的每個方面，從採購到廢物管理。",
    features: [
      {
        icon: "recycle",
        text: "100%可回收包裝"
      },
      {
        icon: "leaf",
        text: "最小環境影響"
      },
      {
        icon: "shieldCheck",
        text: "零廢物倡議"
      }
    ]
  },
  footer: {
    about: {
      title: "關於iJooz",
      description: "iJooz正在通過智能售賣機革新鮮榨果汁行業，隨時提供優質橙汁。"
    },
    contact: {
      title: "聯絡我們",
      email: "ijoozhk@gmail.com",
      phone: "+852 5407 6026"
    },
    social: {
      title: "關注我們",
      facebook: "iJooz Facebook專頁",
      twitter: "iJooz Twitter帳號",
      instagram: "iJooz Instagram帳號"
    },
    newsletter: {
      title: "訂閱通訊",
      placeholder: "輸入您的電郵",
      button: "訂閱",
      description: "獲取我們的最新消息和優惠"
    },
    copyright: " 2025 iJooz. 版權所有。"
  },
  vendingMachineTitle: "智能果汁售賣機",
  vendingMachineFeatures: [
    "即時鮮榨橙汁",
    "非接觸式支付選項",
    "實時監控系統",
    "溫度控制儲存",
    "自動清潔系統"
  ],
  // Contact page
  contact: {
    pageTitle: "聯絡我們",
    formTitle: "與我們聯繫",
    selectEnquiry: "選擇查詢類型",
    locationPartnership: "場地合作",
    businessPartnership: "商業合作",
    generalEnquiry: "一般查詢",
    name: "姓名",
    namePlaceholder: "請輸入姓名",
    email: "電郵",
    emailPlaceholder: "請輸入電郵地址",
    phone: "電話",
    phonePlaceholder: "請輸入電話號碼",
    location: "建議地點",
    locationPlaceholder: "請輸入建議地點地址",
    message: "訊息",
    messagePlaceholder: "請告訴我們更多關於您的查詢",
    submit: "提交",
    locationTitle: "場地合作",
    locationDescription: "加入我們遍佈香港的優質地點網絡。我們正在尋找人流密集的地點放置創新的橙汁自動販賣機。",
    locationBenefits: [
      "零設置成本",
      "定期維護和補貨",
      "被動收入機會",
      "增加人流",
      "24/7 技術支援"
    ],
    businessTitle: "商業合作",
    businessDescription: "探索與iJooz香港的商業機會。我們開放各種合作模式，以擴大我們在市場的影響力。",
    businessBenefits: [
      "成熟的商業模式",
      "技術和運營支持",
      "市場營銷合作",
      "靈活的合作條款",
      "不斷增長的市場份額"
    ]
  },
  // ... rest of the Chinese translations
} as const;

export const translations: TranslationType = {
  en,
  zh
}
