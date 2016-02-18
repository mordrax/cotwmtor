import _ from 'lodash';

export default class Item {
  constructor(item) {
    _.extend(this, item);
    console.log(this);
    this.id = _.uniqueId();
  }
}