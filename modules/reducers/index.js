import { combineReducers } from 'redux';
import charCreation from './charCreation';

const cotwApp = combineReducers({
  player: charCreation
});

export default cotwApp;
