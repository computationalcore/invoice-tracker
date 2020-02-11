import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CounterComponent extends Component {
  @tracked invoices = this.args.model;
  @tracked startDate = null;
  @tracked endDate = null;
  @tracked isFiltered = false;

  get total() {
    return this.invoices.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0.0);
  }

  @action
  changeStartDate(date) {
    this.startDate = new Date(date);
  }

  @action
  changeEndDate(date) {
    this.endDate = new Date(date);
  }

  @action
  filterByDate() {
    if(!this.startDate || !this.endDate) {
      return alert('Start and end dates are required for filtering');
    }
    if(this.endDate < this.startDate) {
      return alert('Start date need to be equal or less than end date');
    }
    this.invoices = this.args.model.filter(invoice => invoice.date >= this.startDate && invoice.date <= this.endDate);
    this.isFiltered = true;
  }

  @action
  clearDateFilter() {
    this.invoices = this.args.model;
    this.isFiltered = false;
  }
}
