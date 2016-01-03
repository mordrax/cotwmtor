import { combineReducers } from 'redux';
import charCreation from './charCreation';

const game = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    default:
      return state;
  }
};

const cotwApp = combineReducers({
  player: charCreation,
  game: game
});

export default cotwApp;
