import {GameArea, GameScreen} from '../../core/maps'
import _ from 'lodash';

let defaultState = {
  name: 'TODO: Unnamed game',
  currentBuilding: '',
  currentArea: GameArea.Village,
  currentScreen: GameScreen.Map
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      let currentBuilding = typeof(action.currentBuilding) === 'string' ? action.currentBuilding : state.currentBuilding;
      let currentArea = GameArea[action.currentArea] !== undefined ? action.currentArea : state.currentArea;
      let currentScreen = GameScreen[action.currentScreen] !== undefined ? action.currentScreen : state.currentScreen;

      return {
        ...state,
        currentBuilding,
        currentArea,
        currentScreen
      };
    default:
      return state;
  }
};
