//react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

// redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import cotwReducer from '../reducers/index';

// game
import Title from './title/title.jsx';
import CharCreationContainer from '/client/charCreation/charCreation.jsx';
import Game from './game/index.jsx';
import Main from './main/main.jsx';
import Shop from './shop/shopComponent.jsx';
import './subscribe';
import collision from './engines/collision.js';
import * as actions from '../actions/index.js';

import {GameArea, GameScreen, generateAreas, generateBuildings} from '../core/maps';
import {generateItem} from '../core/item.js';
import {Items, ItemType} from '../core/cotwContent.js';

function configureStore(rootReducer, initialState) {
  const toolsStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const thunkStore = applyMiddleware(thunkMiddleware)(toolsStore);
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const routerStore = applyMiddleware(reduxRouterMiddleware)(thunkStore);

  const store = routerStore(rootReducer);

// Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}

Meteor.startup(() => {

  process.nextTick = Meteor.defer;

  let cotwStore = configureStore(cotwReducer, {});
  console.dir('store state: ' + cotwStore.getState());

  window.addEventListener('keydown', function (e) {
    collision.onKeyPress(e, cotwStore);
  }, false);

  let areas = generateAreas();
  cotwStore.dispatch(actions.initAreas(areas));

  let buildings = generateBuildings(cotwStore.dispatch);
  cotwStore.dispatch(actions.addBuildings(buildings));

  let initialGear = {
    armour   : generateItem(Items.Armour.ChainMail, {type: ItemType.Armour}),
    neckwear : generateItem(Items.Neckwear.OrdinaryAmulet, {type: ItemType.Neckwear}),
    shield   : generateItem(Items.Shield.LargeMeteoricSteelShield, {type: ItemType.Shield}),
    bracers  : generateItem(Items.Bracers.BracersOfDefenseNormal, {type: ItemType.Bracers}),
    gauntlets: generateItem(Items.Gauntlet.GauntletOfDexterity, {type: ItemType.Gauntlet}),
    weapon   : generateItem(Items.Weapon.Club, {type: ItemType.Weapon}),
    freehand : generateItem(Items.Weapon.BattleAxe, {type: ItemType.Weapon}),
    pack     : generateItem(Items.Pack.MediumBag, {type: ItemType.Pack}),
    purse    : generateItem(Items.Purse.Purse, {type: ItemType.Purse})
  };

  _.forEach(initialGear, (item, equipmentType) => {
    cotwStore.dispatch(actions.equipItem(equipmentType, item.id));
    cotwStore.dispatch(actions.addItem(item));
    cotwStore.dispatch(actions.addToContainer(equipmentType, item.id));
  });

  let generalStore = _.filter(buildings, (x)=>x.name == 'General Store')[0];
  cotwStore.dispatch(actions.setGameState({currentBuilding: generalStore.id}));

  ReactDOM.render(
    <Provider store={cotwStore}>
      <Router history={browserHistory}>
        <Route path='/' component={Game}>
          <IndexRoute component={Title}/>
          <Route path='new' component={CharCreationContainer}/>
          <Route path='load' component={CharCreationContainer}/>
          <Route path='overview' component={CharCreationContainer}/>
          <Route path='game' component={Main}/>
          <Route path='shop' component={Shop}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'));
})
;