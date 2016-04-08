import * as actions from '../../actions/index.js';
import reducer from '../../reducers/areaReducer.js';

describe("Reducer: Area", () => {
  let state = {
    player: {
      name: 'bob',
      gender: 'Male'
    }
  };

  it('should return base state on no action', () => {
    var newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('should initialise areas', () => {
    let area = {a:1, b:2};
    var newState = reducer(state, actions.initAreas(area));
    expect(newState).toEqual(area);
  })

});