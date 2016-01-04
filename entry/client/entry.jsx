import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from '../../node_modules/history/lib/createBrowserHistory';

import Title from '../../modules/title/title.jsx';
import CharCreationContainer from '../../modules/charCreation/client/charCreation.jsx';

import { createStore, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import cotwReducer from '../../modules/reducers/index';

import Game from '../../modules/game/index.jsx';
import './subscribe';

function configureStore(rootReducer, initialState) {
  const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../modules/reducers', () => {
      const nextRootReducer = require('../../modules/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

Meteor.startup( () => {
  let cotwStore = configureStore(cotwReducer, {});
  const history = createBrowserHistory();
  console.dir('store state: ' + cotwStore.getState());

  ReactDOM.render(
    <Provider store={cotwStore}>
      <Router history={history}>
        <Route path='/' component={Game}>
          <IndexRoute component={Title}/>
          <Route path='new' component={CharCreationContainer}/>
          <Route path='load' component={CharCreationContainer}/>
          <Route path='overview' component={CharCreationContainer}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'));
});