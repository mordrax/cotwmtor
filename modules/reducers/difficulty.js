export default (state = '', action) => {
  switch (action.type) {
    case 'SET_DIFFICULTY':
      return action.level;
    default:
      return state;
  }
}