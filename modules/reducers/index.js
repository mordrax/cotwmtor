import { combineReducers } from 'redux';
import charCreation from './charCreation';
import {routeReducer} from 'redux-simple-router';

const game = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    default:
      return state;
  }
};

const cotwApp = combineReducers({
  player: charCreation,
  game: game,
  routing: routeReducer
});

export default cotwApp;
