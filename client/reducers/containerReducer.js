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
    case "ADD_AS_CONTAINER":
      return {
        ...state,
        [action.cid]: {}
      };
    case "REMOVE_AS_CONTAINER":
      throw 'Not implemented!';
      return {

      };
    case "ADD_TO_CONTAINER":
      return {
        ...state,
        [action.cid]: {
          ...state[action.cid],
          [action.iid]: true
        }
      };

    case "REMOVE_FROM_CONTAINER":
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