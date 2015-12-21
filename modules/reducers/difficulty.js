export default (state = '0', action) => {
  switch (action.type) {
    case 'SET_DIFFICULTY':
      return action.level;
    default:
      return state;
  }
}