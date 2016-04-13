import * as actions from '/actions/index.js';
import * as Item from '/core/item.js';
import * as cotw from '/core/cotwContent.js';
import {generateBuildings, generateAreas} from '/core/maps.js';

/**
 * Create a new game state that includes the player, equipment, items,
 * buildings, areas, monsters, story etc...
 */

const initGear = store => {
  let initialGear = {
    armour   : Item.generateItem(cotw.Items.Armour.ChainMail),
    neckwear : Item.generateItem(cotw.Items.Neckwear.OrdinaryAmulet),
    shield   : Item.generateItem(cotw.Items.Shield.LargeMeteoricSteelShield),
    bracers  : Item.generateItem(cotw.Items.Bracers.BracersOfDefenseNormal),
    gauntlets: Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity),
    weapon   : Item.generateItem(cotw.Items.Weapon.Club),
    freehand : Item.generateItem(cotw.Items.Weapon.BattleAxe),
    pack     : Item.generateItem(cotw.Items.Pack.MediumBag),
    purse    : Item.generateItem(cotw.Items.Purse.Purse)
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

  // TODO: remove test code
  let generalStore = _.filter(buildings, (x)=>x.name == 'General Store')[0];
  store.dispatch(actions.setGameState({currentBuilding: generalStore.id}));

  let purse = Item.generateItem(cotw.Items.Purse.Purse, {
    copper: 123,
    silver: 10
  });
  store.dispatch(actions.addItem(purse));
  store.dispatch(actions.addToContainer(generalStore.id, purse.id));

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

