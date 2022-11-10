class HeroImage extends HTMLElement {
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
            align-items: center;
            justify-content: center;
            min-height: 380px;
            text-align: center;
            background-position: center;
            background-color: green;
            color: #fff;
          }
          
          .hero {
            width: 100%;
            background-image: url("/images/heros/hero-image_4-large.jpg");
            background-image: url("/images/heros/hero-image_4-large.webp");
            background-size: cover;
          }

          .hero__inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px;
            min-height: 380px;
            padding: 0;
            background-color: rgba(25, 42, 49, 0.5)
          }

          .hero__title {
            font-size: 40px;
          }

          .hero__tagline {
            margin-top: 0;
            font-size: 25px;
          }

          @media screen and (max-width: 600px) {
            .hero {
              background-image: url("/images/heros/hero-image_4-small.jpg");
              background-image: url("/images/heros/hero-image_4-small.webp");
            }
          }

          @media screen and (min-width: 1200px) {
            .hero {
              margin: 0 auto;
              min-width: 1000px;
            }
          }
          </style>
          
          <div class="hero">
            <div class="hero__inner">
              <h2 class="hero__title">RestoKita Apps</h2>
              <p class="hero__tagline">
                Memudahkan Anda menemukan restaurant di seluruh Indonesia.
              </p>
            </div>
          </div>
        `;
  }
}

customElements.define('hero-image', HeroImage);
