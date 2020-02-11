import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | invoice-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the form and it contents inside', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<InvoiceForm />`);

    assert.dom('input.ember-flatpickr-input').exists();
    assert.dom('.md-input').exists();

    assert.dom('button.md-accent').exists();
    assert.dom('button.md-primary').exists();
  });
});
