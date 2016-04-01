import actions from '../../actions/index.js';
import reducer from '../../client/reducers/gameReducer.js';

describe("Reducer: Games", () => {
  let state;

  it('should return base state on no action', () => {
    let newState = reducer(undefined, {});
    expect(newState.currentArea).toBeDefined();
    expect(newState.currentBuilding).toBeDefined();
    expect(newState.currentScreen).toBeDefined();
  });

  it('should allow changes to a game state', () => {
    state = reducer(undefined, {});
    let newState = reducer(state, actions.setGameState({currentScreen: 123}));
    expect(newState.currentScreen).toEqual(123);
  });
});