/* =============================================
   КОЗАЦЬКИЙ СЕРІАЛ — main.js 
   ============================================= */

const SMARTLINK = "https://raw.githubusercontent.com/detectfraud/cossack-test/main/Kozaki.png";

const POST_CONFIG = {
  likes:    "109K",
  comments: "2K",
  shares:   "16K"
};

const I18N = {
  uk: {
    html_lang:      "uk",
    title:          "«Козацькі Сміхолики» — Веселі козацькі меми та анімаційний серіал",
    hero:           "«Козацькі Сміхолики»",
    sub:            "Відео, яке зібрало мільйони переглядів в Facebook, стало початком серії мемів про козаків.",
    before_video:   "Перша серія, з якої все почалося 👇",
    donate_heading: "❤️ Підтримати серіал",
    donate_text:    "Ми створюємо цей серіал власним коштом.<br>AI-сервіси, генерація сцен, монтаж та створення нових серій потребують ресурсів.<br>Якщо тобі подобається цей проєкт — підтримай його розвиток ❤️",
    donate_btn:     "Грошовий донат",
    next:           "Нові серії вже готуються 👀",
    post_text:      "Поширюйте цей ролик по всьому світу.\n«Ви навіть не уявляєте, як цей короткий ролик розхитує фундамент \"імперії зла\". Кожен ваш лайк, поширення чи коментар — навіть жовчний вигук ворога — це та сама крапля, що точить їхнє гниле корито, коли воно переповниться, то піде на дно так само впевнено й безславно, як їхній флагман \"Москва\". Ваша активність — це зброя, що наближає фінальне занурення»",
    smart_btn:      "Безкоштовний рекламний донат",
    smart_btn_locked: "⏳ Пауза до завтра ",
    
    land_title:     "«Козацькі Сміхолики»",
    land_p1:        "Козаки знову оживають — не в підручниках, а у веселих коротких історіях, жартах, пригодах і сучасних мемах.",
    land_p2:        "«Козацькі Сміхолики» — це серіал коротких роликів, у якому козацький дух поєднується з гумором, народною мудрістю та українським вайбом.",
    land_p3:        "Кожен ролик — це нова кумедна ситуація, несподіваний поворот або життєва історія, у якій легко впізнати себе, друзів чи сучасну Україну. Тут козаки можуть сперечатись через борщ, шукати скарб, “воювати” з лінощами або потрапляти в абсолютно абсурдні пригоди.",
    land_cta1:      "Якщо «Козацькі Сміхолики» запали вам у душу — підтримайте створення нових серій. Кожна підтримка допомагає:",
    land_li1:       "створювати нові ролики;",
    land_li2:       "покращувати анімацію та озвучку;",
    land_li3:       "вигадувати ще більше веселих сюжетів;",
    land_li4:       "розвивати український авторський контент.",
    land_cta2:      "А ще ви можете стать частиною проєкту:",
    land_li5:       "запропонувати власну тему чи ідею для нового ролика;",
    land_li6:       "проголосувати за сюжет, який хочете побачити наступним;",
    land_li7:       "вплинути на розвиток всесвіту «Козацьких Сміхоликів».",
    land_footer:    "Разом створимо серіал, який даруватиме людям усмішку та підніме дух 🇺🇦",
    read_more:      "————————— читати більше",
    read_less:      "————————— згорнути",

    inst_title:     "📢 Рекламний донат — як користуватись",
    inst_intro:     "Рекламний донат дозволяє підтримати нас абсолютно безкоштовно! Кліком ви перейдете на сайт нашого рекламного партнера Adsterra, який покаже вам безпечне оголошення, за що мережа нарахує нам кошти на оплату нейромереж. Дякуємо за вашу допомогу!",
    inst_adblock:   "⚠️ Важливо: якщо у вас увімкнений AdBlock або Brave Shields — система не зможе зарахувати рекламний перехід. Будь ласка, вимкніть їх перед натисканням.",
    inst_more:      "Читати інструкцію далі 👇",
    inst_less:      "Згорнути інструкцію ▲",

    offer_text:     "Ви вперше натиснули на 'Рекламний донат'. Бажаєте ознайомитися з короткою інструкцією, як зробити його правильно?",
    cb_label:       "Більше не показувати це питання",
    yes_text:       "ТАК",
    no_text:        "НІ",

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
    donate_text:    "This series is created independently and funded by its audience.<br>AI tools, scene generation, editing, and production all require resources.<br>If you enjoy this project — support future episodes ❤️",
    donate_btn:     "Money Donation",
    next:           "More episodes are coming soon 👀",
    post_text:      "Share this video all over the world.\n«You can't even imagine how this short video shakes the foundation of the \"empire of evil\". Every like, share, or comment — even an angry reaction from the enemy — is a drop that wears down their rotten trough. When it overflows, it will sink just as surely as their flagship \"Moskva\". Your activity is a weapon that hastens the final plunge»",
    smart_btn:      "Free Advertising Donation",
    smart_btn_locked: "⏳ Pause until tomorrow ",
    
    land_title:     "“Cossack Smiholiky”",
    land_p1:        "Cossacks come to life once again — not in history textbooks, but in hilarious short stories, jokes, adventures, and modern memes.",
    land_p2:        "“Cossack Smiholiky” is a short-form video series where the free Cossack spirit perfectly blends with humor, folk wisdom, and authentic Ukrainian vibes.",
    land_p3:        "Each episode brings a new funny situation, an unexpected twist, or a relatable life story where you can easily recognize yourself, your friends, or modern Ukraine.",
    land_cta1:      "If “Cossack Smiholiky” captured your heart, please consider supporting the creation of new episodes. Every bit of support helps us to:",
    land_li1:       "produce new video episodes;",
    land_li2:       "improve animation and voice acting quality;",
    land_li3:       "brainstorm even more hilarious storylines;",
    land_li4:       "develop authentic Ukrainian independent content.",
    land_cta2:      "Moreover, you can become an active part of the project:",
    land_li5:       "suggest your own theme or idea for an upcoming episode;",
    land_li6:       "vote for the next storyline you want to see animated;",
    land_li7:       "influence the growth of the “Cossack Smiholiky” universe.",
    land_footer:    "Together, let's build a series that brings smiles and boosts the spirit 🇺🇦",
    read_more:      "————————— read more",
    read_less:      "————————— read less",

    inst_title:     "📢 Advertising Donation — How to Use",
    inst_intro:     "Advertising donation allows you to support us absolutely for free! By clicking, you will be redirected to our advertising partner Adsterra, which will show you a safe offer or game, and the network rewards us with funds for further AI generation. Thank you for your support!",
    inst_adblock:   "⚠️ Important: if you have AdBlock or Brave Shields active, the network cannot register your donation. Please disable them before clicking.",
    inst_more:      "Read instruction further 👇",
    inst_less:      "Collapse instruction ▲",

    offer_text:     "This is your first click on 'Advertising Donation'. Would you like to read a short manual on how to do it correctly?",
    cb_label:       "Do not show this question again",
    yes_text:       "YES",
    no_text:        "NO",

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
window._currentLang = 'uk';
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

window.showAdblockMessage = function() {
  window._isAdblockDetected = true;
  const lang = window._currentLang || 'uk';
  const t    = I18N[lang] || I18N['uk'];
  const lines = t.adblock_lines.map(l => `<p>${l}</p>`).join('');

  document.querySelectorAll('.ad').forEach(el => { el.innerHTML = `<div class="adblock-msg">${lines}</div>`; });

  const stickyEl = document.getElementById('js-sticky');
  if (stickyEl) {
    stickyEl.innerHTML = `<div class="adblock-msg adblock-msg--sticky">${t.adblock_sticky}</div>`;
    stickyEl.style.display = 'block';
  }
  
  const smartBtn = document.getElementById('js-smart-btn');
  if (smartBtn && !smartBtn.disabled) {
    smartBtn.classList.add('blocked-by-adblock');
    smartBtn.textContent = lang === 'en' ? '⚠️ Disable AdBlock to Support' : '⚠️ Вимкніть AdBlock для донату';
  }
};

// ADBLOCK DETECTOR
(function () {
  const isDebug = window.location.hash === "#test";
  const isBoss  = localStorage.getItem('iamtheboss') === 'true';
  if (isDebug || isBoss) return;
  const checkAdblock = () => {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-unit text-ad';
    bait.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
    document.body.appendChild(bait);
    setTimeout(() => {
      const s = window.getComputedStyle(bait);
      const blocked = bait.offsetHeight === 0 || bait.offsetWidth === 0 || s.display === 'none' || s.visibility === 'hidden';
      bait.remove();
      if (blocked) window.showAdblockMessage();
    }, 300);
  };
  if (document.readyState === 'complete') { checkAdblock(); } else { window.addEventListener('load', checkAdblock); }
})();

// Запуск Adsterra Smartlink + активація 24-годинної паузи
function handleSmartLinkClick() {
  window.open(SMARTLINK, '_blank');
  
  const now = new Date();
  const futureTime = now.getTime() + (24 * 60 * 60 * 1000);
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  localStorage.setItem(keyTimeHash, maskData(futureTime.toString()));
  localStorage.setItem(keyStringHash, maskData(timeString));
  
  setLang(window._currentLang);
}

// i18n РЕНДЕР
function setLang(lang) {
  window._currentLang = lang;
  const t = I18N[lang];
  if (!t) return;

  localStorage.setItem('lang', lang);
  document.documentElement.lang = t.html_lang;
  document.title = t.title;

  if(document.getElementById('js-hero')) document.getElementById('js-hero').textContent = t.hero;
  if(document.getElementById('js-sub')) document.getElementById('js-sub').textContent = t.sub;
  if(document.getElementById('js-before-video')) document.getElementById('js-before-video').textContent = t.before_video;
  if(document.getElementById('js-post-text')) document.getElementById('js-post-text').textContent = t.post_text;
  if(document.getElementById('js-donate-heading')) document.getElementById('js-donate-heading').textContent = t.donate_heading;
  if(document.getElementById('js-donate-text')) document.getElementById('js-donate-text').innerHTML = t.donate_text;
  if(document.getElementById('js-next')) document.getElementById('js-next').textContent = t.next;

  if(document.getElementById('js-land-title')) document.getElementById('js-land-title').textContent = t.land_title;
  if(document.getElementById('js-land-p1')) document.getElementById('js-land-p1').textContent = t.land_p1;
  if(document.getElementById('js-land-p2')) document.getElementById('js-land-p2').textContent = t.land_p2;
  if(document.getElementById('js-land-p3')) document.getElementById('js-land-p3').textContent = t.land_p3;
  if(document.getElementById('js-land-cta1')) document.getElementById('js-land-cta1').textContent = t.land_cta1;
  if(document.getElementById('js-land-cta2')) document.getElementById('js-land-cta2').textContent = t.land_cta2;
  if(document.getElementById('js-land-footer')) document.getElementById('js-land-footer').textContent = t.land_footer;

  const lists = document.querySelectorAll('.land-list');
  if (lists.length >= 2) {
    const items1 = lists[0].querySelectorAll('li');
    if(items1.length >= 4) {
      items1[0].textContent = t.land_li1;
      items1[1].textContent = t.land_li2;
      items1[2].textContent = t.land_li3;
      items1[3].textContent = t.land_li4;
    }
    const items2 = lists[1].querySelectorAll('li');
    if(items2.length >= 3) {
      items2[0].textContent = t.land_li5;
      items2[1].textContent = t.land_li6;
      items2[2].textContent = t.land_li7;
    }
  }

  const readMoreBtn = document.getElementById('js-read-more-btn');
  const moreContent = document.getElementById('js-more-content');
  if(readMoreBtn && moreContent) {
    readMoreBtn.textContent = moreContent.classList.contains('expanded') ? t.read_less : t.read_more;
  }

  if(document.getElementById('js-inst-title')) document.getElementById('js-inst-title').textContent = t.inst_title;
  if(document.getElementById('js-inst-intro')) document.getElementById('js-inst-intro').textContent = t.inst_intro;
  if(document.getElementById('js-inst-adblock-warn')) document.getElementById('js-inst-adblock-warn').textContent = t.inst_adblock;
  
  const instMoreBtn = document.getElementById('js-inst-more-btn');
  const instMoreContent = document.getElementById('js-inst-more-content');
  if(instMoreBtn && instMoreContent) {
    instMoreBtn.textContent = instMoreContent.classList.contains('expanded') ? t.inst_less : t.inst_more;
  }

  if(document.getElementById('js-offer-text')) document.getElementById('js-offer-text').textContent = t.offer_text;
  if(document.getElementById('js-cb-label')) document.getElementById('js-cb-label').textContent = t.cb_label;
  if(document.getElementById('js-offer-yes')) document.getElementById('js-offer-yes').textContent = t.yes_text;
  if(document.getElementById('js-offer-no')) document.getElementById('js-offer-no').textContent = t.no_text;
  
  // Тут виправлено закриття та наповнення Donatello кнопки
  if(document.getElementById('js-donate-btn')) document.getElementById('js-donate-btn').textContent = t.donate_btn;

  const smartBtn = document.getElementById('js-smart-btn');
  if(smartBtn) {
    const rawSavedTime = localStorage.getItem(keyTimeHash);
    const taskSavedTime = unmaskData(rawSavedTime);
    const now = new Date().getTime();

    if (taskSavedTime && now < parseInt(taskSavedTime)) {
      const savedTimeString = unmaskData(localStorage.getItem(keyStringHash));
      smartBtn.disabled = true;
      smartBtn.style.opacity = '0.5';
      smartBtn.style.cursor = 'not-allowed';
      smartBtn.classList.remove('blocked-by-adblock');
      smartBtn.textContent = t.smart_btn_locked + savedTimeString;
    } else {
      smartBtn.disabled = false;
      smartBtn.style.opacity = '1';
      smartBtn.style.cursor = 'pointer';
      if (!window._isAdblockDetected) {
        smartBtn.classList.remove('blocked-by-adblock');
        smartBtn.textContent = '🚀 ' + t.smart_btn;
      } else {
        smartBtn.classList.add('blocked-by-adblock');
        smartBtn.textContent = lang === 'en' ? '⚠️ Disable AdBlock to Support' : '⚠️ Вимкніть AdBlock для донату';
      }
    }
  }
}

// ПОДІЇ ТА ЛОГІКА КНОПОК
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'uk';
  setLang(savedLang);

  document.getElementById('btn-uk').addEventListener('click', () => {
    document.getElementById('btn-uk').classList.add('active');
    document.getElementById('btn-en').classList.remove('active');
    setLang('uk');
  });
  document.getElementById('btn-en').addEventListener('click', () => {
    document.getElementById('btn-en').classList.add('active');
    document.getElementById('btn-uk').classList.remove('active');
    setLang('en');
  });

  const readMoreBtn = document.getElementById('js-read-more-btn');
  const moreContent = document.getElementById('js-more-content');
  if(readMoreBtn && moreContent) {
    readMoreBtn.addEventListener('click', () => {
      moreContent.classList.toggle('expanded');
      readMoreBtn.textContent = moreContent.classList.contains('expanded') ? I18N[window._currentLang].read_less : I18N[window._currentLang].read_more;
    });
  }

  const instMoreBtn = document.getElementById('js-inst-more-btn');
  const instMoreContent = document.getElementById('js-inst-more-content');
  if(instMoreBtn && instMoreContent) {
    instMoreBtn.addEventListener('click', () => {
      instMoreContent.classList.toggle('expanded');
      instMoreBtn.textContent = instMoreContent.classList.contains('expanded') ? I18N[window._currentLang].inst_less : I18N[window._currentLang].inst_more;
    });
  }

  if(document.getElementById('js-likes')) document.getElementById('js-likes').textContent = POST_CONFIG.likes;
  if(document.getElementById('js-comments')) document.getElementById('js-comments').textContent = POST_CONFIG.comments;
  if(document.getElementById('js-shares')) document.getElementById('js-shares').textContent = POST_CONFIG.shares;

  const adminBtn = document.getElementById('js-admin-clear-btn');
  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      localStorage.removeItem(keyTimeHash);
      localStorage.removeItem(keyStringHash);
      alert('Таймер на 24 години скинуто! Перезавантаж сторінку.');
      setLang(window._currentLang);
    });
  }

  const smartBtn = document.getElementById('js-smart-btn');
  if (smartBtn) {
    smartBtn.addEventListener('click', () => {
      if (window._isAdblockDetected) return;

      const neverShowOffer = localStorage.getItem('never_show_offer') === 'true';
      const offerModal = document.getElementById('js-offer-modal');

      if (neverShowOffer) {
        handleSmartLinkClick();
      } else {
        if (offerModal) offerModal.style.display = 'block';
      }
    });
  }

  const offerYes = document.getElementById('js-offer-yes');
  const offerNo = document.getElementById('js-offer-no');
  const offerModal = document.getElementById('js-offer-modal');

  if (offerYes) {
    offerYes.addEventListener('click', () => {
      checkNeverShowCheckbox();
      if (offerModal) offerModal.style.display = 'none';
      const instMoreContent = document.getElementById('js-inst-more-content');
      if (instMoreContent) instMoreContent.classList.add('expanded');
      setLang(window._currentLang);
    });
  }

  if (offerNo) {
    offerNo.addEventListener('click', () => {
      checkNeverShowCheckbox();
      if (offerModal) offerModal.style.display = 'none';
      handleSmartLinkClick();
    });
  }

  function checkNeverShowCheckbox() {
    const cb = document.getElementById('js-never-show-cb');
    if (cb && cb.checked) {
      localStorage.setItem('never_show_offer', 'true');
    }
  }
});
