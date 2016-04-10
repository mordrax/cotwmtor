import * as repo from '/reducers/reducerRepository.js';
import * as cotw from '/core/cotwContent.js';

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
  expect(equipmentType, ['string']);
  expect(itemId, ['string']);
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
export const updatePurse = contents => {
  return (dispatch, getState) => {
    const purseId = getState().player.equipment.purse;
    if (!purseId)
      throw 'Trying to update purse, but player has no purse!';
    const purse = getState().items[purseId];
    if (!purse)
      throw `The item ${purseId} does not exist in state.items`;
    if (!contents)
      return;

    const purseCombined = (purse, newPurse, coinType) => {
      return (parseInt(purse[coinType]) + parseInt(newPurse[coinType])) || 0;
    };

    let purseCombined_coinType = _.curry(purseCombined)(purse, contents);

    let anyValuesLessThanZero = _(['copper', 'silver', 'gold', 'platinum'])
      .map(purseCombined_coinType)
      .filter(x=>x<0)
      .value()
      .length > 0;

    if (anyValuesLessThanZero)
      console.warn(`You cannot have negative coins.`);
    else
      dispatch(_updatePurse(purse.id, contents));
  };
};
const _updatePurse = (purseId, contents) => {
  return {type: 'UPDATE_PURSE', id:purseId, ...contents};
};

// game
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

// items
export const _addItem = item => {
  return {type: "ITEM_ADD", item};
};
export const _removeItem = id => {
  return {type: "ITEM_REMOVE", id}
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

export const addItem = item => {
  expect(item, 'object');
  expect(item.base, 'object');

  return (dispatch, getState) => {
    dispatch(_addItem(item));
    if (_.includes([cotw.ItemType.Bag, cotw.ItemType.Pack], item.base.type)) {
      dispatch(addAsContainer(item.id));
    }
  }
};

export const moveItem = (itemId, fromContainerId, toContainerId) =>
  (dispatch, getState) => {
    const state = getState();
    const item = state.items[itemId];
    const fromContainer = state.containers[fromContainerId];
    const toContainer = state.containers[toContainerId];
    const fromItem = state.items[fromContainerId] || null;
    const toItem = state.items[toContainerId] || null;

    if (toContainerId === itemId) {
      console.warn(`Stop! You can not put a bag in itself!`);
      return;
    }

    if (toItem && toItem.base.type === 'Pack') {
      const curWeight = _.reduce(repo.getItemsFromContainer(getState(), toItem.id), (sum, i) => sum + i.base.weight, 0);
      const newWeight = (curWeight + (item.weight || item.base.weight));
      if (toItem.base.weightCap < newWeight) {
        console.warn(`Too Heavy! ${item.id} has weight of ${item.base.weight} which is too heavy for ${toItem.id}, current weight ${curWeight}/${toItem.base.weight}`);
        return;
      }
    }

    if (_.includes(_.keys(state.player.equipment), toContainerId)) {
      // check if an item is already equipped
      if (!!getState().player.equipment[toContainerId])
        return;

      dispatch(equipItem(toContainerId, itemId));
    }

    if (_.includes(_.keys(state.player.equipment), fromContainerId)) {
      dispatch(unequipItem(fromContainerId, itemId));
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