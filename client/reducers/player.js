import {Items} from '/client/enums/cotwContent.js';
import _ from 'lodash';

class Item {
  constructor(item) {
    _.extend(this, item);
  }
}

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
  equipment: {
    armor: new Item(Items.Armour.ChainMail),
    neckwear: new Item(Items.Neckwear.OrdinaryAmulet),
    overgarment: {},
    helmet:{},
    shield: new Item(Items.Shield.LargeMeteoricSteelShield),
    bracers:new Item(Items.Bracer.BracersOfDefenseNormal),
    gauntlets: new Item(Items.Gauntlet.GauntletOfDexterity),
    weapon:new Item(Items.Weapon.Club),
    freehand: new Item(Items.Weapon.BattleAxe),
    rightring:{},
    leftring:{},
    belt:{},
    boots:{},
    pack: new Item(Items.Pack.LargePack),
    purse: new Item(Items.Purse.Purse)
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
    case 'PLAYER_MOVE':
      return {
        ...state,
        coords: {
          x: state.coords.x + action.dir.x,
          y: state.coords.y + action.dir.y
        }
      };
    case 'PLAYER_MOVE_TELEPORT':
      return {
        ...state,
        coords: action.coords
      };
    //case 'AREA_CHANGE':
    //  return {
    //    ...state,
    //    coords: action.coords
    //  };
    default:
      return state;
  }
};