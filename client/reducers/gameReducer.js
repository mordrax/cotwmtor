import {GameArea, GameScreen} from '../../enums/maps'

let defaultState = {
  name: 'TODO: Unnamed game',
  currentBuilding: '',
  currentArea: GameArea.Village,
  currentScreen: GameScreen.Map
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      console.log('init game');
      return {
        ...state,
        currentBuilding: action.currentBuilding || state.currentBuilding,
        currentArea: action.currentArea || state.currentArea,
        currentScreen: action.currentScreen || state.currentScreen
      };
    default:
      return state;
  }
};
