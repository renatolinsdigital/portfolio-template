import routes from './routes.js';
import * as data from '../data/index.js';
import interpolate from './interpolate.js';

const handleNavigation = async () => {

  // Getting the page html based on the route
  const path = window.location.pathname === '/' ? '/home' : window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());

  // Adding data according to route and page names
  const routeName = route.replace(/\/pages\/|\.html/g, "");
  const pageData = data[routeName];
  const parsedHtml = interpolate(html, pageData)
 
  document.getElementById("main").innerHTML = parsedHtml;
}

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  const target = event.target.closest("a") || event.target;
  window.history.pushState({}, "", target.href);
  handleNavigation();
  
}

window.onpopstate = handleNavigation;
handleNavigation();

export default route;