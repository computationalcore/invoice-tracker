import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import moment from 'moment';

export default class InvoiceFormComponent extends Component {
  @tracked id = this.args.id;
  @tracked date = this.args.date;
  @tracked placeholderDate =  this.args.date ? moment(this.args.date).format('MM/DD/YYYY') : "Invoice date";
  @tracked amount = this.args.amount/100;

  @action
  save() {
    if(!this.date) {
      return alert('Invoice date is required');
    }
    this.args.saveAction({
      id: this.id,
      date: new Date(this.date),
      amount: this.amount*100,
    });
  }

  @action
  changeDate(date) {
    this.date = date;
  }

  @action
  changeAmount(amount) {
    this.amount = amount;
  }
}
