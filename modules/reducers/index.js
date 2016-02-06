import { combineReducers } from 'redux';
import player from './player';
import {routeReducer} from 'redux-simple-router';
import {GameArea, GameScreen} from '/modules/enums/enums';
var moment = require('moment');

var defaultState = {
  name: `Created - ${moment().format('MMM Do')}`,
  location: GameArea.Village,
  screen: GameScreen.Map,
  map:{}
};
const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    case 'INIT_GAME':
      state.map[GameArea.Village] = initMap();
      return state;
    default:
      return state;
  }
};

const cotwApp = combineReducers({
  player: player,
  game: game,
  routing: routeReducer
});

const initMap = (area) => {

};

export default cotwApp;
