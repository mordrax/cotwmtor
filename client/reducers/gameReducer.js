import {GameArea, GameScreen} from '/client/enums/maps'

let defaultState = {
  name: 'TODO: Unnamed game',
  currentBuilding: '',
  currentArea: GameArea.Village,
  currentScreen: GameScreen.Map
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    case 'INIT_GAME':
      console.log('init game');
      return {
        ...state,
        currentBuilding: action.building
      };
    case 'AREA_CHANGE':
      return {
        ...state,
        currentArea: action.area
      };
    case 'SCREEN_CHANGE':
      return {
        ...state,
        currentScreen: action.screen
      };
    default:
      return state;
  }
};
