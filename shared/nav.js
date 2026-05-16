(function () {
  var toggle = document.querySelector('.gw-nav-toggle');
  var nav = document.querySelector('.gw-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('gw-nav--open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('gw-nav--open'));
  });

  nav.querySelectorAll('ul a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('gw-nav--open') && !nav.contains(e.target)) {
      setOpen(false);
    }
  });
})();
