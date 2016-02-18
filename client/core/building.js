import Item from '/client/core/item.js'

export default class Building {
  /**
   * @param {name, type, area, coord, stockedItemTypes}
   */
  constructor(params) {
    _.extend(this, params);
    this.items = {};
    // once off generation of items
    _.forEach(params.stockedItemTypes, (stockedItemType) => {
      let item = new Item(_.sample(_.values(stockedItemType)));
      this.items[item.id] = item;
    })
  }

  addItem(item) {
    this.items[item.id] = item;
  }


}

