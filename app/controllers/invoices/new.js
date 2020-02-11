import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class InvoiceNewController extends Controller {
  @action
  save({date, amount}) {
    const newInvoice = this.store.createRecord('invoice', {
        date,
        amount,
    });
    const self = this;
    newInvoice.save().then(function(){
      self.transitionToRoute('invoices');
    })
    .catch(function(error){
      alert(`Error while saving the data: ${JSON.stringify(error)}`);
    });
  }

  @action
  cancel() {
    return this.transitionToRoute('invoices');
  }
}
