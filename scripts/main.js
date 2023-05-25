import route from './router.js';

const toggleNav = event => {
  const isHomeLink = event.target.closest('#home-link');
  if (!isHomeLink) document.body.classList.toggle('open-menu');
};

window.addEventListener('load', function () {
  // Menu toggling actions
  const overlay = document.getElementById('overlay');
  const closeIcon = document.getElementById('close-icon');
  const burgerIcon = document.getElementById('burger-icon');

  overlay.addEventListener('click', toggleNav);
  closeIcon.addEventListener('click', toggleNav);
  burgerIcon.addEventListener('click', toggleNav);

  // Attaches links to the routing function
  const links = document.querySelectorAll('nav a');
  links.forEach(link => link.addEventListener('click', route));
  links.forEach(link => link.addEventListener('click', toggleNav));

  //Getting current year
  const yearText = document.getElementById('currentYear');
  const currentYear = new Date().getFullYear();
  yearText.innerHTML = currentYear;
});

window.addEventListener('scroll', function () {
  var header = document.getElementById('app-header');
  if (window.scrollY > 0) {
    header.classList.add('bg-dark');
  } else {
    header.classList.remove('bg-dark');
  }
});
