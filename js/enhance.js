/* Progressive enhancement — the site works fully without this file.
   Everything here is additive: Escape/arrow-key navigation, scroll lock,
   focus management, click-outside-to-close, and the copy-link button. */

(function () {
  let lastTrigger = null; // the trap-card that opened the current detail (null for deep links)
  let savedScrollY = 0;
  let isLocked = false;

  function getOpenDetail() {
    return document.querySelector('.trap-detail:target');
  }

  function lockScroll() {
    if (isLocked) return;
    isLocked = true;
    savedScrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = scrollbarWidth + 'px';
    }
  }

  function unlockScroll() {
    if (!isLocked) return;
    isLocked = false;
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    window.scrollTo(0, savedScrollY);
  }

  function getFocusable(container) {
    return Array.from(
      container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.offsetParent !== null);
  }

  // Remember the card that opened a detail view, so we can return focus to it on close.
  document.addEventListener(
    'click',
    (event) => {
      const card = event.target.closest('.trap-card');
      if (card) lastTrigger = card;
    },
    true
  );

  // Click outside the panel closes the detail view.
  document.addEventListener('click', (event) => {
    const openDetail = getOpenDetail();
    if (!openDetail) return;

    const clickedOutsidePanel =
      event.target === openDetail || event.target.classList.contains('backdrop');
    if (!clickedOutsidePanel) return;

    const closeLink = openDetail.querySelector('.trap-detail__close');
    if (closeLink) window.location.hash = closeLink.getAttribute('href');
  });

  // Copy-link button.
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.trap-detail__copy');
    if (!btn) return;

    const panel = btn.closest('.trap-detail');
    if (!panel) return;

    const url = `${location.origin}${location.pathname}#${panel.id}`;

    const showCopied = () => {
      btn.classList.add('is-copied');
      clearTimeout(btn._copyTimeout);
      btn._copyTimeout = setTimeout(() => btn.classList.remove('is-copied'), 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(showCopied).catch(() => {});
    }
  });

  // Escape closes, Left/Right follow prev/next, Tab is trapped inside the panel.
  document.addEventListener('keydown', (event) => {
    const openDetail = getOpenDetail();
    if (!openDetail) return;

    if (event.key === 'Escape') {
      const closeLink = openDetail.querySelector('.trap-detail__close');
      if (closeLink) window.location.hash = closeLink.getAttribute('href');
      return;
    }

    if (event.key === 'ArrowLeft') {
      const prevLink = openDetail.querySelector('.detail-nav-link--prev');
      if (prevLink) window.location.hash = prevLink.getAttribute('href');
      return;
    }

    if (event.key === 'ArrowRight') {
      const nextLink = openDetail.querySelector('.detail-nav-link--next');
      if (nextLink) window.location.hash = nextLink.getAttribute('href');
      return;
    }

    if (event.key === 'Tab') {
      const panel = openDetail.querySelector('.trap-detail__panel');
      const focusable = getFocusable(panel);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Drives scroll lock and focus management off hash changes, so Back/Forward,
  // prev/next, close, and direct card clicks all go through one place.
  function onHashChange() {
    const openDetail = getOpenDetail();

    if (openDetail) {
      lockScroll();
      openDetail.setAttribute('aria-modal', 'true');
      const closeLink = openDetail.querySelector('.trap-detail__close');
      if (closeLink) closeLink.focus();
    } else {
      document.querySelectorAll('.trap-detail[aria-modal]').forEach((el) => {
        el.removeAttribute('aria-modal');
      });
      unlockScroll();

      if (lastTrigger && document.contains(lastTrigger)) {
        lastTrigger.focus();
      } else {
        const targetId = location.hash.replace('#', '');
        const section = document.getElementById(targetId);
        const heading = section ? section.querySelector('.cat-name') : null;
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus();
        }
      }
      lastTrigger = null;
    }
  }

  window.addEventListener('hashchange', onHashChange);

  // Handle a detail view already open on initial load (a deep link).
  if (getOpenDetail()) onHashChange();
})();
