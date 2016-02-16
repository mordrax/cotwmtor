import { combineReducers } from 'redux';
import player from './player.js';
import {routeReducer} from 'redux-simple-router';
import {GameArea, GameScreen, generateNewMap, generateBuildings} from '/client/enums/maps';
var moment = require('moment');

var defaultState = {
  name: `Created - ${moment().format('MMM Do')}`,
  area: GameArea.Village,
  screen: GameScreen.Map,
  map: generateNewMap(),
  buildings: generateBuildings()
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    case 'INIT_GAME':
      return {
        ...state,
        map: action.map,
        buildings: action.buildings
      };
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
    case 'SELECT_ITEM':
      return {
        ...state,
        movingItem: {
          item: action.movingItem,
          dx:0,
          dy:0

        }
      };
    case 'MOVE_ITEM':
      console.log('moving item');
      return {
        ...state,
        movingItem: {
          ...state.movingItem,
          dx: action.dx,
          dy: action.dy
        }
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
