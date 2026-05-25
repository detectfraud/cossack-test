/* =============================================
   КОЗАЦЬКИЙ СЕРІАЛ — main.js
   ============================================= */

const POST_CONFIG = {
  likes:    "106 тис.",
  comments: "2 тис.",
  shares:   "16 тис.",
  author:   "Козак-Веселун",
  date:     "21 травня"
};

const I18N = {
  uk: {
    html_lang:      "uk",
    title:          "Козацький серіал",
    hero:           "Козацький серіал",
    sub:            "Відео, яке зібрало мільйони переглядів в Facebook, стало початком серії мемів про козаків.",
    before_video:   "Перша серія, з якої все почалося 👇",
    donate_heading: "❤️ Підтримати серіал",
    donate_text:    "Ми створюємо цей серіал власним коштом.\nAI-сервіси, генерація сцен, монтаж та створення нових серій потребують ресурсів.\nЯкщо тобі подобається цей проєкт — підтримай його розвиток ❤️",
    donate_btn:     "Підтримати серіал",
    ads_heading:    "📢 Монетизація",
    ads_text:       "Реклама допомагає випускати нові серії та підтримувати проєкт.\nДякуємо за підтримку ❤️",
    next:           "Нові серії вже готуються 👀",
    post_text:      "Поширюйте цей ролик по всьому світу.\n«Ви навіть не уявляєте, як цей короткий ролик розхитує фундамент \"імперії зла\". Кожен ваш лайк, поширення чи коментар — навіть жовчний вигук ворога — це та сама крапля, що точить їхнє гниле корито, коли воно переповниться, то піде на дно так само впевнено й безславно, як їхній флагман \"Москва\". Ваша активність — це зброя, що наближає фінальне занурення»",
    thanks_title:   "Дякуємо! ❤️",
    thanks_desc:    "Рекламний донат зараховано.",
    thanks_invite:  "Запрошуємо завтра о:",
    adblock_lines:  [
      "⚠️ Схоже, у вас увімкнений блокувальник реклами.",
      "Ми створюємо цей серіал <strong>власним коштом</strong>.",
      "Реклама допомагає оплачувати AI-сервіси, монтаж та випуск нових серій.",
      "Будь ласка, додайте сайт у винятки AdBlock або підтримайте проєкт донатом ❤️"
    ],
    adblock_sticky: "⚠️ Будь ласка, додайте сайт у винятки AdBlock або підтримайте проєкт донатом ❤️",
  },
  en: {
    html_lang:      "en",
    title:          "The Viral Cossack Series",
    hero:           "The Viral Cossack Series",
    sub:            "The video, which garnered millions of views on Facebook, was the start of a series of memes about the Cossacks.",
    before_video:   "The first episode that started it all 👇",
    donate_heading: "❤️ Support the Series",
    donate_text:    "This series is created independently and funded by its audience.\nAI tools, scene generation, editing, and production all require resources.\nIf you enjoy this project — support future episodes ❤️",
    donate_btn:     "Support the Series",
    ads_heading:    "📢 Advertising",
    ads_text:       "Advertising helps fund new episodes and keeps the project alive.\nThank you for your support ❤️",
    next:           "More episodes are coming soon 👀",
    post_text:      "Share this video all over the world.\n«You can't even imagine how this short video shakes the foundation of the \"empire of evil\". Every like, share, or comment — even an angry reaction from the enemy — is a drop that wears down their rotten trough. When it overflows, it will sink just as surely as their flagship \"Moskva\". Your activity is a weapon that hastens the final plunge»",
    thanks_title:   "Thanks! ❤️",
    thanks_desc:    "Ad donation received.",
    thanks_invite:  "Welcome tomorrow at:",
    adblock_lines:  [
      "⚠️ It looks like you're using an ad blocker.",
      "This series is created <strong>independently</strong> and funded through ads and community support.",
      "Please consider disabling AdBlock for this site",
      "or supporting the project with a donation ❤️"
    ],
    adblock_sticky: "⚠️ Please consider disabling AdBlock for this site or supporting the project with a donation ❤️",
  }
};

window._isAdblockDetected = false;
const keyTimeHash = "u_data_ts";      
const keyStringHash = "u_data_str"; 

function maskData(value) { return btoa("czk_" + value + "_czk"); }
function unmaskData(maskedValue) {
  if (!maskedValue) return '';
  try {
    const decoded = atob(maskedValue);
    return decoded.substring(4, decoded.length - 4);
  } catch (e) { return ''; }
}

// ADBLOCK DETECTOR
(function () {
  const isDebug = window.location.hash === "#test";
  const isBoss  = localStorage.getItem('iamtheboss') === 'true';
  if (isDebug || isBoss) return;

  const showAdblockMessage = () => {
    window._isAdblockDetected = true;
    const lang = window._currentLang || 'uk';
    const t    = I18N[lang] || I18N['uk'];
    const lines = t.adblock_lines.map(l => `<p>${l}</p>`).join('');
    document.querySelectorAll('.ad').forEach(el => { el.innerHTML = `<div class="adblock-msg">${lines}</div>`; });
  };

  const checkAdblock = () => {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-unit text-ad';
    bait.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
    document.body.appendChild(bait);
    setTimeout(() => {
      const s = window.getComputedStyle(bait);
      const blocked = bait.offsetHeight === 0 || bait.offsetWidth === 0 || s.display === 'none' || s.visibility === 'hidden';
      bait.remove();
      if (blocked) showAdblockMessage();
    }, 300);
  };
  if (document.readyState === 'complete') { checkAdblock(); } else { window.addEventListener('load', checkAdblock); }
})();

// i18n РЕНДЕР
function setLang(lang) {
  const t = I18N[lang];
  if (!t) return;

  localStorage.setItem('lang', lang);
  document.documentElement.lang = t.html_lang;
  document.title = t.title;

  document.getElementById('js-hero').textContent           = t.hero;
  document.getElementById('js-sub').textContent            = t.sub;
  document.getElementById('js-before-video').textContent   = t.before_video;
  document.getElementById('js-post-text').textContent      = t.post_text;
  document.getElementById('js-donate-heading').textContent = t.donate_heading;
  document.getElementById('js-donate-text').textContent    = t.donate_text;
  document.getElementById('js-donate-btn').textContent     = '💰 ' + t.donate_btn;
  document.getElementById('js-ads-heading').textContent    = t.ads_heading;
  document.getElementById('js-ads-text').textContent       = t.ads_text;
  document.getElementById('js-next').textContent           = t.next;
  
  document.querySelectorAll('.js-thanks-title').forEach(el => el.textContent = t.thanks_title);
  document.querySelectorAll('.js-thanks-desc').forEach(el => el.textContent = t.thanks_desc);
  document.querySelectorAll('.js-thanks-invite').forEach(el => el.textContent = t.thanks_invite);

  document.getElementById('js-author-name').textContent = POST_CONFIG.author;
  document.getElementById('js-post-date').textContent   = POST_CONFIG.date;
  document.getElementById('js-likes').textContent       = POST_CONFIG.likes;
  document.getElementById('js-comments').textContent    = POST_CONFIG.comments;
  document.getElementById('js-shares').textContent      = POST_CONFIG.shares;

  document.getElementById('btn-uk').classList.toggle('active', lang === 'uk');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  window._currentLang = lang;

  // ПЕРЕВІРКА ХОЛДУ ТА СТАНУ СКЛА
  const rawSavedTime = localStorage.getItem(keyTimeHash);
  const taskSavedTime = unmaskData(rawSavedTime);
  const now = new Date().getTime();

  const glassDesktop = document.getElementById('js-glass-desktop');
  const glassMobile = document.getElementById('js-glass-mobile');

  if (taskSavedTime && now < parseInt(taskSavedTime)) {
    const savedTimeString = unmaskData(localStorage.getItem(keyStringHash));
    document.querySelectorAll('.js-tomorrow-time-thanks').forEach(el => el.textContent = savedTimeString);
    
    if (glassDesktop) glassDesktop.classList.add('impenetrable');
    if (glassMobile) glassMobile.classList.add('impenetrable');
  } else {
    if (glassDesktop) glassDesktop.classList.remove('impenetrable');
    if (glassMobile) glassMobile.classList.remove('impenetrable');
  }
}

// =============================================
// ЛОГІКА СКЛА ТА ПЕРЕХОПЛЕННЯ КЛІКІВ REKLAMA
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  let isUserClickedAd = false;
  let blurTimer = null;

  function lockSystemForDay() {
    const currentTime = new Date();
    // Округляємо час повернення до найближчої повної години (+24 години наперед)
    const unlockTimeObj = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000));
    
    // Округлення хвилин: якщо більше 30 — додаємо годину, хвилини скидаємо в нуль
    if (unlockTimeObj.getMinutes() >= 30) {
      unlockTimeObj.setHours(unlockTimeObj.getHours() + 1);
    }
    unlockTimeObj.setMinutes(0);
    unlockTimeObj.setSeconds(0);

    const hours = String(unlockTimeObj.getHours()).padStart(2, '0');
    const timeString = `${hours}:00`;

    localStorage.setItem(keyTimeHash, maskData(unlockTimeObj.getTime().toString()));
    localStorage.setItem(keyStringHash, maskData(timeString));

    setLang(window._currentLang || 'uk');
  }

  // СЛУХАЄМО ВСІ КЛІКИ НА СТОРІНЦІ
  document.addEventListener('click', (e) => {
    const glassDesktop = document.getElementById('js-glass-desktop');
    const glassMobile = document.getElementById('js-glass-mobile');

    // Якщо холд активний і користувач клацає по стеклах — блокуємо подію намертво
    if ((glassDesktop && glassDesktop.classList.contains('impenetrable') && glassDesktop.contains(e.target)) ||
        (glassMobile && glassMobile.classList.contains('impenetrable') && glassMobile.contains(e.target))) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    // Якщо холд НЕ активний, перевіряємо чи клік прийшов у зону реклами (сайдбари або верхні пуші)
    const isClickInAdZone = e.target.closest('.sidebar') || e.target.closest('.ad') || e.clientY <= 155;
    
    if (isClickInAdZone) {
      isUserClickedAd = true; // Фіксуємо намір заробити донат
    }
  }, true);

  // ВТРАТА ФОКУСУ — Юзер полетів на вкладку реклами Monetag
  window.addEventListener('blur', () => {
    if (isUserClickedAd) {
      blurTimer = setTimeout(() => {
        window._isRewardApproved = true; 
      }, 2500); // 2.5 секунди утримання на сторінці реклами
    }
  });

  // ПОВЕРНЕННЯ ФОКУСУ — Юзер повернувся назад
  window.addEventListener('focus', () => {
    if (isUserClickedAd) {
      clearTimeout(blurTimer);
      
      if (window._isRewardApproved) {
        lockSystemForDay(); // Вмикаємо скло на 24 години, округляємо час
      }
      
      isUserClickedAd = false;
      window._isRewardApproved = false;
    }
  });
});

// Перемикачі мов
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-uk').addEventListener('click', () => setLang('uk'));
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
});

// Старт
(function () {
  const saved    = localStorage.getItem('lang');
  const urlLang  = new URLSearchParams(window.location.search).get('lng');
  const detected = saved || urlLang || 'uk';
  setLang(I18N[detected] ? detected : 'uk');
})();
