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
    adblock_lines:  [
      "⚠️ Схоже, у вас увімкнений блокувальник реклами.",
      "Ми створюємо цей серіал <strong>власним коштом</strong>.",
      "Реклама допомагає оплачувати AI-сервіси, монтаж та випуск нових серій.",
      "Будь ласка, додайте сайт у винятки AdBlock або підтримайте проєкт донатом ❤️"
    ],
    adblock_sticky: "⚠️ Будь ласка, додайте сайт у винятки AdBlock або підтримайте проєкт донатом ❤️",
    glass_thanks:   "Дякуємо за допомогу! ❤️",
    glass_sub:      "Ти успішно підтримав козацький серіал рекламним переглядом.",
    glass_invite:   "Запрошуємо о",
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
    adblock_lines:  [
      "⚠️ It looks like you're using an ad blocker.",
      "This series is created <strong>independently</strong> and funded through ads and community support.",
      "Please consider disabling AdBlock for this site",
      "or supporting the project with a donation ❤️"
    ],
    adblock_sticky: "⚠️ Please consider disabling AdBlock for this site or supporting the project with a donation ❤️",
    glass_thanks:   "Thank you for your support! ❤️",
    glass_sub:      "You successfully supported the Cossack series by watching an ad.",
    glass_invite:   "We invite you at",
  }
};

window._isAdblockDetected = false;

// =============================================
// ADBLOCK DETECTOR
// =============================================
(function () {
  const isDebug = window.location.hash === "#test";
  const isBoss  = localStorage.getItem('iamtheboss') === 'true';
  if (isDebug || isBoss) return;

  const showAdblockMessage = () => {
    window._isAdblockDetected = true;
    const lang = window._currentLang || 'uk';
    const t    = I18N[lang] || I18N['uk'];
    const lines = t.adblock_lines.map(l => `<p>${l}</p>`).join('');
    document.querySelectorAll('.ad').forEach(el => {
      el.innerHTML = `<div class="adblock-msg">${lines}</div>`;
    });
    const stickyEl = document.getElementById('js-sticky');
    if (stickyEl) {
      stickyEl.innerHTML = `<div class="adblock-msg adblock-msg--sticky">${t.adblock_sticky}</div>`;
      stickyEl.style.display = 'block';
    }
  };

  const checkAdblock = () => {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-unit text-ad';
    bait.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
    document.body.appendChild(bait);
    setTimeout(() => {
      const s = window.getComputedStyle(bait);
      const blocked = bait.offsetHeight === 0 || bait.offsetWidth === 0 ||
                      s.display === 'none' || s.visibility === 'hidden';
      bait.remove();
      if (blocked) showAdblockMessage();
    }, 300);
  };

  if (document.readyState === 'complete') checkAdblock();
  else window.addEventListener('load', checkAdblock);
})();

// =============================================
// i18n РЕНДЕР
// =============================================
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

  document.getElementById('js-author-name').textContent = POST_CONFIG.author;
  document.getElementById('js-post-date').textContent   = POST_CONFIG.date;
  document.getElementById('js-likes').textContent       = POST_CONFIG.likes;
  document.getElementById('js-comments').textContent    = POST_CONFIG.comments;
  document.getElementById('js-shares').textContent      = POST_CONFIG.shares;

  document.getElementById('btn-uk').classList.toggle('active', lang === 'uk');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  const mobileTitleEl = document.getElementById('js-mobile-title-text');
  if (mobileTitleEl) mobileTitleEl.textContent = t.hero;

  window._currentLang = lang;

  if (window._isAdblockDetected) {
    const lines = t.adblock_lines.map(l => `<p>${l}</p>`).join('');
    document.querySelectorAll('.ad').forEach(el => {
      el.innerHTML = `<div class="adblock-msg">${lines}</div>`;
    });
    const stickyMsg = document.querySelector('#js-sticky .adblock-msg--sticky');
    if (stickyMsg) stickyMsg.textContent = t.adblock_sticky;
  }
}

// =============================================
// u_data_ts — ЗАШИФРОВАНИЙ TIMESTAMP БЛОКУ
// Логіка: 24год + рандом 0..20хв + округлення до 5хв вгору
// Зберігається як XOR-обфускований рядок у localStorage
// =============================================
const U_DATA_KEY    = 'u_data_ts';
const U_DATA_SALT   = 0x4B3F;        // статична сіль XOR
const BLOCK_BASE_MS = 24 * 60 * 60 * 1000;   // 24 год
const BLOCK_RAND_MS = 20 * 60 * 1000;         // макс рандом 20 хв
const ROUND_MS      = 5 * 60 * 1000;          // округлення до 5 хв

function uDataEncode(ts) {
  // XOR кожного 16-бітного слова числа з сіллю → hex рядок
  const n = Math.floor(ts);
  const lo = (n & 0xFFFF) ^ U_DATA_SALT;
  const hi = ((n / 65536) & 0xFFFF) ^ (U_DATA_SALT ^ 0xA5C3);
  return hi.toString(16).padStart(4, '0') + lo.toString(16).padStart(4, '0');
}

function uDataDecode(str) {
  if (!str || str.length < 8) return 0;
  const hi = parseInt(str.slice(0, 4), 16) ^ (U_DATA_SALT ^ 0xA5C3);
  const lo = parseInt(str.slice(4, 8), 16) ^ U_DATA_SALT;
  return hi * 65536 + lo;
}

function uDataSetBlock() {
  const rand    = Math.floor(Math.random() * BLOCK_RAND_MS);
  const raw     = Date.now() + BLOCK_BASE_MS + rand;
  // Округляємо до наступного кратного 5хв
  const rounded = Math.ceil(raw / ROUND_MS) * ROUND_MS;
  localStorage.setItem(U_DATA_KEY, uDataEncode(rounded));
  return rounded;
}

function uDataGetUntil() {
  const encoded = localStorage.getItem(U_DATA_KEY);
  if (!encoded) return 0;
  return uDataDecode(encoded);
}

function uDataIsBlocked() {
  return Date.now() < uDataGetUntil();
}

// Розраховуємо час запрошення з timestamp блоку
// (показуємо час закінчення блоку — "коли можна знову")
function getInviteTimeFromBlock(untilMs) {
  const d = new Date(untilMs);
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

// =============================================
// POPUP GLASS
// =============================================
const GLASS_FOCUS_WAIT_MS = 2500;  // чекаємо 2.5с після втрати фокусу
const GLASS_SHOW_DELAY_MS = 5000;  // показуємо скло через 5с після повернення

const PopupGlass = (() => {
  let glassEl        = null;
  let content1       = null;
  let content2       = null;
  let popupClickDone = false;
  let focusLostAt    = 0;       // timestamp коли сторінка втратила фокус
  let showTimer      = null;
  let isVisible      = false;

  // --- Показати "скло" ---
  function show(withThanks) {
    if (!glassEl) return;
    isVisible = true;
    glassEl.style.display = 'flex';
    glassEl.style.zIndex  = '2147483647'; // підтверджуємо після можливого appendChild

    if (withThanks) {
      const until = uDataGetUntil();
      const timeStr = getInviteTimeFromBlock(until);

      // Оновлюємо i18n тексти
      const lang = window._currentLang || 'uk';
      const t = I18N[lang] || I18N['uk'];

      const h4     = document.getElementById('js-glass-h4');
      const p      = document.getElementById('js-glass-p');
      const label  = document.getElementById('js-glass-invite-label');
      const time   = document.getElementById('js-glass-invite-time');
      if (h4)    h4.textContent    = t.glass_thanks;
      if (p)     p.textContent     = t.glass_sub;
      if (label) label.textContent = t.glass_invite;
      if (time)  time.textContent  = timeStr;

      // Показуємо контент в обох панелях
      if (content1) content1.classList.add('is-active');
      if (content2) {
        // Другу панель заповнюємо тільки часом (стислий варіант)
        content2.innerHTML =
          `<div class="popup-glass-time">` +
          `<span>${t.glass_invite}</span>` +
          `<strong>${timeStr}</strong>` +
          `</div>`;
        content2.classList.add('is-active');
      }
    }

    // Блокування кліків якщо 24год активні
    if (uDataIsBlocked()) {
      glassEl.classList.add('is-blocking');
    } else {
      glassEl.classList.remove('is-blocking');
    }
  }

  // --- Сховати "скло" ---
  function hide() {
    if (!glassEl) return;
    isVisible = false;
    glassEl.style.display = 'none';
  }

  // --- Обробник втрати фокусу ---
  function onBlur() {
    if (!popupClickDone) return;
    clearTimeout(showTimer);
    focusLostAt = Date.now();
  }

  // --- Обробник повернення фокусу ---
  function onFocus() {
    if (!popupClickDone) return;
    // Фокус повернувся — перевіряємо чи сторінка дійсно була відкрита
    // на іншій вкладці достатній час (> GLASS_FOCUS_WAIT_MS)
    const away = Date.now() - focusLostAt;
    if (focusLostAt === 0 || away < GLASS_FOCUS_WAIT_MS) return;

    clearTimeout(showTimer);
    showTimer = setTimeout(() => {
      const until = uDataSetBlock();  // записуємо зашифрований timestamp
      show(true);
    }, GLASS_SHOW_DELAY_MS);
  }

  // --- Ініціалізація ---
  function init() {
    glassEl   = document.getElementById('js-popup-glass');
    content1  = document.getElementById('js-glass-content-1');
    content2  = document.getElementById('js-glass-content-2');

    if (!glassEl) return;

    // Мобільна назва під склом
    if (window.innerWidth <= 900) {
      const mobileTitle = document.getElementById('js-mobile-title-under-glass');
      if (mobileTitle) mobileTitle.style.display = 'block';
      document.body.classList.add('has-popup-glass');
    }

    // Якщо вже є активний блок — показуємо одразу з подякою
    if (uDataIsBlocked()) {
      popupClickDone = true;
      show(true);
      return;
    }

    // Інакше — показуємо порожнє "скло" (прозоре, без тексту)
    show(false);

    // Відслідковуємо кліки по рекламних зонах
    // Рекламний клік = відкриття нової вкладки = blur вікна
    const adZones = [
      document.getElementById('ad-left'),
      document.getElementById('ad-right'),
    ].filter(Boolean);

    adZones.forEach(zone => {
      zone.addEventListener('mousedown',  () => { popupClickDone = true; }, { passive: true });
      zone.addEventListener('touchstart', () => { popupClickDone = true; }, { passive: true });
    });

    // Фокус через visibilitychange (надійніше на мобільних)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) onBlur();
      else onFocus();
    });

    // Додатково — window blur/focus (десктоп)
    window.addEventListener('blur',  onBlur);
    window.addEventListener('focus', onFocus);
  }

  return { init, show, hide };
})();

// =============================================
// ТРАНЗИТНИЙ ПЕРЕХІД (відео-оверлей)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('js-youtube-player');

  // js-video-overlay може бути відсутній — не падаємо
  const overlay = document.getElementById('js-video-overlay');
  if (overlay && player) {
    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      const transitTarget = "https://detectfraud.github.io/cossack-rada/redirect.html";
      const newWindow = window.open(transitTarget, '_blank');
      if (newWindow) newWindow.opener = null;
      setTimeout(() => {
        player.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}', '*'
        );
        overlay.style.display = 'none';
      }, 300);
    });
  }

  // -------------------------------------------------------
  // КРИТИЧНО: переміщуємо #js-popup-glass прямо в <body>
  // щоб уникнути зламаного stacking context від рекламних
  // скриптів (Monetag та ін. додають transform/filter/opacity
  // до своїх контейнерів, що руйнує z-index дочірніх fixed-елементів)
  // -------------------------------------------------------
  const glass = document.getElementById('js-popup-glass');
  if (glass && glass.parentNode !== document.body) {
    document.body.appendChild(glass);
  }

  // Ініціалізуємо скло
  PopupGlass.init();
});

// =============================================
// Кнопки мови
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-uk').addEventListener('click', () => setLang('uk'));
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
});

// =============================================
// Старт
// =============================================
(function () {
  const saved    = localStorage.getItem('lang');
  const urlLang  = new URLSearchParams(window.location.search).get('lng');
  const detected = saved || urlLang || 'uk';
  setLang(I18N[detected] ? detected : 'uk');
})();
