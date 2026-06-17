/* EARTS – main.js */

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth active-link highlight on scroll
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
const observer   = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// ── i18n ────────────────────────────────────────────────────────────────────

function detectLanguage() {
  const saved = localStorage.getItem('earts_lang');
  if (saved && translations[saved]) return saved;
  const code  = (navigator.language || 'es').toLowerCase().split('-')[0];
  const map   = { es: 'es', en: 'en', nl: 'nl', no: 'no', nb: 'no', nn: 'no' };
  return map[code] || 'es';
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (titles with <br>/<em>, prices with <small>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Input / textarea placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Page title & lang attribute
  if (t.page_title) document.title = t.page_title;
  document.documentElement.lang = lang === 'no' ? 'nb' : lang;

  // Active button highlight
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('earts_lang', lang);
}

// Wire up language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
    navLinks.classList.remove('open');
  });
});

// Apply on load
applyLanguage(detectLanguage());

// ── Contact form ─────────────────────────────────────────────────────────────

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn      = this.querySelector('button[type="submit"]');
  const lang     = localStorage.getItem('earts_lang') || 'es';
  const sentText = (translations[lang] || translations.es).form_sent;
  const origText = (translations[lang] || translations.es).form_submit;
  btn.textContent = sentText;
  btn.disabled    = true;
  btn.style.background = '#146a5c';
  setTimeout(() => {
    btn.textContent      = origText;
    btn.disabled         = false;
    btn.style.background = '';
    this.reset();
  }, 4000);
});
