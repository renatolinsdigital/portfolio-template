import templateInjector from './template-injector.js';

const routerEvents = {
  onRouteUpdated: routeName => {
    templateInjector();
    const footerInfo = document.getElementById('footer-info');
    if (!footerInfo) return;
    if (routeName !== 'home') {
      footerInfo.classList.remove('is-hidden');
      document.body.classList.remove('is-home');
    } else {
      footerInfo.classList.add('is-hidden');
      document.body.classList.add('is-home');
    }
  }
};

export default routerEvents;
