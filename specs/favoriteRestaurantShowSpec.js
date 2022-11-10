import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/liked-restaurants/favorite-restaurant-show-presenter';

describe('Showing all favorite restaurants', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: '11',
          name: 'Melting Pot',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
          pictureId: '14',
          city: 'Medan',
          rating: 4.2,
        },
        {
          id: '22',
          name: 'Kafe Kita',
          description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
          pictureId: '25',
          city: 'Gorontalo',
          rating: 4,
        },
      ]);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
