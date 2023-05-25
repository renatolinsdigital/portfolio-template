import routes from './routes.js';
import * as data from '../data/index.js';
import interpolate from './interpolate.js';

const handleNavigation = async () => {
  // Getting the page html based on the route
  const path =
    window.location.pathname === '/' ? '/home' : window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then(data => data.text());

  // Adding data according to route and page names
  const routeName = route.replace(/\/pages\/|\.html/g, '');
  const pageData = data[routeName];
  const parsedHtml = interpolate(html, pageData);

  document.getElementById('root').innerHTML = parsedHtml;

  // Dealing with classes that will impact home page only
  const footerInfo = document.getElementById('footer-info');
  footerInfo.classList.add('is-hidden');
  document.body.classList.add('is-home');

  if (routeName !== 'home') {
    footerInfo.classList.remove('is-hidden');
    document.body.classList.remove('is-home');
  }
  // Ps. In bigger apps, this type of code (related to a specific page of the app) should be manage within
  // a state handling logic, not inside the router. I'll keep it here for the sake of simplicity
};

const route = event => {
  event = event || window.event;
  event.preventDefault();
  const target = event.target.closest('a') || event.target;
  window.history.pushState({}, '', target.href);
  handleNavigation();
};

window.onpopstate = handleNavigation;
handleNavigation();

export default route;
