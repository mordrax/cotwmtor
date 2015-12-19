import { combineReducers } from 'redux';
import gender from './gender';
import difficulty from './difficulty';

const cotwApp = combineReducers({
  difficulty,
  gender
});

export default cotwApp;
