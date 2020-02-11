import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class extends Controller {
  @action
  edit(id) {
    this.transitionToRoute('invoices.edit', id);
  }

  @action
  delete(id) {
    const invoice = this.store.peekRecord('invoice', id);
    invoice.destroyRecord();
  }
}
