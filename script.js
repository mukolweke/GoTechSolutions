/* =========================================
   GoTech Solutions – script.js
   ========================================= */

/* ── NAVBAR scroll state ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


/* ── MOBILE NAV toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }
});


/* ── SCROLL-REVEAL: service cards + testimonial cards ── */
const revealCards = document.querySelectorAll('.service-card, .testi-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card  = entry.target;
      const delay = parseInt(card.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        card.classList.add('visible');
        card.style.transition =
          `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;
      }, 60);
      revealObserver.unobserve(card);
    }
  });
}, { threshold: 0.1 });

revealCards.forEach(card => revealObserver.observe(card));


/* ── ACTIVE NAV LINK on scroll ── */
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));


/* ── SMOOTH SCROLL fallback ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ── CONTACT FORM validation ── */
const form        = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

function validateField(id, errorId, condition, message) {
  const el  = document.getElementById(id);
  const err = document.getElementById(errorId);
  if (!condition(el.value.trim())) {
    el.classList.add('error'); err.textContent = message; return false;
  }
  el.classList.remove('error'); err.textContent = ''; return true;
}
function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    const el = document.getElementById(id);
    const ok = id === 'email' ? isValidEmail(el.value.trim()) : el.value.trim().length > 0;
    if (ok) { el.classList.remove('error'); document.getElementById(`${id}Error`).textContent = ''; }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameOk    = validateField('name',    'nameError',    v => v.length >= 2,   'Please enter your name.');
  const emailOk   = validateField('email',   'emailError',   isValidEmail,          'Please enter a valid email address.');
  const messageOk = validateField('message', 'messageError', v => v.length >= 10,  'Message must be at least 10 characters.');
  if (!nameOk || !emailOk || !messageOk) return;

  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').textContent = 'Sending…';

  setTimeout(() => {
    submitBtn.style.display = 'none';
    formSuccess.classList.add('show');
    form.querySelectorAll('input, textarea').forEach(el => { el.value = ''; el.classList.remove('error'); });
    setTimeout(() => {
      submitBtn.style.display = 'flex';
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
      formSuccess.classList.remove('show');
    }, 6000);
  }, 1200);
});


/* ── WHATSAPP QR CODE ── */
// Generate QR pointing to WhatsApp chat link for +254707490519
function generateQR() {
  const container = document.getElementById('qrcode');
  if (!container) return;
  const applyQRImageA11y = () => {
    const qrImg = container.querySelector('img');
    if (!qrImg) return;
    qrImg.alt = 'WhatsApp QR code for GoTech Solutions';
    qrImg.width = 160;
    qrImg.height = 160;
    qrImg.loading = 'lazy';
    qrImg.decoding = 'async';
  };

  // Use qrcodejs if loaded, otherwise draw with canvas API fallback
  if (typeof QRCode !== 'undefined') {
    new QRCode(container, {
      text: 'https://wa.me/254707490519',
      width: 160,
      height: 160,
      colorDark: '#0d3b6e',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });

    // Improve accessibility and reduce CLS for generated QR image.
    applyQRImageA11y();
    setTimeout(applyQRImageA11y, 0);
  } else {
    // Fallback: show a styled link if library didn't load
    container.innerHTML = `
      <div style="width:160px;height:160px;display:flex;flex-direction:column;align-items:center;
                  justify-content:center;background:#fff;border-radius:8px;padding:12px;text-align:center;
                  font-size:0.78rem;color:#0d3b6e;font-family:sans-serif;gap:8px;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#25d366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span>Scan code above<br/>or tap button below</span>
      </div>`;
  }
}

// Run after DOM + scripts load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateQR);
} else {
  // Small delay to let qrcodejs initialise
  setTimeout(generateQR, 200);
}


/* ── HERO PARALLAX ── */
const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  orbs.forEach((orb, i) => {
    orb.style.transform = `translateY(${y * [0.06, 0.04, 0.08][i]}px)`;
  });
}, { passive: true });
