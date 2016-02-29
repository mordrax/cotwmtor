//react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

// redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import cotwReducer from '/client/reducers/index';

// game
import Title from '/client/title/title.jsx';
import CharCreationContainer from '/client/charCreation/charCreation.jsx';
import Game from '/client/game/index.jsx';
import Main from '/client/main/main.jsx';
import Shop from '/client/shop/shopComponent.jsx';
import './subscribe';
import collision from '/client/engines/collision.js';

import {GameArea, GameScreen, generateAreas, generateBuildings} from '/client/enums/maps';
import {generateItem} from '/client/core/item.js';
import {Items, ItemType} from '/client/enums/cotwContent.js';

function configureStore(rootReducer, initialState) {
  const toolsCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(toolsCreateStore);

  const store = createStoreWithMiddleware(rootReducer, applyMiddleware(thunk));

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
  cotwStore.dispatch({type: "INIT_AREAS", areas});

  let buildings = generateBuildings(cotwStore.dispatch);
  cotwStore.dispatch({type: "INIT_BUILDINGS", buildings});

  let initialGear = {
    armour   : generateItem(Items.Armour.ChainMail, {type: ItemType.Armour}),
    neckwear : generateItem(Items.Neckwear.OrdinaryAmulet, {type: ItemType.Neckwear}),
    shield   : generateItem(Items.Shield.LargeMeteoricSteelShield, {type: ItemType.Shield}),
    bracers  : generateItem(Items.Bracers.BracersOfDefenseNormal, {type: ItemType.Bracers}),
    gauntlets: generateItem(Items.Gauntlet.GauntletOfDexterity, {type: ItemType.Gauntlet}),
    weapon   : generateItem(Items.Weapon.Club, {type: ItemType.Weapon}),
    freehand : generateItem(Items.Weapon.BattleAxe, {type: ItemType.Weapon}),
    pack     : generateItem(Items.Pack.LargePack, {type: ItemType.Pack}),
    purse    : generateItem(Items.Purse.Purse, {type: ItemType.Purse})
  };

  _.forEach(initialGear, (item, equipmentType) => {
    console.log(`Initial gear: adding ${equipmentType} id: ${item.id}`);
    cotwStore.dispatch({type: "PLAYER_EQUIP", equipmentType, iid: item.id});
    cotwStore.dispatch({type: "ITEM_ADD", item});
    cotwStore.dispatch({type: "CONTAINER_ADD_ITEM", cid: equipmentType, iid: item.id});
  });

  let generalStore = _.filter(buildings, (x)=>x.name == 'General Store')[0];
  cotwStore.dispatch({type: "SET_GAME_STATE", currentBuilding: generalStore.id});

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