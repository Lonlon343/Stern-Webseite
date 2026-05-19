(function () {
  var toggle = document.querySelector('.gw-nav-toggle');
  var nav = document.querySelector('.gw-nav');
  if (!toggle || !nav) return;

  function open()  { nav.classList.add('gw-nav--open');    toggle.setAttribute('aria-expanded', 'true');  toggle.setAttribute('aria-label', 'Menü schließen'); }
  function close() { nav.classList.remove('gw-nav--open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menü öffnen'); }

  // touchstart fires immediately on iOS without any delay or synthesis issues.
  // The `tapped` flag prevents the subsequent click event from double-firing.
  var tapped = false;

  toggle.addEventListener('touchstart', function (e) {
    tapped = true;
    e.preventDefault();
    nav.classList.contains('gw-nav--open') ? close() : open();
  }, { passive: false });

  toggle.addEventListener('click', function () {
    if (tapped) { tapped = false; return; }
    nav.classList.contains('gw-nav--open') ? close() : open();
  });

  // Close when a nav link is tapped
  nav.querySelectorAll('ul a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  // Close when tapping outside — handle both touch and mouse
  document.addEventListener('touchstart', function (e) {
    if (nav.classList.contains('gw-nav--open') && !nav.contains(e.target)) close();
  }, { passive: true });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('gw-nav--open') && !nav.contains(e.target)) close();
  });

  // Overlay nav (index.html): stick and darken after scrolling past hero
  if (!nav.classList.contains('gw-nav--solid')) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('gw-nav--scrolled', window.scrollY > 60);
    }, { passive: true });
  }
})();
