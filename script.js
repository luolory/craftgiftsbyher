/*
 * Global JavaScript for EmpowerHer Crafts website.
 *
 * This file defines translation data and helper functions to
 * implement bilingual support, navigation interactivity, product
 * filtering, and simple data-driven components such as charts and
 * forms.  To add new text to the site, assign a data‑i18n
 * attribute to an element and create corresponding keys in the
 * translations object below.  The script reads the user’s chosen
 * language from localStorage so that preference persists across
 * pages.
 */

// Translation strings for English and Chinese.  Only include keys
// actually used in the markup; unused keys will be ignored.
const translations = {
  en: {
    siteName: 'EmpowerHer Crafts',
    // Updated hero tagline to better reflect heritage crafts mission
    tagline: 'Heritage crafts: tradition and hope',
    // Updated call‑to‑action labels for clarity
    buyNow: 'Explore gifts',
    supportThem: 'Support women',
    navHome: 'Home',
    navShop: 'Shop',
    navAbout: 'About Us',
    navImpact: 'Impact',
    navEmpower: 'EmpowerHer',
    navContact: 'Contact',
    navAccount: 'My Account',
    featuredTitle: 'Featured Products',
    storiesTitle: 'Our Stories',
    testimonialsTitle: 'What People Say',
    priceLabel: 'Price:',
    filterCategory: 'Category',
    filterUse: 'Use',
    filterMaxPrice: 'Max price',
    noProducts: 'No products match your criteria.',
    detailsTitle: 'Details',
    craftTechnique: 'Craft technique',
    donationMessage: 'With each purchase you donate',
    currencyUnit: 'USD',
    // Label for product detail link instead of purchase
    viewDetails: 'Learn more',
    impactTitle: 'Our Impact',
    impactSubtitle: 'Measuring the change we make together',
    peopleSupported: 'People Supported',
    itemsSold: 'Items Sold',
    regionsCovered: 'Regions Reached',
    donateButton: 'Donate now',
    empowerTitle: 'Empowerment & Training',
    trainingsSubtitle: 'Upcoming workshops and programmes',
    contactTitle: 'Get in touch',
    sendMessage: 'Send Message',
    accountTitle: 'My Account',
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    message: 'Message'
    , aboutMissionTitle: 'Our Mission'
    , aboutMissionText: 'The Weaving Love Project is a public-interest initiative founded by Lory Luo, using intangible heritage crafts to empower disadvantaged women. We partner with the Chaoxi Charity Center to sell handcrafted gifts made by disadvantaged women, and reinvest profits into women\u2019s entrepreneurship training programmes. Our mission is to inspire Generation Z through stories of craftsmanship, while advancing sustainable philanthropy, female entrepreneurship and the preservation of traditional culture.'
    , aboutChaoxiTitle: 'Chaoxi Charity Center'
    , aboutChaoxiText: 'Chaoxi Charity Center provides training and resources for women artisans across multiple provinces. With the support of Chaoxi, women from low income, disabled, unemployed and other disadvantaged groups learn yarn weaving craft skills; they not only gain employment but also offer high quality handmade products to society. Let us weave warmth with our hands and spread love together.'
    , aboutStoryTitle: 'Stories Behind the Crafts'
    , aboutStoryText: 'Meet the artisans who bring our products to life.'
    , impactPlanTitle: 'Buy One Donate One'
    , impactPlanText: 'For every item purchased we donate a portion of the proceeds to train new women artisans.'
    , impactDonationTitle: 'Donation Flow'
    , impactDonationText: '10% of product price goes toward training programmes and resources.'
    , impactTrainTitle: 'Train a Craftswoman'
    , impactTrainText: 'Your contribution helps us fund classes and materials for women entering the programme.'
    , empowerIntro: 'Through our EmpowerHer programme, founder Lory encourages women entrepreneurs by linking traditional crafts with new media. Join our workshops and unlock your potential.'
  },
  zh: {
    siteName: '织爱计划',
    // 更新主视觉标语以突出非遗手作和传承希望
    tagline: '非遗手作：传承与希望',
    // 更新行动按钮文案以更贴合购买和支持女性
    buyNow: '选购礼品',
    supportThem: '支持女性',
    navHome: '首页',
    navShop: '礼品商店',
    navAbout: '品牌理念',
    navImpact: '公益参与',
    navEmpower: '创业支持',
    navContact: '联系我们',
    navAccount: '我的账户',
    featuredTitle: '精选产品',
    storiesTitle: '公益故事',
    testimonialsTitle: '用户好评',
    priceLabel: '价格：',
    filterCategory: '分类',
    filterUse: '用途',
    filterMaxPrice: '最高价格',
    noProducts: '没有符合条件的商品。',
    detailsTitle: '产品详情',
    craftTechnique: '工艺说明',
    donationMessage: '每件商品购买将捐赠',
    currencyUnit: '元',
    // Label for product detail link instead of purchase
    viewDetails: '查看详情',
    impactTitle: '我们的影响力',
    impactSubtitle: '衡量我们共同创造的改变',
    peopleSupported: '受助人数',
    itemsSold: '售出商品',
    regionsCovered: '覆盖地区',
    donateButton: '立即捐助',
    empowerTitle: '赋能与培训',
    trainingsSubtitle: '即将到来的课程和项目',
    contactTitle: '联系我们',
    sendMessage: '发送信息',
    accountTitle: '个人中心',
    login: '登录',
    register: '注册',
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    name: '姓名',
    message: '留言'
    , aboutMissionTitle: '我们的使命'
    , aboutMissionText: '织爱计划是由Lory Luo创立的公益项目，通过非遗手工艺为弱势女性群体赋能。我们与潮汐公益中心合作售卖弱势女性群体制作的手工礼品，并将利润回馈于女性创业培训项目。我们的使命是用匠心故事激励Z世代，推动可持续公益、女性创业精神和传统文化传承。'
    , aboutChaoxiTitle: '潮汐公益中心'
    , aboutChaoxiText: '潮汐公益中心为妇女匠人提供培训和资源，覆盖多个省份。在潮汐中心的支持下，低收入、残障、失业等女性群体通过学习毛线编织手工技艺，不仅实现了就业，还为社会提供了高品质的手工艺品。让我们一起用双手编织温暖，传递爱心！'
    , aboutStoryTitle: '非遗技艺背后的她们'
    , aboutStoryText: '了解那些赋予产品生命的手艺人。'
    , impactPlanTitle: '买一捐一'
    , impactPlanText: '每售出一件产品，我们都将部分收益用于培训新的女性匠人。'
    , impactDonationTitle: '资金流向'
    , impactDonationText: '商品售价的10%将用于培训项目和资源。'
    , impactTrainTitle: '资助一位手艺人'
    , impactTrainText: '你的捐助将帮助我们为参与项目的女性提供课程和材料。'
    , empowerIntro: '通过我们的创业支持项目，创始人Lory鼓励女性将传统技艺与新媒体结合，开启创业之路。欢迎参加我们的课程，释放你的潜力。'
  }
};

/**
 * Get the current language selection.  Defaults to Chinese (zh) if no
 * preference is stored.  Values are persisted in localStorage.
 */
function getCurrentLang() {
  return localStorage.getItem('lang') || 'zh';
}

/**
 * Set the current language and refresh the UI accordingly.  The
 * selected value is stored so that subsequent visits use the same
 * language.
 * @param {string} lang Language code, e.g. 'en' or 'zh'.
 */
function setLang(lang) {
  localStorage.setItem('lang', lang);
  updateLang();
}

/**
 * Update text content of elements with a data‑i18n attribute.  This
 * function reads the current language and looks up the appropriate
 * translation in the translations object.  Elements without a
 * matching translation remain unchanged.
 */
function updateLang() {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;
  // update active state on language buttons
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // update nav highlight
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text) {
      el.textContent = text;
    }
  });
  // update dynamic content if needed
  if (typeof refreshDynamicContent === 'function') {
    refreshDynamicContent();
  }
}

/* Sample product catalogue.  Each product contains both Chinese and
 * English fields.  For a real site these would be loaded from a
 * backend or CMS. */
const products = [
  {
    id: 1,
    category: 'Accessory',
    uses: ['festival', 'business'],
    price: 35,
    // Updated image to Tianjin‑style yarn weaving disc (replaced with new weaving image)
    image: 'assets/weaving2.jpg',
    name: {
      en: 'Tianjin Yarn Weaving',
      zh: '津派毛线手工编织'
    },
    // New description emphasising Haihe culture and intangible heritage
    description: {
      en: 'Stitches carry Haihe’s sentiment — Tianjin‑style yarn weaving blends northern folk art and port city spirit. Each stitch carries life’s wisdom. With heritage craftsmanship and heartfelt handiwork, it weaves warmth and conveys blessings.',
      zh: '针尖上的海河情\n——津派毛线编织\n津 派 编 织 ， 融 北 方 民 艺 与 港 城 气 韵 ，\n一 针 一 线 承 载 生 活 智 慧 ，\n非 遗 传 承 ， 匠 心 手 作 ，\n织 就 温 暖 ， 寄 寓 美 好 。'
    },
    craft: {
      en: 'Tianjin artisans weave yarn into intricate patterns, blending folk art with port city spirit. Every stitch embodies life’s wisdom.',
      zh: '津派匠人将毛线编织成精美图案，融汇民间艺术与港城气韵，一针一线体现生活智慧。'
    },
    story: {
      en: 'Crafted by women in Tianjin using heritage weaving techniques, these pieces carry warmth and blessings.',
      zh: '由天津女性运用非遗编织技艺制作，每件作品寄托着温暖与祝福。'
    },
    donation: 6
  },
  {
    id: 2,
    category: 'Accessory',
    uses: ['business', 'gift'],
    price: 60,
    // Updated image to high‑quality cloisonné brooch (replaced with new cloisonné photo)
    image: 'assets/cloisonne2.jpg',
    name: {
      en: 'Cloisonné Enamel Brooch',
      zh: '掐丝珐琅胸针'
    },
    description: {
      en: 'A splendid dance of metal and colour — cloisonné enamel brooch. Cloisonné, formally named copper‑body filigree enamel and also known as inlaid enamel, is an ancient Chinese craft with deep cultural heritage.',
      zh: '金属与色彩的华丽舞蹈\n——掐丝珐琅胸针\n掐 丝 珐 琅 ， 正 名 为 铜 胎 掐 丝 珐 琅 ，\n俗 名 珐 蓝 ， 又 称 嵌 珐 琅 ， 是 一 种\n具 有 悠 久 历 史 和 深 厚 文 化 底 蕴 的\n中 国 传 统 工 艺 品 。'
    },
    craft: {
      en: 'Metal wires are bent into intricate patterns and filled with colourful enamel before firing, creating a dazzling finish.',
      zh: '金属丝掐制成精美图案，填入五彩釉料，经高温烧制呈现绚丽光彩。'
    },
    story: {
      en: 'These brooches are handmade by women artisans who preserve cloisonné techniques passed down for centuries.',
      zh: '这些胸针由传承百年掐丝珐琅技艺的女匠人手工制作。'
    },
    donation: 8
  },
  {
    id: 3,
    category: 'Decor',
    uses: ['gift', 'home'],
    price: 45,
    // Updated image to thread‑wrapped flower (Chan Hua) (replaced with new Chan Hua image)
    image: 'assets/chanflower.jpg',
    name: {
      en: 'Thread‑Wrapped Flower',
      zh: '非遗技法缠花'
    },
    description: {
      en: 'The flamboyant bloom of silk threads — intangible heritage threading flowers. Chan Hua flourished in the Qing dynasty: a cardboard base is used, silk threads are wound and fixed with copper wire. Recognised as national intangible cultural heritage, its exquisite patterns symbolise a bright future, abundance and blessings.',
      zh: '丝线的绚烂绽放\n——非遗技法缠花\n缠 花 盛 于 清 代 ， 以 纸 板 作 为 坯 架 ，\n丝 线 缠 绕 ， 铜 丝 固 定 ， 是 国 家 非\n物 质 文 化 遗 产 。 非 遗 缠 花 的 精 美\n图 案 寓 示 着 前 途 似 锦 、 吉 庆 有 余 、\n有 福 有 禄 等 含 义 。'
    },
    craft: {
      en: 'Silk threads are wound around a cardboard form and fixed with copper wire, forming elaborate floral patterns.',
      zh: '以纸板为坯架，丝线缠绕并用铜丝固定，形成精美花样。'
    },
    story: {
      en: 'Modern women artisans revive the traditional art of Chan Hua to convey wishes of hope and prosperity.',
      zh: '现代女性匠人重现缠花传统技艺，寓意希望与繁荣。'
    },
    donation: 5
  },
  {
    id: 4,
    category: 'Fan',
    uses: ['festival', 'decor'],
    price: 88,
    // Updated image to user‑provided Jiangnan style heritage fan (tuanshan)
    image: 'assets/tuanshan.jpg',
    name: {
      en: 'Heritage Hand Fan',
      zh: '非遗团扇'
    },
    description: {
      // Updated description to poetic lines about the Jiangnan breeze
      en: 'Jiangnan breeze swaying in your palm — intangible heritage fan. This light fan gathers the essence of bamboo, wood and silk; each face depicts poetic elegance. With cultural heritage and exquisite craftsmanship, it sways gently in the breeze, symbolising reunion and harmony.',
      zh: '掌中摇曳江南风\n——非遗团扇\n团 扇 轻 盈 ， 聚 竹 木 绢 丝 之 灵 秀 ，\n一 柄 一 面 绘 尽 诗 书 雅 意 ，\n非 遗 风 骨 ， 匠 心 独 运 ，\n摇 曳 清 风 ， 寄 寓 团 圆 。'
    },
    craft: {
      en: 'Artisans craft delicate fans by combining bamboo, wood and silk fabrics using intangible heritage techniques.',
      zh: '匠人以竹骨、木柄和绢丝结合，运用非遗工艺制作精美团扇。'
    },
    story: {
      en: 'Created by women artisans who preserve the heritage of traditional fan‑making, these fans carry wishes of reunion.',
      zh: '由女匠人传承传统制扇技艺制成的团扇，承载着团圆的祝福。'
    },
    donation: 7
  }
];

// Stories for the home page (short philanthropic narratives).  These
// mirror the goal of sharing artisans’ experiences【407956085884721†L27-L30】.
const stories = [
  {
    title: { en: 'From Survivor to Artisan', zh: '从受助者到匠人' },
    text: {
      en: 'Libing, once a victim of poverty, learned traditional embroidery and now teaches other women.',
      zh: '原本深陷贫困的丽冰通过学习传统刺绣改变命运，如今她还教授其他女性。'
    },
    image: 'assets/craft2.avif'
  },
  {
    title: { en: 'Weaving a Future', zh: '织出新生活' },
    text: {
      en: 'Xiaohong’s weaving cooperative has created jobs for dozens of rural mothers.',
      zh: '晓红成立的编织合作社为数十位农村妈妈提供了工作机会。'
    },
    image: 'assets/craft3.avif'
  }
];

// Testimonials for the home page.
const testimonials = [
  {
    name: 'Emily',
    rating: 5,
    text: {
      en: 'The craftsmanship is exquisite and it feels good to support a cause.',
      zh: '手工艺品精美绝伦，而且支持公益让人倍感温暖。'
    }
  },
  {
    name: '张女士',
    rating: 4,
    text: {
      en: 'I bought a brooch for my mother and she loved the story behind it.',
      zh: '我为母亲买了胸针，她很喜欢背后的故事。'
    }
  }
];

// Impact statistics for the Impact page.  These numbers could be
// fetched from a backend in a real application.  Here we provide
// sample values.
const impactStats = {
  peopleSupported: 320,
  itemsSold: 850,
  regionsCovered: 15
};

// Training programmes for the Empower page.
const trainings = [
  {
    title: { en: 'Embroidery Basics Workshop', zh: '刺绣基础课' },
    date: '2025-08-15',
    description: {
      en: 'Learn essential stitches and patterns in a 3‑hour introductory class.',
      zh: '在为期三小时的入门课程中学习基本针法和花样。'
    }
  },
  {
    title: { en: 'Social Media for Crafts', zh: '手艺人社媒推广' },
    date: '2025-09-05',
    description: {
      en: 'Discover how to promote your craft on Douyin and TikTok.',
      zh: '学习如何在抖音和TikTok上传播你的手艺。'
    }
  },
  {
    title: { en: 'Advanced Woodworking', zh: '木工进阶课程' },
    date: '2025-10-01',
    description: {
      en: 'Deepen your skills with fine carving techniques.',
      zh: '通过精细雕刻技法提升你的木工技能。'
    }
  }
];

/**
 * Populate the featured products section on the home page.  This
 * function selects the first few items from the products array and
 * renders them as cards.  The number of items shown can be adjusted.
 */
function populateFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;
  container.innerHTML = '';
  const lang = getCurrentLang();
  products.slice(0, 3).forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name[lang]}">
      <div class="card-body">
        <h3>${product.name[lang]}</h3>
        <p>${product.description[lang]}</p>
        <!-- Detail link removed as products have no dedicated page -->
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Populate the stories section on the home page.
 */
function populateStories() {
  const container = document.getElementById('story-grid');
  if (!container) return;
  container.innerHTML = '';
  const lang = getCurrentLang();
  stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <img src="${story.image}" alt="${story.title[lang]}">
      <div class="card-body">
        <h4>${story.title[lang]}</h4>
        <p>${story.text[lang]}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Populate testimonials on the home page.
 */
function populateTestimonials() {
  const container = document.getElementById('testimonial-list');
  if (!container) return;
  container.innerHTML = '';
  const lang = getCurrentLang();
  testimonials.forEach(item => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
    const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
    div.innerHTML = `
      <div class="stars">${stars}</div>
      <p>${item.text[lang]}</p>
      <small>— ${item.name}</small>
    `;
    container.appendChild(div);
  });
}

/**
 * Render the product list on the shop page with current filters.
 */
function renderProducts() {
  const container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = '';
  const lang = getCurrentLang();
  // collect filter values
  const categoryFilter = document.getElementById('filter-category')?.value;
  const useFilter = Array.from(document.querySelectorAll('input[name="filter-use"]:checked')).map(el => el.value);
  const maxPrice = parseFloat(document.getElementById('filter-price').value);
  let filtered = products.filter(p => {
    const categoryOk = !categoryFilter || categoryFilter === 'all' || p.category === categoryFilter;
    const useOk = useFilter.length === 0 || useFilter.some(u => p.uses.includes(u));
    const priceOk = isNaN(maxPrice) || p.price <= maxPrice;
    return categoryOk && useOk && priceOk;
  });
  if (filtered.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = translations[lang].noProducts;
    container.appendChild(msg);
    return;
  }
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name[lang]}">
      <div class="card-body">
        <h3>${product.name[lang]}</h3>
        <p>${product.description[lang]}</p>
        <!-- Detail link removed -->
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Render filter controls on the shop page.
 */
function renderFilters() {
  const categorySelect = document.getElementById('filter-category');
  const useContainer = document.getElementById('filter-use-container');
  const priceInput = document.getElementById('filter-price');
  if (!categorySelect || !useContainer) return;
  // categories
  const categories = Array.from(new Set(products.map(p => p.category)));
  categorySelect.innerHTML = `<option value="all">All</option>` + categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  // uses
  const uses = Array.from(new Set(products.flatMap(p => p.uses)));
  useContainer.innerHTML = uses.map(u => `
    <label><input type="checkbox" name="filter-use" value="${u}"> ${u.charAt(0).toUpperCase() + u.slice(1)}</label>
  `).join(' ');
}

/**
 * Attach listeners to filters to re-render product list when they
 * change.
 */
function addFilterListeners() {
  const categorySelect = document.getElementById('filter-category');
  const priceInput = document.getElementById('filter-price');
  const useContainer = document.getElementById('filter-use-container');
  if (categorySelect) categorySelect.addEventListener('change', renderProducts);
  if (priceInput) priceInput.addEventListener('input', renderProducts);
  if (useContainer) useContainer.addEventListener('change', renderProducts);
}

/**
 * Render details for a single product on the product page.
 */
function renderProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  const container = document.getElementById('product-details');
  if (!container || !product) return;
  const lang = getCurrentLang();
  container.innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name[lang]}" style="height:300px; object-fit:cover;">
      <div class="card-body">
        <h2>${product.name[lang]}</h2>
        <p>${product.description[lang]}</p>
        <h3>${translations[lang].craftTechnique}</h3>
        <p>${product.craft[lang]}</p>
        <h3>${translations[lang].donationMessage} ${product.donation} ${translations[lang].currencyUnit}</h3>
        <p>${product.story[lang]}</p>
    <!-- Price and purchase button removed as per updated design -->
      </div>
    </div>
  `;
}

/**
 * Render achievements statistics on the about page.
 */
function renderAchievements() {
  const container = document.getElementById('achievements');
  if (!container) return;
  container.innerHTML = '';
  // Example achievements, could be dynamic in a real app
  const items = [
    { value: 10, labelEn: 'Years Empowering Women', labelZh: '持续赋能年数' },
    { value: 50, labelEn: 'Artisans Supported', labelZh: '支持匠人数' },
    { value: 5, labelEn: 'Awards Received', labelZh: '获得奖项' }
  ];
  const lang = getCurrentLang();
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'achievement';
    card.innerHTML = `
      <h3>${item.value}</h3>
      <p>${lang === 'en' ? item.labelEn : item.labelZh}</p>
    `;
    container.appendChild(card);
  });
}

/**
 * Render impact statistics on the impact page and update values based
 * on the translation.  This also triggers the chart rendering.
 */
function renderImpactStats() {
  const peopleEl = document.getElementById('people-supported');
  const itemsEl = document.getElementById('items-sold');
  const regionsEl = document.getElementById('regions-covered');
  const lang = getCurrentLang();
  if (peopleEl) {
    peopleEl.querySelector('h3').textContent = impactStats.peopleSupported;
    peopleEl.querySelector('p').textContent = translations[lang].peopleSupported;
  }
  if (itemsEl) {
    itemsEl.querySelector('h3').textContent = impactStats.itemsSold;
    itemsEl.querySelector('p').textContent = translations[lang].itemsSold;
  }
  if (regionsEl) {
    regionsEl.querySelector('h3').textContent = impactStats.regionsCovered;
    regionsEl.querySelector('p').textContent = translations[lang].regionsCovered;
  }
}

/**
 * Render a bar chart on the impact page using Chart.js.  The
 * categories shown correspond to the three impact metrics and use
 * translated labels.  This function should be called after the
 * translations have been applied.
 */
function renderImpactChart() {
  const canvas = document.getElementById('impact-chart');
  if (!canvas) return;
  const lang = getCurrentLang();
  const ctx = canvas.getContext('2d');
  // Destroy any existing chart to prevent duplication
  if (window.impactChart) {
    window.impactChart.destroy();
  }
  window.impactChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [translations[lang].peopleSupported, translations[lang].itemsSold, translations[lang].regionsCovered],
      datasets: [{
        label: lang === 'en' ? 'Impact Metrics' : '影响指标',
        data: [impactStats.peopleSupported, impactStats.itemsSold, impactStats.regionsCovered],
        backgroundColor: [
          'rgba(239, 168, 128, 0.8)',
          'rgba(168, 191, 160, 0.8)',
          'rgba(252, 232, 227, 0.8)'
        ],
        borderColor: [
          'rgba(239, 168, 128, 1)',
          'rgba(168, 191, 160, 1)',
          'rgba(252, 232, 227, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

/**
 * Render the training programme cards on the Empower page.
 */
function renderTrainings() {
  const container = document.getElementById('training-list');
  if (!container) return;
  container.innerHTML = '';
  const lang = getCurrentLang();
  trainings.forEach(t => {
    const item = document.createElement('div');
    item.className = 'training-item';
    item.innerHTML = `
      <h4>${t.title[lang]}</h4>
      <p>${new Date(t.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>${t.description[lang]}</p>
    `;
    container.appendChild(item);
  });
}

/**
 * This function is called by updateLang() whenever the language
 * changes to refresh dynamic parts of the page, such as product
 * lists, stories, testimonials, impact stats and charts.
 */
function refreshDynamicContent() {
  // home page components
  populateFeaturedProducts();
  populateStories();
  populateTestimonials();
  // shop page
  renderProducts();
  // product page
  renderProductDetails();
  // impact page
  renderImpactStats();
  renderImpactChart();
  // empower page
  renderTrainings();
}

/**
 * Initialise event listeners and page-specific features once the
 * document has loaded.  Listeners include the language toggle,
 * filter controls, and Chart.js initialisation.
 */
document.addEventListener('DOMContentLoaded', () => {
  // attach language toggle buttons
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  // set default language and update translations
  updateLang();
  // render filters if present
  renderFilters();
  addFilterListeners();
  // page-specific rendering
  populateFeaturedProducts();
  populateStories();
  populateTestimonials();
  renderProducts();
  renderProductDetails();
  renderImpactStats();
  renderImpactChart();
  renderTrainings();
});