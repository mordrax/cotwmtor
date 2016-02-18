let defaultState = {

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "INIT_AREAS":
      return action.areas;

    default:
      return state;
  }
}