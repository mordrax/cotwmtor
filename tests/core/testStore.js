import * as actions from '/actions/index.js';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import reducer from '/reducers/index.js';


let store, _dispatch, _getState;

export const dispatch = args => _dispatch(args);
export const getState = () => _getState();

export const storeSetup = () => {
  store = storeFactory();
  _dispatch = store.dispatch;
  _getState = store.getState;
};

const storeFactory = () => createStore(
  reducer,
  applyMiddleware(thunk)
);

export default storeFactory;