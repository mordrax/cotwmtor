import * as repo from '/reducers/reducerRepository.js';
import * as cotw from '/core/cotwContent.js';
import * as Purse from '/core/purse.js';

// player
export const setGender = gender => {
  return {type: "SET_GENDER", gender};
};
export const setDifficulty = level => {
  return {type: "SET_DIFFICULTY", level}
};
export const setAttribute = (attr, value) => {
  return {type: "SET_ATTRIBUTE", attr, value}
};
export const changeName = name => {
  return {type: "CHANGE_NAME", name}
};

/**
 *
 * @param equipmentType string
 * @param itemId string
 * @returns {{type: string, equipmentType: *, itemId: *}}
 */
export const equipItem = (equipmentType, itemId) => {
  expect(equipmentType, 'string');
  expect(itemId, 'string');
  return {type: "PLAYER_EQUIP", equipmentType, itemId}
};
export const unequipItem = equipmentType => {
  return {type: "PLAYER_UNEQUIP", equipmentType}
};
export const movePlayer = direction => {
  return {type: 'PLAYER_MOVE', direction}
};
export const teleportPlayer = coords => {
  return {type: 'PLAYER_MOVE_TELEPORT', coords}
};

export const removeFromPurse = amt => {
  return (dispatch, getState) => {
    const purseId = getState().player.equipment.purse;
    if (!purseId)
      throw 'Trying to update purse, but player has no purse!';
    const purse = getState().items[purseId];
    if (!purse)
      throw `The item ${purseId} does not exist in state.items`;
    if (typeof amt === 'object')
      amt = Purse.purseInCopper(amt);
    
    let change = Purse.subtract(purse, amt);
    if (change != null)
      dispatch(_setPurseContents(purse.id, change));
    else
      console.error(`Trying to remove more than is in the purse!`);
  }
};
export const addToPurse = contents => {
  return (dispatch, getState) => {
    const purseId = getState().player.equipment.purse;
    if (!purseId)
      throw 'Trying to update purse, but player has no purse!';
    const purse = getState().items[purseId];
    if (!purse)
      throw `The item ${purseId} does not exist in state.items`;
    if (!contents)
      return;

    const newContents = _(Purse.denominations).transform((res, x)=> {
      res[x] = (purse[x] || 0) + (contents[x] || 0);
      return res;
    }, {}).value();

    dispatch(_setPurseContents(purse.id, newContents));
  };
};
const _setPurseContents = (purseId, contents) => {
  return {type: 'UPDATE_PURSE', id: purseId, ...contents};
};

// gameReducer
export const updateData = data => {
  return {type: "UPDATE_DATA", data}
};
export const initAreas = areas => {
  return {type: "INIT_AREAS", areas};
};
export const setGameState = state => {
  return {type: "SET_GAME_STATE", ...state}
};
export const addBuildings = buildings => {
  return {type: "INIT_BUILDINGS", buildings}
};
export const initGame = () => {
  return {type: 'INIT_GAME'}
};
export const showPurse = () => {
  return {type: 'SHOW_PURSE'}
};

// itemsReducer
export const _addItem = items => {
  return {type: "ITEM_ADD", items};
};
export const _removeItem = id => {
  return {type: "ITEM_REMOVE", id}
};

export const addNotification = notification =>
{
  return {
    type: "ADD_NOTIFICATION",
    id  : notification.id,
    notification
  }
};

export const removeNotification = id => {
  return {
    type: "REMOVE_NOTIFICATION",
    id
  }
};

export const updateItem = (id, weight) => {
  return {type: 'UPDATE_ITEM', id, weight}
};

export const removeItem = itemId => {
  expect(itemId, 'string');

  return (dispatch, getState) => {
    let item = getState().items[itemId];
    if (_.includes([cotw.ItemType.Bag, cotw.ItemType.Pack], item.base.type)) {
      dispatch(removeAsContainer(item.id));
    }
    dispatch(_removeItem(itemId));
  }
};

export const addItem = (...items) => {
  _.forEach(items, x=> {
    if (!_.isObject(x.base))
      throw `${x.id} does not have a base object.`;
  });

  return (dispatch, getState) => {
    dispatch(_addItem(items));
    _.forEach(items, item => {
      if (_.includes([cotw.ItemType.Bag, cotw.ItemType.Pack], item.base.type)) {
        dispatch(addAsContainer(item.id));
      }
    });
  }
};

/**
 * Returns if the item's cost is lower than the purse amount
 * @param {object} item
 * @param {object} purse
 * @returns {boolean}
 */
const isItemAffordable = (item, purse) => {
  if (!item.base || !item.base.buy) {
    console.error(`Item: ${item.id} has no price and cannot be bought!`);
    return false;
  }

  if (!purse) {
    console.warn(`Player has no purse and cannot afford anything!`);
    return false;
  }


  const playerMoney = (purse.copper || 0) +
    100 * (purse.silver || 0) +
    10000 * (purse.gold || 0) +
    1000000 * (purse.platinum || 0);

  return item.base.buy <= playerMoney;
};

/**
 *
 * @param {string} itemId
 * @param {string} fromContainerId
 * @param {string} toContainerId
 */
export const dndShopItem = (itemId, fromContainerId, toContainerId) =>
  (dispatch, getState) => {
    const state = getState();
    const item = state.items[itemId];

    const fromContainer = state.containers[fromContainerId];
    const fromBuilding = state.buildings[fromContainerId];
    const fromItem = state.items[fromContainerId] || null;

    const toContainer = state.containers[toContainerId];
    const toBuilding = state.buildings[toContainerId];
    const toItem = state.items[toContainerId] || null;

    const isFromPack = fromItem && fromItem.base.type === 'Pack';
    const isFromEquipment = _.includes(_.keys(state.player.equipment), fromContainerId);
    const isFromShop = fromBuilding && fromBuilding.stockedItemTypes;

    const isToPack = toItem && toItem.base.type === 'Pack';
    const isToEquipment = _.includes(_.keys(state.player.equipment), toContainerId);
    const isToShop = toBuilding && toBuilding.stockedItemTypes;
    const isToPurse = toItem && toItem.base.type === cotw.ItemType.Purse;

    // prevent putting containers in itself
    if (toContainerId === itemId) {
      console.warn(`Stop! You can not put a bag in itself!`);
      return;
    }

    // if fromBuilding is a shop, check the player can afford it
    if (isFromShop) {
      if (!isItemAffordable(item, state.items[state.player.equipment.purse])) {
        console.warn(`You cannot afford to buy: ${item.id}`);
        dispatch(addNotification({
          id: _.uniqueId(),
          message: 'Cannot afford item!',
          action: null,
          cb: () => {}
        }));
        return;
      } else {
        dispatch(addNotification({
          id: _.uniqueId(),
          message: `Bought a ${item.base.name}!`,
          action: 'UNDO',
          cb: () => { console.error('TODO: Implement undo purchase.')}
        }))
      }
    }

    // make sure to unequip
    if (isFromEquipment) {
      dispatch(unequipItem(fromContainerId, itemId));
    }


    if (isToShop) {
      dispatch(addNotification({
        id: _.uniqueId(),
        message: `Sold item ${item.base.name}`,
        action: 'UNDO',
        cb: () => {console.error('TODO: Implement undo selling.')}
      }))
    }

    // if toContainer is a pack, check weight/bulk capacity
    if (isToPack) {
      const curWeight = _.reduce(repo.getItemsFromContainer(getState, toItem.id), (sum, i) => sum + i.base.weight, 0);
      const newWeight = (curWeight + (item.weight || item.base.weight));
      if (toItem.base.weightCap < newWeight) {
        console.warn(`Too Heavy! ${item.id} has weight of ${item.base.weight} which is too heavy for ${toItem.id}, current weight ${curWeight}/${toItem.base.weight}`);
        return;
      }
    }

    // if toContainer is a equipment slot, make sure nothing is currently equipped
    if (isToEquipment) {
      // check if an item is already equipped
      if (!!getState().player.equipment[toContainerId])
        return;

      dispatch(equipItem(toContainerId, itemId));
    }

    // if toContainer is a purse, only accept purse items and destroy the incoming purse
    if (isToPurse) {
      if (!item || item.base.type !== cotw.ItemType.Purse)
        return;

      dispatch(addToPurse(_.pick(item, ['copper', 'silver', 'gold', 'platinum'])));
      dispatch(removeItem(item.id));
    }

    dispatch(removeFromContainer(fromContainerId, itemId));
    dispatch(addToContainer(toContainerId, itemId));
  };

// containers
export const addAsContainer = cid => {
  return {type: 'ADD_AS_CONTAINER', cid}
};
export const removeAsContainer = cid => {
  return {type: 'REMOVE_AS_CONTAINER', cid}
};
export const addToContainer = (cid, iid) => {
  if (typeof cid !== 'string' && typeof cid !== 'number')
    throw `addToContainer: Expected a string or number container id but got (${cid})`;
  if (typeof iid !== 'string' && typeof cid !== 'number')
    throw `addToContainer: Expected a string or number item id but got (${iid})`;
  return {type: 'ADD_TO_CONTAINER', cid, iid}
};
export const removeFromContainer = (cid, iid) => {
  return {type: 'REMOVE_FROM_CONTAINER', cid, iid}
};

const expect = (arg, types) => {
  let isVaidType = false;

  if (typeof(types) !== 'object')
    types = [types];

  _.forEach(types, t => {
    if (typeof arg === t)
      isVaidType = true;
  });
  if (!isVaidType)
    throw `Expected a type of [${types}] for the argument: (${arg})`;
};

export const getItems = state =>
    _(state.items).filter(x=>!!x).value()
  ;