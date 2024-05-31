// const mobileToggle = document.querySelector('.mobile-toggle');
// const mobileNav = document.querySelector('.mobile-nav');

// mobileToggle.addEventListener('click', () => {
//   mobileNav.classList.toggle('active');
// });

const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileMenuItems = document.querySelectorAll('.nav li a');

mobileToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('active'); // Hide the menu
  });
});