import { combineReducers } from 'redux';
import gender from './gender';
import difficulty from './difficulty';
import attributes from './attributes';

const cotwApp = combineReducers({
  difficulty,
  gender,
  attributes
});

export default cotwApp;
