import _ from 'lodash';
import {Items, ItemType} from './cotwContent.js';

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
 * @param base: cotwContent.Items
 * @param props {type: ItemType}
 */
export const generateItem = (base, props = {}) => {
  const name = base.name.replace(/\s+/g, '');
  if (!base.type)
    throw `Invalid item spec, no item.type found!`;

  if (base.type == ItemType.Pack)
    props.cid = name + _.uniqueId();

  if (base.type == ItemType.Purse)
    props = _.extend({}, {copper:0, silver:0, gold:0, platinum:0}, props);

  const id = name + _.uniqueId();
  return _.extend({}, {id, base}, props);
};