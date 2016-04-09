import * as actions from '/actions/index.js';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import reducer from '/reducers/index.js';

const storeFactory = () => createStore(
  reducer,
  applyMiddleware(thunk)
);

export default storeFactory;