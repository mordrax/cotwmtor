let defaultState = {
  'armour'       : {}
  , 'neckwear'   : {}
  , 'overgarment': {}
  , 'helmet'     : {}
  , 'shield'     : {}
  , 'bracers'    : {}
  , 'gauntlets'  : {}
  , 'weapon'     : {}
  , 'freehand'   : {}
  , 'rightring'  : {}
  , 'leftring'   : {}
  , 'belt'       : {}
  , 'boots'      : {}
  , 'pack'       : {}
  , 'purse'      : {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CONTAINER":
      return {
        ...state,
        [action.cid]: {}
      };
    case "CONTAINER_ADD_ITEM":
      return {
        ...state,
        [action.cid]: {
          ...state[action.cid],
          [action.iid]: true
        }
      };

    case "CONTAINER_REMOVE_ITEM":
      let container = Object.assign({}, state[action.cid]);
      delete container[action.iid];

      return {
        ...state,
        [action.cid]: container
      };

    default:
      return state;
  }
}