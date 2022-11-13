class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = `
        <style>
        :host {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 0px 20px 10px 20px;
            background-color: #8758ff;
        }
          
          h1 {
            color: #fff;
            margin-bottom: 13px;
          }
          
          .nav__list {
            width: 100%;
            padding: 0;
            margin: 0;
          }
          
          .nav__item {
            width: 24%;
            line-height: 24px;
            text-transform: uppercase;
            text-align: center;
          }
          
          .nav a {
            display: inline-block;
            padding: 1.3em;
            margin: 5px;
            text-decoration: none;
            color: #616161;
          }
          
          .nav a:hover {
            font-weight: bold;
            text-decoration: underline;
            color: #000;
          }
          
          #hamburger {
            background: transparent;
            color: #fff;
            border: 0;
            min-height: 44px;
            min-width: 44px;
            font-size: 25px;
            display: flex;
            justify-content: center;
          }

          @media screen and (max-width: 589px) {
            .nav {
              left: 0;
              z-index: 10;
              width: 300px;
              height: 100%;
              position: absolute;
          
              transform: translate(-300px, 0);
              transition: transform 0.3s ease;
              background-color: #fff;
            }
          
            #navigationDrawer.open {
              transform: translate(0, 0);
            }
          
            .nav__item {
              display: list-item;
              border-bottom: 1px solid #e0e0e0;
              width: 100%;
              text-align: left;
            }
          }
          
          @media screen and (min-width: 590px) {
            :host {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding-top: 10px;
            }
          
            h1 {
              margin: 0;
            }
          
            #hamburger {
              display: none;
            }
          
            .nav {
              width: 50%;
            }
            .nav {
              display: flex;
              justify-content: flex-end;
            }
            .nav__list {
              max-width: 300px;
              width: 100%;
              display: flex;
              justify-content: space-around;
              align-content: center;
              list-style-type: none;
            }
          
            .nav__item {
              text-transform: none;
            }
          
            .nav__item a {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 44px;
              min-width: 44px;
              padding: 0;
              text-align: center;
              color: #fff;
              margin: 0;
            }
            .nav a:hover {
              color: #616161;
            }
          }
        </style>
        
        <h1>RestoKita</h1>
        <button id="hamburger" aria-label="navigation-menu">☰</button>
        <nav id="navigationDrawer" class="nav">
            <ul class="nav__list">
            <li class="nav__item"><a href="/">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item">
                <a href="https://github.com/maulana-alamsyah">About Us</a>
            </li>
            </ul>
        </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
