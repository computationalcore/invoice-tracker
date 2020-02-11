import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | invoice-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the table empty', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<InvoiceTable />`);

    assert.dom('.invoice-table-container').exists();
  });
});

