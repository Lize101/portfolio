const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});