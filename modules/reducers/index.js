import { combineReducers } from 'redux';

const reducerOfUselessness = (state = {}, action) => {
  console.dir('take no action!: ' + state);
  return state;
};

const gender = (state = 'male', action) => {
  switch (action.type) {
    case 'SET_GENDER':
      return action.gender;
    default:
      return 'female';
  }
};

const cotwApp = combineReducers({
  reducerOfUselessness,
  gender
});

export default cotwApp;
