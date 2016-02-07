//react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

// redux
import { createStore, compose, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import cotwReducer from '/client/modules/reducers/index';

// game
import Title from '/client/modules/title/title.jsx';
import CharCreationContainer from '/client/modules/charCreation/client/charCreation.jsx';
import Game from '/client/modules/game/index.jsx';
import Main from '/client/modules/main/index.jsx';
import './subscribe';
import cotw from '/client/modules/enums/enums';
import collision from '/client/modules/engines/collision';


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

  window.addEventListener('keydown', function(e) {
    console.log(`key pressed: ${e.keyCode}`);

    collision.onKeyPress(e, cotwStore);


  }, false);

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