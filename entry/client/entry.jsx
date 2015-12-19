import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from '../../node_modules/history/lib/createBrowserHistory';

import {Title} from '../../modules/title/title.jsx';
import CharCreationContainer from '../../modules/charCreation/charCreation';

import { createStore, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import cotwReducer from '../../modules/reducers/index';

let App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

Meteor.startup( () => {
  const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
  let cotwStore = finalCreateStore(cotwReducer);
  const history = createBrowserHistory();
  console.dir('store state: ' + cotwStore.getState());

  ReactDOM.render(
    <Provider store={cotwStore}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Title}/>
          <Route path='new' component={CharCreationContainer}/>
          <Route path='load' component={CharCreationContainer}/>
          <Route path='overview' component={CharCreationContainer}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'));
});