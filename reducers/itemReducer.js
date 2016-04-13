import _ from 'lodash';

let defaultState = {
};
let newState;
export default (state=defaultState, action) => {
  switch (action.type) {
    case "ITEM_ADD":
      newState = _.extend({}, state);
      _.forEach(action.items, x=>newState[x.id]=x);

      return newState;
    case "ITEM_REMOVE":
      newState = _.extend({}, state);
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