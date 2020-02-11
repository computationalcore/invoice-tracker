import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a header component', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Header @text="Header Text Test" />`);

    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.dom('.invoice-header').exists();
    assert.dom('.invoice-header').hasText('Header Text Test');
  });
});
