/* ============================================================
   KP PERFORMANCE & AUTOMOTIVE - script.js
   Built by OTM Web Design
   ============================================================ */

/* ---------- Active nav state ---------- */
(function () {
  var page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('[data-nav]').forEach(function (link) {
    if (link.getAttribute('data-nav') === page) link.classList.add('is-active');
  });
})();

/* ---------- Mobile hamburger menu ---------- */
(function () {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  var backdrop = document.querySelector('.nav-backdrop');
  if (!hamburger || !menu || !backdrop) return;

  function open() {
    hamburger.classList.add('is-open');
    menu.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    hamburger.classList.remove('is-open');
    menu.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  function toggle() { if (menu.classList.contains('is-open')) close(); else open(); }

  hamburger.addEventListener('click', toggle);
  backdrop.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) close(); });
})();

/* ---------- Smooth scroll for in-page anchors ---------- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ---------- Formspree _next rewrite ---------- */
(function () {
  var nextField = document.querySelector('input[name="_next"]');
  if (nextField) {
    nextField.value = new URL('thank-you.html', window.location.href).href;
  }
})();

/* ---------- Light client-side form guard ---------- */
(function () {
  var form = document.querySelector('form[data-form]');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      if (!field.value.trim()) { ok = false; field.style.borderColor = '#c0392b'; }
      else { field.style.borderColor = ''; }
    });
    if (!ok) { e.preventDefault(); }
  });
})();
