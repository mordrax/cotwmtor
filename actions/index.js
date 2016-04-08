import * as repo from '/reducers/reducerRepository.js';

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
export const addItem = item => {
  return {type: "ITEM_ADD", item};
};
export const removeItem = id => {
  return {type: "ITEM_REMOVE", id}
};
export const updateItem = (id, weight) => {
  return {type: 'UPDATE_ITEM', id, weight}
};

export const moveItem = (itemId, fromContainerId, toContainerId) =>
  (dispatch, getState) => {
    const state = getState();
    const item = state.items[itemId];
    const fromContainer = state.containers[fromContainerId];
    const toContainer = state.containers[toContainerId];
    const fromItem = state.items[fromContainerId] || null;
    const toItem = state.items[toContainerId] || null;

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
  _.forEach(types, t => {
    if (typeof arg === t)
      isVaidType = true;
  });
  if (!isVaidType)
    throw `Expected a type of [${types}] for the argument: (${arg})`;
};