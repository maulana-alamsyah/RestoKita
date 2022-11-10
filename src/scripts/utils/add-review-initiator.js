import { createFormAddReview } from '../views/templates/template-creator';

const AddReviewInitiator = {
  async init({ addReviewContainer }) {
    this._addReviewContainer = addReviewContainer;

    await this._renderReviews();
  },

  async _renderReviews() {
    this._addReviewContainer.innerHTML = createFormAddReview();
  },
};

export default AddReviewInitiator;
