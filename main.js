/* ============================================================
   IT AUTOMATIONS - Main JavaScript
   GSAP ScrollTrigger animations, page transitions, interactivity
   ============================================================ */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
  initMobileMenu();
  initScrollReveal();
  initSignCastDemo();
  initCountUp();
  initSpreadsheetAnimation();
  initSmoothLinks();
});

/* ===== NAVIGATION ===== */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Active link highlighting
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && links.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.innerHTML = links.classList.contains('open') ? '&#10005;' : '&#9776;';
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.innerHTML = '&#9776;';
    });
  });
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ===== SCROLL REVEAL (GSAP or fallback) ===== */
function initScrollReveal() {
  // Check if GSAP is available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initGSAPAnimations();
    // Force ScrollTrigger to recalculate positions after layout settles
    requestAnimationFrame(() => ScrollTrigger.refresh());
  } else {
    // Fallback: IntersectionObserver
    initFallbackReveal();
  }

  // Safety net: if any animated elements are still invisible after 2.5s, force them visible
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children > *').forEach(el => {
      if (window.getComputedStyle(el).opacity === '0') {
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
  }, 2500);
}

function initGSAPAnimations() {
  // Hero entrance
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTimeline
    .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    .to('.hero h1', { opacity: 1, y: 0, duration: 1 }, 0.4)
    .to('.hero .hero-description', { opacity: 1, y: 0, duration: 0.8 }, 0.7)
    .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8 }, 0.9)
    .to('.hero-float-cards', { opacity: 1, y: 0, duration: 1 }, 1.1)
    .to('.hero-visual', { opacity: 1, y: 0, duration: 1 }, 1.1);

  // Floating orbs parallax
  gsap.to('.orb-1', {
    y: -60,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  gsap.to('.orb-2', {
    y: -40,
    x: -30,
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Reveal elements on scroll (using .to() like hero — animates FROM css opacity:0 TO 1)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stagger children
  gsap.utils.toArray('.stagger-children').forEach(container => {
    const children = container.children;
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stats counter animation
  gsap.utils.toArray('.stat-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-count')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = prefix + Math.round(this.targets()[0].val) + suffix;
          }
        });
      },
      once: true
    });
  });

  // Parallax sections
  gsap.utils.toArray('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
    gsap.to(el, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

function initFallbackReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => {
    observer.observe(el);
  });

  // Animate hero immediately
  setTimeout(() => {
    document.querySelectorAll('.hero-badge, .hero h1, .hero .hero-description, .hero-buttons, .hero-float-cards, .hero-visual').forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 150);
    });
  }, 200);
}

/* ===== COUNT UP ANIMATION (fallback) ===== */
function initCountUp() {
  if (typeof gsap !== 'undefined') return; // GSAP handles it

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.round(current) + suffix;
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

/* ===== SIGNCAST DEMO ===== */
function initSignCastDemo() {
  const screen = document.querySelector('.signcast-screen');
  if (!screen) return;

  const slides = screen.querySelectorAll('.slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let playing = true;
  let interval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startPlayback() {
    interval = setInterval(nextSlide, 3000);
    playing = true;
  }

  function stopPlayback() {
    clearInterval(interval);
    playing = false;
  }

  showSlide(0);
  startPlayback();

  // Controls
  const playBtn = document.querySelector('.signcast-btn.play-btn');
  const prevBtn = document.querySelector('.signcast-btn.prev-btn');
  const nextBtn = document.querySelector('.signcast-btn.next-btn');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (playing) {
        stopPlayback();
        playBtn.innerHTML = '&#9654;';
      } else {
        startPlayback();
        playBtn.innerHTML = '&#10074;&#10074;';
      }
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopPlayback(); prevSlide(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopPlayback(); nextSlide(); });
}

/* ===== SPREADSHEET ANIMATION ===== */
function initSpreadsheetAnimation() {
  const mock = document.querySelector('.spreadsheet-mock');
  if (!mock) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate rows appearing
        const rows = mock.querySelectorAll('.spreadsheet-row:not(.header)');
        rows.forEach((row, i) => {
          row.style.opacity = '0';
          row.style.transform = 'translateX(-20px)';
          row.style.transition = `all 0.5s ease ${i * 0.1}s`;
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
          }, 100);
        });

        // Animate bars
        const bars = mock.querySelectorAll('.bar');
        bars.forEach((bar, i) => {
          const width = bar.getAttribute('data-width') || '60%';
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.transition = `width 1.5s ease ${i * 0.15}s`;
            bar.style.width = width;
          }, 500);
        });

        observer.unobserve(mock);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(mock);
}

/* ===== SMOOTH INTERNAL LINKS ===== */
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ===== PAGE TRANSITION FOR MULTI-PAGE NAV ===== */
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('mailto')) {
      e.preventDefault();
      const overlay = document.querySelector('.page-transition');
      if (overlay) {
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      } else {
        window.location.href = href;
      }
    }
  });
});

// Remove page transition on load + refresh ScrollTrigger
window.addEventListener('load', () => {
  const overlay = document.querySelector('.page-transition');
  if (overlay) {
    overlay.classList.remove('active');
  }
  // Refresh ScrollTrigger after all resources loaded (images etc may shift layout)
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});
