import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class InvoiceNewController extends Controller {
  @action
  save({date, amount, id}) {
    const self = this;
    this.store.findRecord('invoice', id).then(function(invoice) {
      invoice.date = date;
      invoice.amount = amount;
      invoice.save();
      return self.transitionToRoute('invoices');
    }).catch(function(error){
      alert(`Error while saving the data: ${JSON.stringify(error)}`);
    });
  }

  @action
  cancel() {
    return this.transitionToRoute('invoices');
  }
}
