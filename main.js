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
      const blocked = bait.offsetHeight === 0 ||
                      bait.offsetWidth  === 0 ||
                      s.display      === 'none' ||
                      s.visibility   === 'hidden';
      bait.remove();

      if (blocked) showAdblockMessage();
    }, 300);
  };

  if (document.readyState === 'complete') {
    checkAdblock();
  } else {
    window.addEventListener('load', checkAdblock);
  }
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

  // Мобільна назва під склом
  const mobileTitleEl = document.getElementById('js-mobile-title-text');
  if (mobileTitleEl) mobileTitleEl.textContent = t.hero;

  window._currentLang = lang;

  // Оновлюємо переклад якщо adblock вже показується
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
// ДОПОМІЖНІ ФУНКЦІЇ ЧАСУ
// =============================================

// Повертає рядок часу "HH:MM" для завтра о 20:00 (або будь-якого часу)
function getTomorrowInviteTime() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(20, 0, 0, 0);
  const h = String(tomorrow.getHours()).padStart(2, '0');
  const m = String(tomorrow.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

// =============================================
// POPUP GLASS — "скло" поверх двох попапів
// =============================================
const GLASS_BLOCK_KEY   = 'glass_block_until'; // localStorage key
const GLASS_DELAY_SHOW  = 5000;  // мс до появи "скла" після повернення фокусу
const GLASS_FOCUS_WAIT  = 2500;  // мс очікування перед активацією таймера повернення

const PopupGlass = (() => {
  let glassEl         = null;
  let thanksEl        = null;
  let inviteTimeEl    = null;
  let popupClickDone  = false;  // чи було зафіксовано клік по попапу
  let focusLostTimer  = null;   // таймер після втрати фокусу (2-3 сек)
  let showGlassTimer  = null;   // таймер показу "скла" після повернення фокусу (5 сек)
  let isVisible       = false;

  // Перевіряємо чи активне 24-год блокування
  function isBlocked() {
    const until = localStorage.getItem(GLASS_BLOCK_KEY);
    if (!until) return false;
    return Date.now() < parseInt(until, 10);
  }

  // Встановлюємо 24-год блок
  function set24hBlock() {
    const until = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(GLASS_BLOCK_KEY, String(until));
  }

  // Показуємо "скло"
  function show(withThanks) {
    if (!glassEl) return;
    isVisible = true;

    if (withThanks && thanksEl) {
      thanksEl.style.display = 'flex';
      glassEl.classList.add('popup-glass-has-thanks');

      // Оновлюємо час запрошення
      if (inviteTimeEl) inviteTimeEl.textContent = getTomorrowInviteTime();

      // Оновлюємо тексти подяки з i18n
      const lang = window._currentLang || 'uk';
      const t = I18N[lang] || I18N['uk'];
      const h4 = thanksEl.querySelector('h4');
      const p  = thanksEl.querySelector('p');
      const spanInvite = thanksEl.querySelector('.popup-glass-time span');
      if (h4) h4.textContent = t.glass_thanks;
      if (p)  p.textContent  = t.glass_sub;
      if (spanInvite) spanInvite.textContent = t.glass_invite;
    }

    glassEl.style.display = 'flex';

    // Якщо активне 24-год блокування — перекриваємо кліки
    if (isBlocked()) {
      glassEl.style.pointerEvents = 'all';
    } else {
      glassEl.style.pointerEvents = 'none';
    }
  }

  // Ховаємо "скло"
  function hide() {
    if (!glassEl) return;
    isVisible = false;
    glassEl.style.display = 'none';
  }

  // Обробник втрати фокусу сторінки
  function onVisibilityHidden() {
    if (!popupClickDone) return; // скло активується тільки після кліку по попапу
    clearTimeout(showGlassTimer);

    // Запускаємо таймер 2-3 сек
    focusLostTimer = setTimeout(() => {
      // Якщо сторінка досі не у фокусі — "скло" готово з'явитися при поверненні
      // (нічого додаткового не робимо — тільки фіксуємо стан)
    }, GLASS_FOCUS_WAIT);
  }

  // Обробник повернення фокусу сторінки
  function onVisibilityVisible() {
    if (!popupClickDone) return;
    clearTimeout(focusLostTimer);

    // Через 5 секунд після повернення фокусу — показуємо "скло" з подякою
    showGlassTimer = setTimeout(() => {
      set24hBlock();
      show(true); // з текстом подяки
    }, GLASS_DELAY_SHOW);
  }

  // Ініціалізація
  function init() {
    glassEl      = document.getElementById('js-popup-glass');
    thanksEl     = document.getElementById('js-popup-glass-thanks');
    inviteTimeEl = document.getElementById('js-popup-invite-time');

    if (!glassEl) return;

    // Мобільна назва під склом
    const isMobile = window.innerWidth <= 900;
    const mobileTitleWrap = document.getElementById('js-mobile-title-under-glass');
    if (isMobile && mobileTitleWrap) {
      mobileTitleWrap.style.display = 'block';
      document.body.classList.add('has-popup-glass');
    }

    // Якщо вже є 24-год блок — показуємо скло одразу з подякою
    if (isBlocked()) {
      popupClickDone = true;
      show(true);
      return;
    }

    // Показуємо порожнє "скло" одразу (без подяки)
    show(false);

    // Слідкуємо за кліками по попапах
    // Moneta/рекламні попапи зазвичай відкриваються у новому вікні,
    // тому ловимо втрату фокусу як сигнал кліку.
    // Додатково ловимо mousedown/touchstart на зоні попапів.
    const popupZones = [
      document.getElementById('ad-left'),
      document.getElementById('ad-right'),
    ].filter(Boolean);

    function onPopupInteraction() {
      popupClickDone = true;
    }

    popupZones.forEach(zone => {
      zone.addEventListener('mousedown', onPopupInteraction, { once: false });
      zone.addEventListener('touchstart', onPopupInteraction, { once: false, passive: true });
    });

    // Відслідковуємо фокус сторінки
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        onVisibilityHidden();
      } else {
        onVisibilityVisible();
      }
    });

    // Додатково: window blur/focus для браузерів де visibilitychange не спрацьовує
    window.addEventListener('blur', onVisibilityHidden);
    window.addEventListener('focus', onVisibilityVisible);
  }

  return { init, show, hide };
})();

// =============================================
// ТРАНЗИТНИЙ ПЕРЕХІД ЧЕРЕЗ GITHUB PAGES
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('js-youtube-player');

  // Якщо залишився старий оверлей на відео — видаляємо
  const oldOverlay = document.getElementById('js-video-overlay');
  if (oldOverlay) oldOverlay.remove();

  // Запускаємо плеєр по кліку в будь-якому місці відеоплеєра
  if (player) {
    player.addEventListener('click', () => {
      setTimeout(() => {
        player.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}', '*'
        );
      }, 300);
    });
  }

  // Ініціалізуємо скло
  PopupGlass.init();
});

// =============================================
// Кнопки перемикача мови
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-uk').addEventListener('click', () => setLang('uk'));
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));
});

// =============================================
// Транзитна сторінка — відкриваємо при кліку на .ad зони
// (замінює старий js-video-overlay)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const transitTarget = "https://detectfraud.github.io/cossack-rada/redirect.html";

  const adZones = [
    document.getElementById('ad-left'),
    document.getElementById('ad-right'),
  ].filter(Boolean);

  adZones.forEach(zone => {
    zone.addEventListener('click', (e) => {
      // Не відкриваємо якщо активне 24-год блокування
      const until = localStorage.getItem(GLASS_BLOCK_KEY);
      if (until && Date.now() < parseInt(until, 10)) return;

      const newWindow = window.open(transitTarget, '_blank');
      if (newWindow) newWindow.opener = null;
    });
  });
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
