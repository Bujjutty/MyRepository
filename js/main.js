// PadmaPure Foods – site interactions
(function () {
  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    })
  );

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.card, .feature, .steps li, .section-head, .two-col > *');
  if ('IntersectionObserver' in window) {
    revealEls.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  }

  // Contact form: validates, then opens the visitor's email client.
  // TODO: set this to your real business email address.
  const CONTACT_EMAIL = 'info@example.com';
  const form = document.getElementById('contact-form');
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const message = data.get('message').trim();
    if (!name || !email || !message || !form.email.checkValidity()) {
      status.textContent = 'Please fill in your name, a valid email and a message.';
      status.className = 'form-status error';
      return;
    }
    const phone = data.get('phone').trim();
    const body = `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Enquiry from ' + name)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Opening your email app… Thank you for reaching out!';
    status.className = 'form-status ok';
    form.reset();
  });
})();
