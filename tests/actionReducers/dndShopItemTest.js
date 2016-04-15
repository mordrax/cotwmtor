import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import * as Item from '/core/item.js';
import * as map from '/core/maps.js';
import * as repo from '/reducers/reducerRepository.js';

import {storeSetup, dispatch, getState} from '/tests/core/testStore.js';

describe('ActionReducers - dndShopItem - dragging items around shop, equipment, pack', () => {
  let armour, shield, gauntlet, belt, helmet, generalStore, chest, bag;

  beforeEach(() => {
    storeSetup();

    armour = Item.generateItem(cotw.Items.Armour.ElvenChainMail);
    shield = Item.generateItem(cotw.Items.Shield.MediumIronShield);
    gauntlet = Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity);
    belt = Item.generateItem(cotw.Items.Belt.TwoSlotBelt);
    helmet = Item.generateItem(cotw.Items.Helmet.EnchantedHelmOfStorms);
    chest = Item.generateItem(cotw.Items.Pack.LargeChest);
    bag = Item.generateItem(cotw.Items.Pack.MediumBag);
    const items = [armour, shield, gauntlet, belt, helmet];

    dispatch(actions.addItem(...items, chest, bag));

    _.forEach(items, x=>dispatch(actions.addToContainer(chest.id, x.id)));
  });

  it('moves the item from the source container to the destination container', () => {
    dispatch(actions.dndShopItem(shield.id, chest.id, bag.id));

    expect(repo.getItemsFromContainer(getState, chest.id).length).toEqual(4);
    expect(repo.getItemsFromContainer(getState, bag.id).length).toEqual(1);
  });

  describe('Buy/Sell - moving items from/to shop window', () => {
    let twoHandedSword, club;
    beforeEach(() => {
      storeSetup();

      let buildings = map.generateBuildings(dispatch);
      dispatch(actions.addBuildings(buildings));
      generalStore = _.find(buildings, x=>x.name === 'General Store');

      const purse = Item.generateItem(cotw.Items.Purse.Purse, {
        silver: 5 //500
      });
      twoHandedSword = Item.generateItem(cotw.Items.Weapon.TwoHandedSword); //buy 6360
      club = Item.generateItem(cotw.Items.Weapon.Club); //buy 105
      dispatch(actions.addItem(purse, club));
      dispatch(actions.addItem(twoHandedSword));
      dispatch(actions.addToContainer(generalStore.id, twoHandedSword.id));
      dispatch(actions.equipItem('purse', purse.id));
    });

    it('checks player has enough money to buy from shop', () => {
      dispatch(actions.dndShopItem(twoHandedSword.id, generalStore.id, 'freehand'));
      expect(getState().player.equipment.freehand).toBeFalsy();

      dispatch(actions.dndShopItem(club.id, generalStore.id, 'freehand'));
      expect(getState().player.equipment.freehand).toEqual(club.id);
    });
    it('allows undo of a buy/sell event (through registering undo functions)');
    it('fires off a notification for buy/sell');
    it('triggers a buy correctly from a shop to equipment or pack');
  });

  describe('Equipment - dragging to/from equipment slot', () => {
    it('allows equipping of items', () => {
      dispatch(actions.dndShopItem(shield.id, chest.id, 'shield'));
      expect(getState().player.equipment.shield).toEqual(shield.id);
    });
    it('doesnt allow doubling up of equipment slot items', () => {
      const shield2 = Item.generateItem(cotw.Items.Shield.LargeIronShield);

      dispatch(actions.addItem(shield2));
      dispatch(actions.equipItem('shield', shield2.id));
      expect(getState().player.equipment.shield).toEqual(shield2.id);
      expect(getState().player.equipment.shield).not.toEqual(shield.id);

      dispatch(actions.dndShopItem(shield.id, chest.id, 'shield'));
      expect(getState().player.equipment.shield).toEqual(shield2.id);
      expect(getState().player.equipment.shield).not.toEqual(shield.id);
    });
    it('allows you to unequip items', () => {
      dispatch(actions.dndShopItem(shield.id, chest.id, 'shield'));
      expect(getState().player.equipment.shield).toEqual(shield.id);

      dispatch(actions.dndShopItem(shield.id, 'shield', chest.id));
      expect(getState().player.equipment.shield).toBeFalsy();
    });
  });

  describe('Pack related drag', () => {
    it('does not move item if it exceeds weight limit', () => {
      expect(repo.getItemsFromContainer(getState, bag.id).length).toEqual(0);

      dispatch(actions.dndShopItem(chest.id, 'pack', bag.id));

      expect(repo.getItemsFromContainer(getState, bag.id).length).toEqual(0);
    });
    it('does not allow containers to be put in itself', () => {
      dispatch(actions.dndShopItem(bag.id, bag.id, bag.id));
      expect(getState().containers[bag.id][bag.id]).toBeFalsy();
    });
  });

  describe('Purse - Dragging into the purse view', ()=> {
    let purse1 = Item.generateItem(cotw.Items.Purse.Purse, {
      copper: 100,
      gold: 1
    });
    let purse2 = Item.generateItem(cotw.Items.Purse.Purse, {
      copper: 50,
      silver: 5
    });

    beforeEach(() => {
      storeSetup();

      dispatch(actions.addItem(purse1));
      dispatch(actions.addItem(purse2));
      dispatch(actions.equipItem('purse', purse1.id));
      dispatch(actions.addToContainer(bag.id, purse2.id));

      dispatch(actions.dndShopItem(purse2.id, bag.id, purse1.id));
    });
    it('combines the contents of two purses by dropping a purse on equipment', () => {
      expect(getState().items[purse1.id].copper).toEqual(150);
      expect(getState().items[purse1.id].silver).toEqual(5);
      expect(getState().items[purse1.id].gold).toEqual(1);
      expect(getState().items[purse1.id].platinum).toEqual(0);
    });
    it('removes the purse being dropped', () => {
      expect(getState().containers[purse2.id]).toBeFalsy();
      expect(getState().items[purse2.id]).toBeFalsy();
    });
  });
});
