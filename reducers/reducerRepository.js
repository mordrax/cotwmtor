import _ from 'lodash';

export const getItemsFromContainer = (state, cid) => {
  let items = [];
  _.forEach(state.containers[cid], (isExist, itemId) => {
    if (!!isExist)
      items.push(state.items[itemId]);
  });
  return items;
};
