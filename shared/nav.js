(function () {
  var toggle = document.querySelector('.gw-nav-toggle');
  var nav = document.querySelector('.gw-nav');
  if (!toggle || !nav) return;

  function open()  { nav.classList.add('gw-nav--open');    toggle.setAttribute('aria-expanded', 'true');  toggle.setAttribute('aria-label', 'Menü schließen'); }
  function close() { nav.classList.remove('gw-nav--open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menü öffnen'); }

  // Toggle on button click — no stopPropagation so the event can
  // still reach the document handler without interference
  toggle.addEventListener('click', function () {
    nav.classList.contains('gw-nav--open') ? close() : open();
  });

  // Close when a nav link is tapped
  nav.querySelectorAll('ul a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  // Close when tapping outside the nav
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('gw-nav--open') && !nav.contains(e.target)) {
      close();
    }
  });
})();
