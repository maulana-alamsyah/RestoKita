import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.scss';
import '../styles/responsive.css';
import './views/components/app-bar';
import './views/components/hero-image';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('app-bar').shadowRoot.querySelector('#hamburger'),
  drawer: document.querySelector('app-bar').shadowRoot.querySelector('#navigationDrawer'),
  hero: document.querySelector('hero-image'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
