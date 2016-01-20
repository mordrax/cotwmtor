import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

import Title from '../modules/title/title.jsx';
import CharCreationContainer from '../modules/charCreation/client/charCreation.jsx';

import { createStore, compose, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import cotwReducer from '../modules/reducers/index';

import Game from '../modules/game/index.jsx';
import Main from '../modules/main/index.jsx';
import './subscribe';

import cotw from '../modules/enums/enums.js';

function configureStore(rootReducer, initialState) {
  const toolsCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(toolsCreateStore);

  const store = createStoreWithMiddleware(rootReducer);

// Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}

Meteor.startup( () => {
  let cotwStore = configureStore(cotwReducer, {});
  console.dir('store state: ' + cotwStore.getState());

  window.cotw = cotw;

  ReactDOM.render(
    <Provider store={cotwStore}>
      <Router history={browserHistory}>
        <Route path='/' component={Game}>
          <IndexRoute component={Title}/>
          <Route path='new' component={CharCreationContainer}/>
          <Route path='load' component={CharCreationContainer}/>
          <Route path='overview' component={CharCreationContainer}/>
          <Route path='game' component={Main}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'));
});