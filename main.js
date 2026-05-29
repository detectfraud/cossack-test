/* =============================================
   КОЗАЦЬКИЙ СЕРІАЛ — main.js 10:50 29.05.2026
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
    smart_btn_locked: "⏳ Пауза до завтра",
    
    land_title:     "«Козацькі Сміхолики»",
    land_p1:        "Козаки знову оживають — не в підручниках, а у веселих коротких історіях, жартах, пригодах і сучасних мемах.",
    land_p2:        "«Козацькі Сміхолики» — це серіал коротких роликів, у якому козацький дух поєднується з гумором, народною мудрістю та українським вайбом.",
    land_p3:        "Кожен ролик — це нова кумедна ситуация, несподіваний поворот або життєва історія, у якій легко впізнати себе, друзів чи сучасну Україну. Тут козаки можуть сперечатись через борщ, шукай скарб, “воювати” з лінощами або потрапляти в абсолютно абсурдні пригоди.",
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
    inst_intro:     "Рекламний донат дозволяє підтримати нас абсолютно безкоштовно! Кліком ви перейдете на сайт нашого рекламного партнера, який покаже вам безпечне оголошення (гру або корисний сервіс), за що мережа нарахує нам кошти на оплату нейромереж. Дякуємо за вашу допомогу!",
    inst_adblock:   "⚠️ ВАЖЛИВО ПРО АНТИВІРУСИ ТА БЛОКУВАЛЬНИКИ:<br>Деякі антивіруси (наприклад, Avast) або вбудовані системи захисту браузерів можуть помилково заблокувати перехід, вважаючи сторінку реклами підозрілою. Це стандартна автоматична реакція на рекламні редіректи.<br><br><strong>Що робити, якщо перехід заблоковано:</strong><br>1. Не хвилюйтеся, ваш пристрій у повній безпеці.<br>2. Ви можете тимчасово призупинити захист антивіруса на 1 хвилину ПЕРЕД кліком.<br>3. Якщо ви вже натиснули кнопку і спроба «згоріла» (увімкнувся таймер на 24 години) — скористайтеся кнопкою нижче, щоб скинути блокування та отримати ще одну спробу!",
    inst_more:      "Читати інструкцію далі 👇",
    inst_less:      "Згорнути інструкцію ▲",
    
    retry_btn_text: "🔄 Дати мені ще одну спробу",

    offer_text:     "Коротка інструкція на 'Рекламний донат', як зробити його правильно?",
    cb_label:       "Більше не показувати це питання",
    yes_text:       "ТАК, ЧИТАТИ",
    no_text:        "НІ, ПЕРЕЙТИ КУДИ ТРЕБА",
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
    smart_btn_locked: "⏳ Pause until tomorrow",
    
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
    inst_intro:     "Advertising donation allows you to support us absolutely for free! By clicking, you will be redirected to our advertising partner, which will show you a safe offer or game, and the network rewards us with funds for further AI generation. Thank you for your support!",
    inst_adblock:   "⚠️ IMPORTANT ABOUT ANTIVIRUS & BLOCKERS:<br>Some antiviruses (like Avast) or built-in browser security filters may block the redirect, flagging the ad page as suspicious. This is a common automatic reaction to ad network links.<br><br><strong>What to do if the link is blocked:</strong><br>1. Don't worry, your device is completely safe.<br>2. You can temporarily pause your antivirus protection for 1 minute BEFORE clicking.<br>3. If you already clicked and your attempt was wasted (24-hour cooldown activated) — use the button below to reset the cooldown and try again!",
    inst_more:      "Read instruction further 👇",
    inst_less:      "Collapse instruction ▲",
    
    retry_btn_text: "🔄 Give me one more attempt",

    offer_text:     "Brief instructions on 'Advertising Donation', how to make it correctly?",
    cb_label:       "Do not show this question again",
    yes_text:       "YES, READ IT",
    no_text:        "NO, PROCEED TO LINK",
  }
};

window._currentLang = 'uk';
const keyTimeHash = "u_data_ts";      
const keyStringHash = "u_data_str"; 
const keyRetryHash = "u_retry_ts"; 

function maskData(value) { return btoa("czk_" + value + "_czk"); }
function unmaskData(maskedValue) {
  if (!maskedValue) return '';
  try {
    const decoded = atob(maskedValue);
    return decoded.substring(4, decoded.length - 4);
  } catch (e) { return ''; }
}

// 1. КЛІК НА ГОЛОВНУ КНОПКУ ДОНАТУ
function handleSmartLinkClick() {
  window.open(SMARTLINK, '_blank');
  
  // Генеруємо випадкові хвилини від 5 до 20 включно
  const randomMinutes = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  // Переводимо 24 години + випадкові хвилини у мілісекунди
  const msCooldown = (24 * 60 * 60 * 1000) + (randomMinutes * 60 * 1000);

  const now = new Date();
  // Створюємо об'єкт фінального часу блокування
  let futureDate = new Date(now.getTime() + msCooldown);
  
  // КРАТНЕ ОКРУГЛЕННЯ ДО 5 ХВИЛИН:
  // Беремо отримані хвилини, ділимо на 5, округляємо до найближчого цілого і множимо на 5
  const currentMinutes = futureDate.getMinutes();
  const roundedMinutes = Math.round(currentMinutes / 5) * 5;
  
  // Встановлюємо округлені хвилини (JS сам правильно переведе годину вперед, якщо вийде 60)
  futureDate.setMinutes(roundedMinutes);
  futureDate.setSeconds(0); // занулюємо секунди для чистоти
  
  const futureTime = futureDate.getTime();
  
  // Форматуємо час для виведення на кнопці з урахуванням округлення
  const hours = String(futureDate.getHours()).padStart(2, '0');
  const minutes = String(futureDate.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  const isRetryRound = localStorage.getItem('retry_activated') === 'true';
  
  localStorage.setItem(keyTimeHash, maskData(futureTime.toString()));
  localStorage.setItem(keyStringHash, maskData(timeString));
  
  if (isRetryRound) {
    localStorage.setItem(keyRetryHash, maskData(futureTime.toString()));
    localStorage.removeItem('retry_activated'); 
  }
  
  setLang(window._currentLang);
}

// 2. ОНОВЛЕННЯ СТАНУ КНОПКИ СКИДАННЯ
function updateRetryButtonState() {
  const retryBtn = document.getElementById('js-retry-attempt-btn');
  if (!retryBtn) return;

  const rawSavedTime = localStorage.getItem(keyTimeHash);
  const taskSavedTime = unmaskData(rawSavedTime);
  
  const rawRetryTime = localStorage.getItem(keyRetryHash);
  const retrySavedTime = unmaskData(rawRetryTime);
  
  const now = new Date().getTime();

  if (retrySavedTime && now < parseInt(retrySavedTime)) {
    retryBtn.disabled = true;
    retryBtn.style.opacity = '0.4';
    retryBtn.style.cursor = 'not-allowed';
    return;
  }

  if (retrySavedTime && now >= parseInt(retrySavedTime)) {
    localStorage.removeItem(keyRetryHash);
  }

  if (taskSavedTime && now < parseInt(taskSavedTime)) {
    retryBtn.disabled = false;
    retryBtn.style.opacity = '1';
    retryBtn.style.cursor = 'pointer';
  } else {
    retryBtn.disabled = true;
    retryBtn.style.opacity = '0.4';
    retryBtn.style.cursor = 'not-allowed';
  }
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
  if(document.getElementById('js-inst-adblock-warn')) document.getElementById('js-inst-adblock-warn').innerHTML = t.inst_adblock;
  if(document.getElementById('js-retry-attempt-btn')) document.getElementById('js-retry-attempt-btn').textContent = t.retry_btn_text;
  
  const instMoreBtn = document.getElementById('js-inst-more-btn');
  const instMoreContent = document.getElementById('js-inst-more-content');
  if(instMoreBtn && instMoreContent) {
    instMoreBtn.textContent = instMoreContent.classList.contains('expanded') ? t.inst_less : t.inst_more;
  }

  if(document.getElementById('js-offer-text')) document.getElementById('js-offer-text').textContent = t.offer_text;
  if(document.getElementById('js-cb-label')) document.getElementById('js-cb-label').textContent = t.cb_label;
  if(document.getElementById('js-offer-yes')) document.getElementById('js-offer-yes').textContent = t.yes_text;
  if(document.getElementById('js-offer-no')) document.getElementById('js-offer-no').textContent = t.no_text;
  
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
      smartBtn.textContent = t.smart_btn_locked + " (" + savedTimeString + ")";
    } else {
      smartBtn.disabled = false;
      smartBtn.style.opacity = '1';
      smartBtn.style.cursor = 'pointer';
      smartBtn.textContent = '🚀 ' + t.smart_btn;
    }
  }

  updateRetryButtonState();
}

// ПОДІЇ ТА СЛУХАЧІ КНОПОК
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

  // ГОЛОВНА КНОПКА SMARTLINK (Перевіряє обидва сховища)
  const smartBtn = document.getElementById('js-smart-btn');
  if (smartBtn) {
    smartBtn.addEventListener('click', () => {
      const neverShowLocalStorage = localStorage.getItem('never_show_offer') === 'true';
      const neverShowSessionStorage = sessionStorage.getItem('never_show_offer') === 'true';
      const offerModal = document.getElementById('js-offer-modal');

      if (neverShowLocalStorage || neverShowSessionStorage) {
        handleSmartLinkClick();
      } else {
        if (offerModal) offerModal.style.display = 'block';
      }
    });
  }

  // КНОПКИ МОДАЛЬНОГО ВІКНА (ТАК / НІ)
  const offerYes = document.getElementById('js-offer-yes');
  const offerNo = document.getElementById('js-offer-no');
  const offerModal = document.getElementById('js-offer-modal');

  if (offerYes) {
    offerYes.addEventListener('click', () => {
      checkNeverShowCheckbox();
      if (offerModal) offerModal.style.display = 'none';
      
      const instMoreContent = document.getElementById('js-inst-more-content');
      if (instMoreContent) {
        instMoreContent.classList.add('expanded');
        instMoreContent.scrollIntoView({ behavior: 'smooth' });
      }
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
    } else {
      sessionStorage.setItem('never_show_offer', 'true');
    }
  }

  // КНОПКА СКИДАННЯ ТАЙМЕРА (ЗАПАСНА СПРОБА)
  const retryAttemptBtn = document.getElementById('js-retry-attempt-btn');
  if (retryAttemptBtn) {
    retryAttemptBtn.addEventListener('click', () => {
      localStorage.removeItem(keyTimeHash);
      localStorage.removeItem(keyStringHash);
      
      localStorage.setItem('retry_activated', 'true');
      
      alert(window._currentLang === 'en' ? 
        'Your backup attempt has been restored! You have exactly one more try for today.' : 
        'Запасну спробу відновлено! У вас є рівно один додатковий шанс на сьогодні.');
      
      setLang(window._currentLang); 
    });
  }

// =============================================
// ЛІЧИЛЬНИК АДМІНА
// =============================================
// =============================================
// РЕАЛЬНА СТАТИСТИКА З СЕРВЕРУ ДОНАЛЬДА ЗУ
// =============================================
window.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.querySelector('.lang-switcher');
    
    if (langSwitcher) {
        // Твоє реальне посилання на лічильник зі скріншоту README
        const realCounterImg = "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdetectfraud.github.io&count_bg=%23795548&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false";

        if (localStorage.getItem('iamtheboss') === 'true') {
            // Створюємо елемент для адміна
            const counterElement = document.createElement('div');
            // Задаємо базове вирівнювання, щоб воно встало в один рівний ряд із кнопками мови
            counterElement.style.display = 'inline-flex';
            counterElement.style.alignItems = 'center';
            counterElement.style.marginRight = '8px'; // Відступ від кнопки UA
            
            // Вставляємо оригінальний готовий бейдж з сервера
            counterElement.innerHTML = `<img src="${realCounterImg}" alt="Views Counter" style="display:block; height:24px; width:auto; filter:none!important;">`;
            
            // Закидаємо його на початок блоку мов
            langSwitcher.insertBefore(counterElement, langSwitcher.firstChild);
        } else {
            // Для звичайних людей — невидимий елемент на сторінці, який просто шле хіт на сервер
            const invisibleTrack = document.createElement('img');
            invisibleTrack.src = realCounterImg;
            invisibleTrack.style.position = 'absolute';
            invisibleTrack.style.width = '0';
            invisibleTrack.style.height = '0';
            invisibleTrack.style.opacity = '0';
            document.body.appendChild(invisibleTrack);
        }
    }
});

  // КНОПКА АДМІНІСТРАТОРА (Повне очищення для тестів)
  const adminClearBtn = document.getElementById('js-admin-clear-btn');
  if (adminClearBtn) {
    adminClearBtn.addEventListener('click', () => {
      localStorage.removeItem(keyTimeHash);
      localStorage.removeItem(keyStringHash);
      localStorage.removeItem(keyRetryHash);
      localStorage.removeItem('retry_activated');
      sessionStorage.removeItem('never_show_offer'); 
      
      alert('⚙️ ADMIN: Усі ліміти, таймери та налаштування повністю скинуто!');
      setLang(window._currentLang);
    });
  }
});
