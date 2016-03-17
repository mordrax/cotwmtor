import _ from 'lodash';
import {Items, ItemType} from '../enums/cotwContent.js';

export const generateItems = (itemTypes, amt = 10) => {
  let items = {};
  // once off generation of items
  while (amt-- > 0) {
    // get a random item from a random item type in the item types array
    let itemType = _.sample(itemTypes);
    let base = _.sample(_.values(Items[itemType]));

    let item = generateItem(base, {
      price: base.buy,
      type : itemType
    });

    items[item.id] = item;
  }
  return items;
};

/**
 *
 * @param base
 * @param props {type: ItemType}
 */
export const generateItem = (base, props) => {
  let name = base.name.replace(/\s+/g, '');
  if (props.type && props.type == ItemType.Pack)
    props.cid = name + _.uniqueId();
  let id = name + _.uniqueId();
  return _.extend({}, {id, base}, props);
};