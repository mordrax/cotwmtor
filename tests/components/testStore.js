import actions from '/actions/index.js';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import reducer from '/client/reducers/index.js';

const store = createStore(reducer, {});

export default store;