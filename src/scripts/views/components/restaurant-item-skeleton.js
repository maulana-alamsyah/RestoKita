class RestaurantItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="restaurant-item">
            <div class="restaurant-item__header">
                <img class="restaurant-item__header__thumbnail skeleton">
            </div>
            <div class="restaurant-item__content">
              <div class="skeleton skeleton-text rating"></div>
              <div class="skeleton skeleton-text name"></div>
              <div class="skeleton skeleton-text description"></div>
              <div class="skeleton skeleton-text description"></div>
              <div class="skeleton skeleton-text description"></div>
            </div>
        </div>
        `;
  }
}

customElements.define('restaurant-item-skeleton', RestaurantItemSkeleton);
