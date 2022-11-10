import API_ENDPOINT from '../../globals/api-endpoints';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-item">
            <div class="restaurant-item__header">
                <picture>
                  <source media="(max-width: 600px)" data-srcset="${API_ENDPOINT.IMAGE_SMALL(this._restaurant.pictureId)}">
                  <source media="(max-width: 1000px)" data-srcset="${API_ENDPOINT.IMAGE_MEDIUM(this._restaurant.pictureId)}">
                  <img class="restaurant-item__header__thumbnail lazyload" data-src="${API_ENDPOINT.IMAGE_LARGE(this._restaurant.pictureId)}" 
                      alt="${this._restaurant.name || '-'}">
                </picture>
                <div class="restaurant-item__header__city__container">
                    <span class="restaurant-item__header__city__text">${this._restaurant.city || '-'}</span>
                </div>
            </div>
            <div class="restaurant-item__content">
            <p>Rating: ${this._restaurant.rating || '-'}</p>
            <h3 class="restaurant__name"><a href="/#/detail/${this._restaurant.id}">${this._restaurant.name || '-'}</a></h3>
            <p>${this._restaurant.description || '-'}</p>
            </div>
        </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
