const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.waitForText('Tidak ada restaurant untuk ditampilkan');
  I.see('Tidak ada restaurant untuk ditampilkan');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForText('Tidak ada restaurant untuk ditampilkan');
  I.see('Tidak ada restaurant untuk ditampilkan');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.waitForText('Tidak ada restaurant untuk ditampilkan');
  I.see('Tidak ada restaurant untuk ditampilkan');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a');
  I.seeElement('.restaurant__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name a').at(i));
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.waitForElement('.restaurant__name');
    names.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.waitForElement('#query');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant__name');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
