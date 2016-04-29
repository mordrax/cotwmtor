import { combineReducers } from 'redux';
import game from '/reducers/gameReducer.js';
import player from '/reducers/playerReducer.js';
import areas from '/reducers/areaReducer.js';
import buildings from '/reducers/buildingReducer.js';
import containers from '/reducers/containerReducer.js';
import items from '/reducers/itemReducer.js';
import notifications from '/reducers/notificationReducer.js';

import {routeReducer} from 'redux-simple-router';

const cotwApp = combineReducers({
  player,
  game,
  areas,
  buildings,
  containers,
  items,
  notifications,
  routing: routeReducer
});

const initMap = (area) => {

};

export default cotwApp;
