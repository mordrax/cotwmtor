import _ from 'lodash';

/**
 * Return all items from a container
 * @param {Object} state
 * @param {Number} cid - container id
 * @returns {Array}
 */
export const getItemsFromContainer = (state, cid) => {
  let items = [];
  _.forEach(state.containers[cid], (isExist, itemId) => {
    if (!!isExist)
      items.push(state.items[itemId]);
  });
  return items;
};
