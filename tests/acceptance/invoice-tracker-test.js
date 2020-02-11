import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember invoice tracker', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1.invoice-header').hasText('Welcome to Invoice Tracker!');
    assert.dom('h3').hasText('Features');

    assert.dom('.intro a.md-button').hasText('Open App');
    await click('.intro a.md-button');

    assert.equal(currentURL(), '/invoices');
  });

  test('visiting /invoices', async function(assert) {
    await visit('/invoices');

    assert.equal(currentURL(), '/invoices');
    assert.dom('h1.invoice-header').hasText('Invoices');

    assert.dom('a.md-primary').exists();

    assert.dom('.invoice-table-container').exists();

    await click('a.md-primary');

    assert.equal(currentURL(), '/invoices/new');
  });

  test('visiting /invoices/new', async function(assert) {
    await visit('/invoices/new');

    assert.equal(currentURL(), '/invoices/new');

    assert.dom('h1.invoice-header').hasText('Add Invoice');

    assert.dom('input.ember-flatpickr-input').exists();
    assert.dom('.md-input').exists();

    assert.dom('button.md-accent').exists();
    assert.dom('button.md-primary').exists();

    await click('button.md-accent');

    assert.equal(currentURL(), '/invoices');
  });

});
