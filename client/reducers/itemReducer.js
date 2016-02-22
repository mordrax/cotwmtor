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

    default:
      return state;
  }
}