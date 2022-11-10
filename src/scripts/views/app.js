import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;
    this._initialApp();
  }

  _initialApp() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    if (url === '/') {
      document.querySelector('hero-image').classList.remove('hidden');
    } else {
      document.querySelector('hero-image').className = '';
      document.querySelector('hero-image').classList.add('hidden');
    }

    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
