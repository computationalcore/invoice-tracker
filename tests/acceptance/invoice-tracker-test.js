import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember invoice tracker', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Invoice Tracker!');
    assert.dom('h3').hasText('Features');

    assert.dom('.intro a.md-button').hasText('Open App');
    await click('.intro a.md-button');

    assert.equal(currentURL(), '/');
  });
});
