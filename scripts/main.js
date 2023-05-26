import route from './router.js';

const toggleNav = event => {
  const isHomeLink = event.target.closest('#logo-link');
  if (!isHomeLink) document.body.classList.toggle('open-menu');
};

window.addEventListener('load', async function () {
  // Injecting app layout templates (templates outside routing)
  const placeHolders = document.querySelectorAll('[data-template]');

  for (const placeHolder of placeHolders) {
    const templateName = placeHolder.getAttribute('data-template');
    const templatePath = `../app-templates/${templateName}.html`;
    const templateHtml = await fetch(templatePath).then(data => data.text());

    const parser = new DOMParser();
    const templateDoc = parser.parseFromString(templateHtml, 'text/html');
    const template = templateDoc.querySelector('template');
    const templateContent = template.content.cloneNode(true);
    placeHolder.parentNode.replaceChild(templateContent, placeHolder);
  }

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

  //Getting current year for showing on footer
  const yearText = document.getElementById('currentYear');
  const currentYear = new Date().getFullYear();
  yearText.innerHTML = currentYear;
});

window.addEventListener('scroll', function () {
  var header = document.getElementById('app-header-nav');
  if (!header) return;
  if (window.scrollY > 0) {
    header.classList.add('bg-dark');
  } else {
    header.classList.remove('bg-dark');
  }
});
