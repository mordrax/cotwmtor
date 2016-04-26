import _ from 'lodash';

/**
 * Return all items from a container
 * @param {function} getState
 * @param {string} cid - container id
 * @returns {Array}
 */
export const getItemsFromContainer = (getState, cid) => {
  const {containers, items} = getState();

  return _(containers[cid])
    .reduce((res, isExists, itemId) => {
      if (isExists)
        (res || (res = [])).push(items[itemId]);
      return res;
    }, []);
};
