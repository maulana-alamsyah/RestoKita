import DetailRestaurant from '../views/pages/detail';
import FavoriteRestaurant from '../views/pages/favorite';
import Restaurants from '../views/pages/restaurants';

const routes = {
  '/': Restaurants,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
