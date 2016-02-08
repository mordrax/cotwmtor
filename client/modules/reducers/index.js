import { combineReducers } from 'redux';
import player from './player';
import {routeReducer} from 'redux-simple-router';
import {GameArea, GameScreen, generateNewMap} from '/client/modules/enums/maps';
var moment = require('moment');

var defaultState = {
  name: `Created - ${moment().format('MMM Do')}`,
  area: GameArea.Village,
  screen: GameScreen.Map,
  map:generateNewMap()
};
const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    case 'INIT_GAME':
      state.map = state.map || generateNewMap();
      return state;
    case 'AREA_CHANGE':
      return {
        ...state,
        area: action.area
      };
    case 'SCREEN_CHANGE':
      return {
        ...state,
        screen: action.screen,
        buildingScreen: action.buildingScreen
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

const initMap = (area) => {

};

export default cotwApp;
