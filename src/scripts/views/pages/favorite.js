import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import FavoriteRestaurantSearchPresenter from '../liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from '../liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../liked-restaurants/favorite-restaurant-show-presenter';
import { createRestoItemSkeletonTemplate } from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();

const FavoriteRestaurant = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    for (let index = 0; index < 3; index++) {
      restaurantsContainer.appendChild(createRestoItemSkeletonTemplate());
    }

    try {
      restaurantsContainer.innerHTML = '';
      new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
      new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    } catch (error) {
      import('sweetalert')
        .then((module) => module.default)
        .then(() => swal({
          icon: 'error',
          title: 'Failed',
          text: 'Gagal memuat data',
        }))
        .catch((err) => console.log(err));
    }
  },
};

export default FavoriteRestaurant;
