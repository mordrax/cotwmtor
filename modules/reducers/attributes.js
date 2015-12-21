const defaultAttributes = {
  Available: {value: 100, name: 'Available'},
  Strength: {value: 50, name: 'Strength'},
  Intelligence: {value: 50, name: 'Intelligence'},
  Constitution: {value: 50, name: 'Constitution'},
  Dexterity: {value: 50, name: 'Dexterity'}
}

export default (state = defaultAttributes, action) => {
  switch (action.type) {
    default:
      return state;
  }
}