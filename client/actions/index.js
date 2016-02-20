import {GameArea, GameScreen, generateAreas, generateBuildings} from '/client/enums/maps';
import Item from '/client/core/item.js';

export default {
  setGender: (gender) => {
    return {
      type: "SET_GENDER",
      gender
    };
  },

  setDifficulty: (level) => {
    return {
      type: "SET_DIFFICULTY",
      level
    }
  },

  setAttribute: (attr, value) => {
    return {
      type: "SET_ATTRIBUTE",
      attr,
      value
    }
  },

  changeName: (name) => {
    return {
      type: "CHANGE_NAME",
      name
    }
  },

  updateData: (data) => {
    console.dir('calling update data:', data);
    return {
      type: "UPDATE_DATA",
      data
    }
  },

  initGame: () => {
    let map = generateAreas();
    let buildings = generateBuildings();

    return {
      type     : "INIT_GAME",
      map,
      buildings
    }
  }
}
