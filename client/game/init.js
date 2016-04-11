import * as actions from '/actions/index.js';
import {generateItem} from '/core/item.js';
import * as cotw from '/core/cotwContent.js';
import {generateBuildings, generateAreas} from '/core/maps.js';

/**
 * Create a new game state that includes the player, equipment, items,
 * buildings, areas, monsters, story etc...
 */

const initGear = store => {
  let initialGear = {
    armour   : generateItem(cotw.Items.Armour.ChainMail),
    neckwear : generateItem(cotw.Items.Neckwear.OrdinaryAmulet),
    shield   : generateItem(cotw.Items.Shield.LargeMeteoricSteelShield),
    bracers  : generateItem(cotw.Items.Bracers.BracersOfDefenseNormal),
    gauntlets: generateItem(cotw.Items.Gauntlet.GauntletOfDexterity),
    weapon   : generateItem(cotw.Items.Weapon.Club),
    freehand : generateItem(cotw.Items.Weapon.BattleAxe),
    pack     : generateItem(cotw.Items.Pack.MediumBag),
    purse    : generateItem(cotw.Items.Purse.Purse)
  };

  _.forEach(initialGear, (item, equipmentType) => {
    store.dispatch(actions.addItem(item));
    store.dispatch(actions.equipItem(equipmentType, item.id));
  });

  store.dispatch(actions.updatePurse({copper:1000, silver:10, gold:1}));
};

const initAreas = store => {
  let areas = generateAreas();
  store.dispatch(actions.initAreas(areas));
};

const initBuildings = store => {
  let buildings = generateBuildings(store.dispatch);
  store.dispatch(actions.addBuildings(buildings));

  let generalStore = _.filter(buildings, (x)=>x.name == 'General Store')[0];
  store.dispatch(actions.setGameState({currentBuilding: generalStore.id}));
};

export default {
  /**
   * Run init to create a new game.
   * @param store
   * @returns {Function}
   */
  init: store => {
    // only initialise once
    if (store.getState().game.initialised)
      return;

    initGear(store);
    initAreas(store);
    initBuildings(store);

    store.dispatch(actions.initGame());
  }
}

