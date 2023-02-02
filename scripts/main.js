import { pages } from './pages.js';

const toggleNav = () => {
  document.body.classList.toggle("open-menu");
}

window.addEventListener("load", function () {

  // Menu toggling actions
  const overlay = document.getElementById('overlay');
  const closeIcon = document.getElementById('close-icon');
  const burgerIcon = document.getElementById('burger-icon');
  
  overlay.addEventListener('click', toggleNav);
  closeIcon.addEventListener('click', toggleNav);
  burgerIcon.addEventListener('click', toggleNav);

  // Navigation handler
  const handleNavigation = event => {
    if (event.preventDefault) {
      event.preventDefault();
      toggleNav();
    }
    const content = document.getElementById('content');
    const page = event.target.getAttribute('href').slice(1);
    content.innerHTML = pages[page];
    
  };

  // Add event listeners to the links
  const links = document.querySelectorAll('nav a');
  links.forEach(link => link.addEventListener('click', handleNavigation));

  // Show the default page
  handleNavigation({ target: links[0] });

  //Getting current year
  const yearText = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  yearText.innerHTML = currentYear;


});
