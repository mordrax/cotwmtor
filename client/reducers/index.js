import { combineReducers } from 'redux';
import game from '/client/reducers/gameReducer.js';
import player from '/client/reducers/playerReducer.js';
import area from '/client/reducers/areaReducer.js';
import buildings from '/client/reducers/buildingReducer.js';

import {routeReducer} from 'redux-simple-router';

const cotwApp = combineReducers({
  player: player,
  game: game,
  areas: area,
  buildings: buildings,
  routing: routeReducer
});

const initMap = (area) => {

};

export default cotwApp;
