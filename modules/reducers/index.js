import { combineReducers } from 'redux';
import player from './player';
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
  player: player,
  game: game,
  routing: routeReducer
});

export default cotwApp;
