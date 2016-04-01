export default {
  // player
  setGender     : gender => {
    return {type: "SET_GENDER", gender};
  },
  setDifficulty : level => {
    return {type: "SET_DIFFICULTY", level}
  },
  setAttribute  : (attr, value) => {
    return {type: "SET_ATTRIBUTE", attr, value}
  },
  changeName    : name => {
    return {type: "CHANGE_NAME", name}
  },
  equipItem     : (equipmentType, itemId) => {
    return {type: "PLAYER_EQUIP", equipmentType, itemId}
  },
  unequipItem   : equipmentType => {
    return {type: "PLAYER_UNEQUIP", equipmentType}
  },
  movePlayer    : direction => {
    return {type: 'PLAYER_MOVE', direction}
  },
  teleportPlayer: coords => {
    return {type: 'PLAYER_MOVE_TELEPORT', coords}
  },

  // game
  updateData: data => {
    return {type: "UPDATE_DATA", data}
  },

  initAreas: areas => {
    return {type: "INIT_AREAS", areas};
  },

  setGameState: state => {
    return {type: "SET_GAME_STATE", ...state}
  },

  addBuildings: buildings => {
    return {type: "INIT_BUILDINGS", buildings}
  },

  // items
  addItem   : item => {
    return {type: "ITEM_ADD", item};
  },
  removeItem: id => {
    return {type: "ITEM_REMOVE", id}
  },
  updateItem: (id, weight) => {
    return {type: 'UPDATE_ITEM', id, weight}
  },

  // containers
  addAsContainer     : cid => {
    return {type: 'ADD_AS_CONTAINER', cid}
  },
  removeAsContainer  : cid => {
    return {type: 'REMOVE_AS_CONTAINER', cid}
  },
  addToContainer     : (cid, iid) => {
    return {type: 'ADD_TO_CONTAINER', cid, iid}
  },
  removeFromContainer: (cid, iid) => {
    return {type: 'REMOVE_FROM_CONTAINER', cid, iid}
  }
}
