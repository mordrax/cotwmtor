import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import * as actions from '/actions/index.js';
import {storeSetup, dispatch, getState} from './../core/testStore.js';
import * as repo from '/reducers/reducerRepository.js';

describe('actions/index.js', () => {
  describe('dndShopItem', () => {
    const armour = Item.generateItem(cotw.Items.Armour.ElvenChainMail);
    const shield = Item.generateItem(cotw.Items.Shield.MediumIronShield);
    const gauntlet = Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity);
    const belt = Item.generateItem(cotw.Items.Belt.TwoSlotBelt);
    const helmet = Item.generateItem(cotw.Items.Helmet.EnchantedHelmOfStorms);

    const chest = Item.generateItem(cotw.Items.Pack.LargeChest);
    const bag = Item.generateItem(cotw.Items.Pack.MediumBag);

    const items = [armour, shield, gauntlet, belt, helmet];

    let generalStore;

    beforeEach(() => {
      storeSetup();

      _.forEach(items, x=>dispatch(actions.addItem(x)));

      dispatch(actions.addItem(chest));
      _.forEach(items, x=>dispatch(actions.addToContainer(chest.id, x.id)));

      dispatch(actions.addItem(bag));
    });

    it('moves the item from the source container to the destination container', () => {
      dispatch(actions.dndShopItem(shield.id, chest.id, bag.id));

      const chestItems = repo.getItemsFromContainer(getState(), chest.id);
      const bagItems = repo.getItemsFromContainer(getState(), bag.id);

      expect(chestItems.length).toEqual(4);
      expect(bagItems.length).toEqual(1);
    });

    describe('Buy/Sell related drag', () => {
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

    describe('Equipment related drag', () => {
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
        expect(repo.getItemsFromContainer(getState(), bag.id).length).toEqual(0);

        dispatch(actions.dndShopItem(chest.id, 'pack', bag.id));

        expect(repo.getItemsFromContainer(getState(), bag.id).length).toEqual(0);
      });
      it('does not allow containers to be put in itself', () => {
        dispatch(actions.dndShopItem(bag.id, bag.id, bag.id));
        expect(getState().containers[bag.id][bag.id]).toBeFalsy();
      });
    });

    describe('Dropping into the equipped purse', ()=> {
      let purse1 = Item.generateItem(cotw.Items.Purse.Purse, {
        copper: 100,
        gold  : 1
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

  describe('addToPurse', () => {
    beforeEach(() => {
      storeSetup();
      let purse = Item.generateItem(cotw.Items.Purse.Purse, {
        copper: 1000,
        silver: 50});
      dispatch(actions.addItem(purse));
      dispatch(actions.equipItem('purse', purse.id));
    });

    it('should subtract coins from purse', () => {
      dispatch(actions.addToPurse({copper: -500, platinum: 5}));
      let state = getState();
      let purse = state.items[state.player.equipment.purse];
      expect(purse.copper).toEqual(500);
      expect(purse.platinum).toEqual(5);
    });

    it('should give you change if you dont have the right denominations', () => {
      dispatch(actions.addToPurse({copper: -1100}));
      let state = getState();
      let purse = state.items[state.player.equipment.purse];
      expect(purse.copper).toEqual(0);
      expect(purse.silver).toEqual(49);
    });
  });

  describe('addToContainer', () => {
    const chest = Item.generateItem(cotw.Items.Pack.LargeChest);
    const bag = Item.generateItem(cotw.Items.Pack.MediumBag);

    beforeEach(() => {
      storeSetup();
      dispatch(actions.addItem(chest));
      dispatch(actions.addItem(bag));
    });
    it('allows nesting of containers', () => {
      dispatch(actions.addToContainer(chest.id, bag.id));
      expect(repo.getItemsFromContainer(getState(), chest.id).length).toEqual(1);
    });
  });

  it('sets game.showPurse on action.showPurse', () => {
    dispatch(actions.showPurse());
    expect(getState().game.showPurse).toEqual(true);
  });

  //describe('addBuilding', () => {
  //  it('should add a building', () => {
  //    dispatch(actions.addBuilding(map.generateBuilding(map.mapBuildings[map.GameArea.Village].VillageGate)));
  //  })
  //});
});