class ReviewItem extends HTMLElement {
  set customerReview(customerReview) {
    this._customerReview = customerReview;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="review-item__header">
                <div class="review-item__header__profile">
                    <picture>
                      <source media="(max-width: 600px)" type="image/webp" srcset="./images/avatar-small.webp">
                      <source media="(min-width: 600px)" type="image/webp" srcset="./images/avatar-large.webp">
                      <source media="(max-width: 600px)" data-srcset="./images/avatar-small.jpg" type="image/jpeg">
                      <img class="img-profile lazyload" data-src="./images/avatar-large.jpg" 
                          alt="profile">
                    </picture>
                </div>
                <div class="review-item__header__text">
                    <div class="review-item__name">${this._customerReview.name}</div>
                    <div class="review-item__date">${this._customerReview.date}</div>
                </div>
            </div>
            <div class="review-item__content">${this._customerReview.review}</div>
        `;
  }
}

customElements.define('review-item', ReviewItem);
