const defaultAttributes = {
  Available: {value: 100, name: 'Available'},
  Strength: {value: 50, name: 'Strength'},
  Intelligence: {value: 50, name: 'Intelligence'},
  Constitution: {value: 50, name: 'Constitution'},
  Dexterity: {value: 50, name: 'Dexterity'}
};

export default (state = defaultAttributes, action) => {
  if (action.type !== 'SET_ATTRIBUTE')
    return state;
  if (action.attr === 'Attribute')
    return state;
  if (state.Available.value - action.value < 0)
    return state;
  if (state[action.attr].value + action.value < 0 ||
      state[action.attr].value + action.value > 100)
    return state;

  let newState = {
    ...state,
    Available: {value: state.Available.value - action.value}
  };
  newState[action.attr].value += action.value;

  return newState;
}