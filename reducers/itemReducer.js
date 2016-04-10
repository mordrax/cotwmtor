let defaultState = {
};

export default (state=defaultState, action) => {
  switch (action.type) {
    case "ITEM_ADD":
      return {
        ...state,
        [action.item.id] : action.item
      };

    case "ITEM_REMOVE":
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;

    case "UPDATE_ITEM":
      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          weight: action.weight
        }
      };

    case "UPDATE_PURSE":
      let purse = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...purse,
          copper: purse.copper + (action.copper || 0),
          silver: purse.silver + (action.silver || 0),
          gold: purse.gold + (action.gold || 0),
          platinum: purse.platinum + (action.platinum || 0)
        }
      };
    default:
      return state;
  }
}