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
import Title from './title/title.js';
import CharCreationContainer from '/client/charCreation/charCreation.js';
import GameView from './game/index.js';
import Game from '/client/game/init.js';
import Main from './main/main.js';
import Shop from './shop/shopComponent.js';
import './subscribe';
import collision from './engines/collision.js';

const configureStore = (rootReducer, initialState) => {
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
};

Meteor.startup(() => {

  process.nextTick = Meteor.defer;

  let cotwStore = configureStore(cotwReducer, {});
  Game.init(cotwStore);
  console.dir('Initialised a new game: ' + cotwStore.getState());

  window.addEventListener('keydown', function (e) {
    collision.onKeyPress(e, cotwStore);
  }, false);

  ReactDOM.render(
    <Provider store={cotwStore}>
      <Router history={browserHistory}>
        <Route path='/' component={GameView}>
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