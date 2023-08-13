import templateInjector from './template-injector.js';
import attachSharedScripts from './shared/index.js';

const routerEvents = {
  onRouteUpdated: routeName => {
    templateInjector();
    attachSharedScripts();
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
