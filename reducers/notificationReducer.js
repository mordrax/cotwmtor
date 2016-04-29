import _ from 'lodash';

let defaultState = {
};

let newState;

export default (state=defaultState, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        [action.id]: action.notification
      };
    case "REMOVE_NOTIFICATION":
      newState = _.extend({}, state);
      delete newState[action.id];
      return newState;

    case "UPDATE_NOTIFICATION":
      return {
        ...state,
        [action.id] : {
          ...state[action.id]
        }
      };
    default:
      return state;
  }
}