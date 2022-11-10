import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoints';
import { createFormAddReview, createReviewItem } from '../views/templates/template-creator';

const ReviewInitiator = {
  async init({
    reviewContainer, addReviewContainer, restaurantReview, restaurantId,
  }) {
    this._reviewContainer = reviewContainer;
    this._addReviewContainer = addReviewContainer;
    this._restaurantReview = restaurantReview;
    this._restaurantId = restaurantId;

    await this._renderAddReviews();
    await this._renderReviews(this._restaurantReview);
  },

  async _renderReviews(customerReviews) {
    this._reviewContainer.innerHTML = '';
    customerReviews.reverse().forEach((review) => {
      this._reviewContainer.appendChild(createReviewItem(review));
    });
  },

  async _renderAddReviews() {
    this._addReviewContainer.innerHTML = createFormAddReview();

    const contentReview = document.querySelector('#contentReview');
    const nameReview = document.querySelector('#nameReview');
    const saveButton = document.querySelector('#btnSave');
    saveButton.addEventListener('click', async () => {
      const review = {
        id: this._restaurantId,
        name: nameReview.value,
        review: contentReview.value,
      };
      try {
        const response = await this._postReview(review);
        if (response.error !== true) {
          import('sweetalert')
            .then((module) => module.default)
            .then(() => swal({
              icon: 'success',
              title: 'Success!',
              text: 'Berhasil menambahkan review',
            }))
            .catch((err) => console.log(err));
          await this._renderReviews(response.customerReviews);
        }
      } catch (error) {
        import('sweetalert')
          .then((module) => module.default)
          .then(() => swal({
            icon: 'error',
            title: 'Failed',
            text: 'Gagal menambahkan review',
          }))
          .catch((err) => console.log(err));
      }
    });
  },

  async _postReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJSON = await response.json();
    return responseJSON;
  },

};

export default ReviewInitiator;
