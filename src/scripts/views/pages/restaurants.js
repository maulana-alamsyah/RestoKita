import RestauranDBSource from '../../data/restaurantdb-source';
import { createRestoItemSkeletonTemplate, createRestoItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
            <section class="content">
                <div class="explore">
                    <h2 class="explore__label">Eplore Restaurant</h2>
                    <div class="restaurants"></div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    for (let index = 0; index < 3; index++) {
      restaurantsContainer.appendChild(createRestoItemSkeletonTemplate());
    }

    try {
      const restaurants = await RestauranDBSource.listResto();
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.appendChild(createRestoItemTemplate(restaurant));
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

export default Restaurants;
