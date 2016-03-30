import actions from '../../client/actions/index.js';
import reducer from '../../client/reducers/playerReducer.js';


describe("Reducer: Player", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it('should return base state on no action', () => {
    expect(state.name).toBeDefined();
    expect(state.attributes).toBeDefined();
    expect(state.equipment).toBeDefined();
  });

  it('should set gender', () => {
    let newState = reducer(state, actions.setGender('female'));
    expect(newState.gender).toEqual('female');
  });

  it('should set difficulty', () => {
    let newState = reducer(state, actions.setDifficulty('easy'));
    expect(newState.difficulty).toEqual('easy');
  });

  it('should increase attributes', () => {
    let newState = reducer(state, actions.setAttribute('Strength', 5));
    expect(newState.attributes.Strength).toEqual({value: 55, name: 'Strength'});
    expect(newState.attributes.Available).toEqual({value: 95, name: 'Available'});
  });

  it('should decrease attributes', () => {
    let newState = reducer(state, actions.setAttribute('Intelligence', -5));
    expect(newState.attributes.Intelligence).toEqual({value: 45, name: 'Intelligence'});
    expect(newState.attributes.Available).toEqual({value: 105, name: 'Available'});
  });

  it('should not increase attibutes past 100', () => {
    let newState = reducer(state, actions.setAttribute('Dexterity', 55));
    expect(newState.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(newState.attributes.Available).toEqual({value: 100, name: 'Available'});
  });

  it('should not decrease attributes past 0', () => {
    let newState = reducer(state, actions.setAttribute('Dexterity', -55));
    expect(newState.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(newState.attributes.Available).toEqual({value: 100, name: 'Available'});
  });
});