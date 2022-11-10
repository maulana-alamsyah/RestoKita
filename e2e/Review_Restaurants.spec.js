const assert = require('assert');

Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review restaurant', async ({ I }) => {
  const reviewerName = 'john';
  const reviewContent = 'mantap 2';
  I.waitForElement('.restaurant__name a');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  I.click(firstRestaurant);

  I.waitForElement('#nameReview');
  I.fillField('nameReview', reviewerName);
  I.fillField('contentReview', reviewContent);
  I.click('#btnSave');

  I.waitForElement('.swal-title');
  const modalTitle = await I.grabTextFrom('.swal-title');

  assert.strictEqual(modalTitle, 'Success!');

  I.waitForElement('.swal-button');
  I.click('.swal-button');

  I.waitForElement('.review-item__name');
  const displayReviewerName = await I.grabTextFrom('.review-item__name');

  I.waitForElement('.review-item__content');
  const displayReviewContent = await I.grabTextFrom('.review-item__content');

  assert.strictEqual(displayReviewerName, reviewerName);
  assert.strictEqual(displayReviewContent, reviewContent);
});
