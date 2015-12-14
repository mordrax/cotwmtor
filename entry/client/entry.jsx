import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import {Title} from '../../modules/title/title.jsx';
import CharCreation from '../../modules/charCreation/charCreation.jsx';
import createBrowserHistory from '../../node_modules/history/lib/createBrowserHistory';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import reducer from '../../reducers/index.es6';

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
  let store = createStore(reducer);
  const history = createBrowserHistory();
  console.dir('store state: ' + store.getState());

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Title}/>
          <Route path='new' component={CharCreation}/>
          <Route path='load' component={CharCreation}/>
          <Route path='overview' component={CharCreation}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'));
});