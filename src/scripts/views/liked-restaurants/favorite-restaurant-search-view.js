import { createRestoItemTemplate } from '../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <section class="content">
        <div class="favorite">
            <div class="favorite__heading">
                <h2 class="favorite__label">Favorite Restaurant</h2>
                <input id="query" type="text" placeholder="Cari disini...">
            </div>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
    </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      document.getElementById('restaurants').innerHTML = '';
      restaurants.reduce((carry, restaurant) => carry.concat(document.getElementById('restaurants').appendChild(createRestoItemTemplate(restaurant))), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
      document.getElementById('restaurants').innerHTML = html;
    }

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
