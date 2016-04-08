let defaultState = {

};

export default (state=defaultState, action) => {
  switch (action.type) {
    case "INIT_BUILDINGS":
      return _.extend({}, action.buildings);
    default:
      return state;
  }
}