import _ from 'lodash';
import {Items, ItemType} from '/client/enums/cotwContent.js';

export const generateItems = (itemTypes, amt=10) => {
  let items = {};
  // once off generation of items
  while(amt-- > 0) {
    // get a random item from a random item type in the item types array
    let itemType = _.sample(itemTypes);
    let base = _.sample(_.values(Items[itemType]));

    let item = generateItem(base, {
      price : base.buy,
      type: itemType
    });

    items[item.id] = item;
  }
  return items;
};

export const generateItem = (base, props) =>{
  let id = base.name.replace(/\s+/g, '') + _.uniqueId();
  return _.extend({}, {id, base}, props);
};