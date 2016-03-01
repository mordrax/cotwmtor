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
      delete newState[action.item.id];
      return newState;

    case "UPDATE_ITEM":
      return {
        ...state,
        [action.iid] : {
          ...state[action.iid],
          weight: action.weight
        }
      };

    default:
      return state;
  }
}