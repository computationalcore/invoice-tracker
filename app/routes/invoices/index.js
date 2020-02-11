import Route from '@ember/routing/route';

export default class InvoiceEditRoute extends Route {
  model() {
    return this.get('store').findAll('invoice');
  }
}
