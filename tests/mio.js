module.exports = {
  'Demo test marius' : function (browser) {
    browser
      //url here
      .url('')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=searchString]', 'marius')
      .waitForElementVisible('button.submit-button', 1000)
      .click('button.submit-button')
      .waitForElementVisible('.search-results', 1000)
      .assert.containsText('.search-results', 'marius')
      .end();
  }
};