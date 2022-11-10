import API_ENDPOINT from '../../globals/api-endpoints';
import '../components/restaurant-item';
import '../components/restaurant-item-skeleton';
import '../components/review-item';

const _extractWithComa = (arrayElement) => {
  let result = '';
  const arrayLength = arrayElement.length;
  const getItem = (item, index) => {
    if (index < arrayLength - 1) {
      result += `${item.name}, `;
    } else {
      result += item.name;
    }
  };
  arrayElement.map(getItem);
  return result;
};

const createReviewItem = (customerReview) => {
  const reviewItem = document.createElement('review-item');
  reviewItem.customerReview = customerReview;

  return reviewItem;
};

const createRestoItemTemplate = (restaurant) => {
  const restaurantItem = document.createElement('restaurant-item');
  restaurantItem.restaurant = restaurant;

  return restaurantItem;
};

const createRestoItemSkeletonTemplate = () => {
  const RestaurantItemSkeleton = document.createElement('restaurant-item-skeleton');

  return RestaurantItemSkeleton;
};

const createRestoDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <picture>
      <source media="(max-width: 600px)" data-srcset="${API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}">
      <source media="(max-width: 1000px)" data-srcset="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}">
      <img class="restaurant__image lazyload" data-src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" 
          alt="${restaurant.name || '-'}">
    </picture>
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h4>Categories</h4>
        <p>${_extractWithComa(restaurant.categories)}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant__description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__menus">
        <h3>Menus</h3>
        <ul>
        <li>
        <h4>Foods:</h4>
        <p>${_extractWithComa(restaurant.menus.foods)}</p>
        </li>
        <li>
        <h4>Drinks:</h4>
        <p>${_extractWithComa(restaurant.menus.drinks)}</p>
        </li>
        </ul>
    </div>
`;

const createRestoDetailSkeletonTemplate = () => `
    <div class="restaurant__name skeleton skeleton-text name"></div>
    <img class="restaurant__image skeleton skeleton-image" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <div class="skeleton skeleton-text name"></div>
        <h4>Categories</h4>
        <div class="skeleton skeleton-text name"></div>
        <h4>Rating</h4>
        <div class="skeleton skeleton-text rating"></div>
    </div>
    <div class="restaurant__description">
        <h3>Description</h3>
        <div class="skeleton skeleton-text description"></div>
        <div class="skeleton skeleton-text description"></div>
        <div class="skeleton skeleton-text description"></div>
        <div class="skeleton skeleton-text description"></div>
    </div>
    <div class="restaurant__menus">
        <h3>Menus</h3>
        <ul>
        <li>
        <h4>Foods:</h4>
        <div class="skeleton skeleton-text description"></div>
        </li>
        <li>
        <h4>Drinks:</h4>
        <div class="skeleton skeleton-text description"></div>
        </li>
        </ul>
    </div>
`;

const createFormAddReview = () => `
    <label for="contentReview"><h3>Add Review</h3></label>
    <div class="add-review__form">
        <div class="add-review__form__input">
            <input type="text" id="nameReview" name="nameReview" placeholder="Masukkan nama anda...">
            <textarea id="contentReview" name="contentReview" placeholder="Masukkan review anda..."></textarea>
        </div>
        <button id="btnSave">Save</button>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestoItemTemplate,
  createRestoItemSkeletonTemplate,
  createRestoDetailTemplate,
  createRestoDetailSkeletonTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createReviewItem,
  createFormAddReview,
};
