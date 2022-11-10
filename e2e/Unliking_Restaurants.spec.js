const assert = require('assert');

Feature('Unliking Restaurants');
let firstRestaurant = null;
let firstRestaurantName = null;

Before(async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForText('Tidak ada restaurant untuk ditampilkan');
  I.see('Tidak ada restaurant untuk ditampilkan');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a');
  I.seeElement('.restaurant__name a');

  firstRestaurant = locate('.restaurant__name a').first();
  firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('.restaurant__name a'));

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForText('Tidak ada restaurant untuk ditampilkan');
  I.see('Tidak ada restaurant untuk ditampilkan');
});
