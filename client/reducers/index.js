import { combineReducers } from 'redux';
import game from '/client/reducers/gameReducer.js';
import player from '/client/reducers/playerReducer.js';
import areas from '/client/reducers/areaReducer.js';
import buildings from '/client/reducers/buildingReducer.js';
import containers from '/client/reducers/containerReducer.js';
import items from '/client/reducers/itemReducer.js';

import {routeReducer} from 'redux-simple-router';

const cotwApp = combineReducers({
  player,
  game,
  areas,
  buildings,
  containers,
  items,
  routing: routeReducer
});

const initMap = (area) => {

};

export default cotwApp;
