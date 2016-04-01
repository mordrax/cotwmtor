import actions from '../../actions/index.js';
import reducer from '../../client/reducers/itemReducer.js';

describe("Reducer: Items", () => {
  let state = {};
  let item = {id: 1, name:'TestItem'};

  it('should return base state on no action', () => {
    let newState = reducer(undefined, {});
    expect(newState).toEqual({});
  });

  it('should add an item', () => {
    let newState = reducer(state, actions.addItem(item));
    expect(newState[1].name).toEqual(item.name);
  });

  it('should remove an item', () => {
    let newState = reducer(state, actions.addItem(item));
    let newState2 = reducer(newState, actions.removeItem(item.id));
    expect(newState2).toEqual({});
  });

  it('should update the weight of an item', () => {
    let newState = reducer(state, actions.addItem(item));
    newState = reducer(newState, actions.updateItem(item.id, 50));
    expect(newState[item.id].weight).toEqual(50);
  });
});