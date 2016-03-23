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

    default:
      return state;
  }
}