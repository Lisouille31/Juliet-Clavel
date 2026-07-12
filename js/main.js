const contactForm = document.getElementById('contact-form');
const formOk = document.getElementById('form-ok');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formOk.style.display = 'block';
    contactForm.reset();
    window.setTimeout(() => {
      formOk.style.display = 'none';
    }, 6000);
  });
}
