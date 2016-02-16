export default class Item {
  constructor(item) {
    _.extend(this, item);
    console.log(this);
  }
}