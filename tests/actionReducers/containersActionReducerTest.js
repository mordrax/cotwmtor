import * as actions from '../../actions/index.js';
import reducer from '../../reducers/containerReducer.js';

describe("Reducer: Containers", () => {
  let state = {};
  let item = {id: 34, name: 'TestItem'};
  let container = {id:25, name:'Small bag'};

  it('should return base state on no action', () => {
    let newState = reducer(undefined, {});
    expect(newState).toEqual({
      'armour': {}
      , 'neckwear': {}
      , 'overgarment': {}
      , 'helmet': {}
      , 'shield': {}
      , 'bracers': {}
      , 'gauntlets': {}
      , 'weapon': {}
      , 'freehand': {}
      , 'rightring': {}
      , 'leftring': {}
      , 'belt': {}
      , 'boots': {}
      , 'pack': {}
      , 'purse': {}
    });
  });

  describe('Basic container actions', () => {
    let newState = reducer(state, actions.addAsContainer(item.id));

    it('should be able to add a empty container', () => {
      expect(newState[item.id]).toEqual({});
    });

    it('should be able to remove a container', () => {
      let newState2 = reducer(newState, actions.removeAsContainer(item.id));
      expect(newState2[item.id]).toBeUndefined();
    })
  });

  describe('Add/Remove items', () => {
    let newState = reducer(state, actions.addToContainer(container.id, item.id));

    it('should add an item to a container', () => {
      expect(newState[container.id][item.id]).toEqual(true);
    });

    it('should remove an item from a container', () => {
      let newState2 = reducer(state, actions.removeFromContainer(container.id, item.id));
      expect(newState2[container.id][item.id]).toBeUndefined();
    });
  });
});