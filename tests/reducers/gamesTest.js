import * as actions from '../../actions/index.js';
import reducer from '../../reducers/gameReducer.js';

describe("Reducer: Games", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it('should return base state on no action', () => {
    expect(state.currentArea).toBeDefined();
    expect(state.currentBuilding).toBeDefined();
    expect(state.currentScreen).toBeDefined();
  });

  it('should allow changes to a game state', () => {
    let newState = reducer(state, actions.setGameState({currentScreen: 2}));
    expect(newState.currentScreen).toEqual(2);
  });

  it('should allow setting state to 0', () => {
    let newState = reducer(state, actions.setGameState({currentScreen: 1}));
    let currentScreenZero = reducer(newState, actions.setGameState({currentScreen: 0}));
    expect(currentScreenZero.currentScreen).toEqual(0);
  });

  it('should not change the state with invalid inputs', () => {
    let newState = reducer(state, actions.setGameState({currentArea: 'abc'}));
    expect(newState.currentArea).toEqual(state.currentArea);

    // assume we won't have 9999 areas
    let newState2 = reducer(state, actions.setGameState({currentArea: 9999}));
    expect(newState2.currentArea).toEqual(state.currentArea);
  });
});