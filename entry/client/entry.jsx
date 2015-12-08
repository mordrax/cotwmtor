import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import {Title} from '../../modules/title/title.jsx';
import CharCreation from '../../modules/charCreation/charCreation.jsx';
import createBrowserHistory from '../../node_modules/history/lib/createBrowserHistory';

var App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

Meteor.startup(function () {
  const history = createBrowserHistory();
  ReactDOM.render(
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Title}/>
        <Route path='new' component={CharCreation}/>
        <Route path='load' component={CharCreation}/>
        <Route path='overview' component={CharCreation}/>
      </Route>
    </Router>
    , document.getElementById('app'));
})