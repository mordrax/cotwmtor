let defaultState = {
  gender    : 'male',
  difficulty: 1,
  name      : 'Testing',
  attributes: {
    Available   : {value: 100, name: 'Available'},
    Strength    : {value: 50, name: 'Strength'},
    Intelligence: {value: 50, name: 'Intelligence'},
    Constitution: {value: 50, name: 'Constitution'},
    Dexterity   : {value: 50, name: 'Dexterity'}
  },
  coords    : {
    x: 11,
    y: 17
  }
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_GENDER':
      return {
        ...state,
        gender: action.gender
      };
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.level
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'SET_ATTRIBUTE':
      if (action.attr === 'Available')
        return state;
      if (state.attributes.Available.value - action.value < 0)
        return state;
      if (state.attributes[action.attr].value + action.value < 0 ||
        state.attributes[action.attr].value + action.value > 100)
        return state;

      let newAttributes = {
        ...state.attributes,
        Available: {
          ...state.attributes.Available,
          value: state.attributes.Available.value - action.value
        }
      };
      newAttributes[action.attr].value += action.value;

      return {...state, attributes: newAttributes};
    case 'KEY_PRESS':
      switch (action.event.keyCode) {
        case 83:
        case 40:
          return {
            ...state,
            coords: {
              ...state.coords,
              y: state.coords.y+1
            }
          };
        case 87:
        case 38:
          return {
            ...state,
            coords: {
              ...state.coords,
              y: state.coords.y-1
            }
          };
        case 68:
        case 39:
          return {
            ...state,
            coords: {
              ...state.coords,
              x: state.coords.x+1
            }
          };
        case 65:
        case 37:
          return {
            ...state,
            coords: {
              ...state.coords,
              x: state.coords.x-1
            }
          };
        default:
          return state;
      }
      console.error('Key pressed unhandled!');
    default:
      return state;
  }
};