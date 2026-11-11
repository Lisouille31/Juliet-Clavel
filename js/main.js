(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    var closeMenu = function () {
      toggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
    };

    var openMenu = function () {
      toggle.classList.add('is-open');
      navLinks.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Fermer le menu');
    };

    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!navLinks.classList.contains('is-open')) return;
      if (navLinks.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Ombre du header au scroll ---------- */
  var header = document.querySelector('header');
  if (header) {
    var onScrollHeader = function () {
      if (window.scrollY > 8) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScrollHeader();
    window.addEventListener('scroll', onScrollHeader, { passive: true });
  }

  /* ---------- Révélation au scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('in-view');
      });
    }
  }

  /* ---------- Parallax léger sur les illustrations du hero ---------- */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !reduceMotion) {
    var ticking = false;
    var updateParallax = function () {
      var y = window.scrollY;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.05;
        el.style.transform = 'translateY(' + (y * speed).toFixed(1) + 'px)';
      });
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------- Galerie de photos défilante ---------- */
  var gallery = document.getElementById('cabinet-gallery');
  if (gallery) {
    var originals = Array.from(gallery.children);
    originals.forEach(function (photo) {
      var copy = photo.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.setAttribute('inert', '');
      gallery.appendChild(copy);
    });
    var hovering = false;
    var touching = false;
    var lastFrame = 0;
    var galleryPosition = gallery.scrollLeft;
    gallery.addEventListener('mouseenter', function () { hovering = true; });
    gallery.addEventListener('mouseleave', function () { hovering = false; });
    gallery.addEventListener('touchstart', function () { touching = true; }, { passive: true });
    gallery.addEventListener('touchend', function () { touching = false; }, { passive: true });
    gallery.addEventListener('touchcancel', function () { touching = false; }, { passive: true });
    var animateGallery = function (time) {
      var elapsed = lastFrame ? Math.min(time - lastFrame, 50) : 0;
      lastFrame = time;
      if (!reduceMotion && !hovering && !touching && !gallery.contains(document.activeElement) && !document.hidden) {
        var loopWidth = gallery.children[originals.length].offsetLeft - gallery.children[0].offsetLeft;
        // Keep fractional pixels between frames, even when the browser rounds scrollLeft.
        galleryPosition += elapsed * 0.035;
        if (loopWidth > 0) galleryPosition %= loopWidth;
        gallery.scrollLeft = galleryPosition;
      } else {
        galleryPosition = gallery.scrollLeft;
      }
      window.requestAnimationFrame(animateGallery);
    };
    window.requestAnimationFrame(animateGallery);
  }
})();
