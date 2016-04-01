import actions from '../../actions/index.js';
import reducer from '../../client/reducers/buildingReducer.js';

describe("Reducer: Buildings", () => {
  let state = {};
  let buildings = {'GeneralStore1':{name:'General Store', id:1}};

  it('should return base state on no action', () => {
    let newState = reducer(undefined, {});
    expect(newState).toEqual({});
  });

  it('should initialise buildings', () => {
    let newState = reducer(state, actions.addBuildings(buildings));
    expect(newState['GeneralStore1'].name).toEqual(buildings['GeneralStore1'].name);
  });
});