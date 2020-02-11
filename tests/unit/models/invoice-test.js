import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | invoice', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    const date = new Date();
    let invoice = store.createRecord('invoice', {
      id: 'teste',
      date: date,
      amount: 101.99,
    });

    assert.equal(invoice.id, 'teste');

    assert.equal(invoice.date, date);

    assert.equal(invoice.amount, 101.99);
  });
});
