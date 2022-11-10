import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import RestauranDBSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestoDetailSkeletonTemplate, createRestoDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
        <section class="content">
            <div class="restaurant">
            </div>
            <div class="add-review">
            </div>
            <div class="restaurant__reviews">
                <h3>Review</h3>
                <div class="reviews">
                </div>
            </div>
            <div id="likeButtonContainer"></div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML = createRestoDetailSkeletonTemplate();

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestauranDBSource.detailResto(url.id);
      restaurantContainer.innerHTML = '';
      restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });

      ReviewInitiator.init({
        reviewContainer: document.querySelector('.reviews'),
        addReviewContainer: document.querySelector('.add-review'),
        restaurantReview: restaurant.customerReviews,
        restaurantId: restaurant.id,
      });
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

export default DetailRestaurant;
