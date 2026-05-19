(function () {
  var toggle = document.querySelector('.gw-nav-toggle');
  var nav = document.querySelector('.gw-nav');
  if (!toggle || !nav) return;

  function open()  { nav.classList.add('gw-nav--open');    toggle.setAttribute('aria-expanded', 'true');  toggle.setAttribute('aria-label', 'Menü schließen'); }
  function close() { nav.classList.remove('gw-nav--open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menü öffnen'); }

  // pointerdown fires instantly on both mouse and touch with no iOS 300ms delay.
  // Fall back to click on browsers without PointerEvent support.
  var evtDown = window.PointerEvent ? 'pointerdown' : 'click';

  toggle.addEventListener(evtDown, function (e) {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault(); // stops default focus ring and prevents duplicate click
    nav.classList.contains('gw-nav--open') ? close() : open();
  });

  // Close when a nav link is tapped
  nav.querySelectorAll('ul a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  // Close when tapping outside the nav
  document.addEventListener(evtDown, function (e) {
    if (nav.classList.contains('gw-nav--open') && !nav.contains(e.target)) {
      close();
    }
  });

  // Overlay nav (index.html): stick and darken after scrolling past hero
  if (!nav.classList.contains('gw-nav--solid')) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('gw-nav--scrolled', window.scrollY > 60);
    }, { passive: true });
  }
})();
