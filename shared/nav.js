(function () {
  var check = document.querySelector('.gw-nav-check');
  var nav = document.querySelector('.gw-nav');
  if (!check || !nav) return;

  // Sync open class for overlay nav background (enhancement only — open/close is pure CSS)
  check.addEventListener('change', function () {
    nav.classList.toggle('gw-nav--open', check.checked);
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('ul a').forEach(function (a) {
    a.addEventListener('click', function () {
      check.checked = false;
      nav.classList.remove('gw-nav--open');
    });
  });

  // Close when tapping outside the nav
  document.addEventListener('click', function (e) {
    if (check.checked && !nav.contains(e.target)) {
      check.checked = false;
      nav.classList.remove('gw-nav--open');
    }
  });

  // Overlay nav (index.html): stick and darken after scrolling past hero
  if (!nav.classList.contains('gw-nav--solid')) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('gw-nav--scrolled', window.scrollY > 60);
    }, { passive: true });
  }
})();
