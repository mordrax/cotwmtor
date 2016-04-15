import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import * as actions from '/actions/index.js';
import {storeSetup, dispatch, getState} from './../core/testStore.js';
import * as repo from '/reducers/reducerRepository.js';

describe('actions/index.js', () => {
  describe('addToPurse', () => {
    beforeEach(() => {
      storeSetup();
      let purse = Item.generateItem(cotw.Items.Purse.Purse, {
        copper: 1000,
        silver: 50});
      dispatch(actions.addItem(purse));
      dispatch(actions.equipItem('purse', purse.id));
    });

    it('should subtract coins only ', () => {
      dispatch(actions.removeFromPurse({copper: 500, platinum: 5}));
      let state = getState();
      let purse = state.items[state.player.equipment.purse];
      expect(purse.copper).toEqual(1000);
      expect(purse.silver).toEqual(50);
    });

    it('should give you change if you dont have the right denominations', () => {
      dispatch(actions.removeFromPurse({copper: 1100}));
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
      expect(repo.getItemsFromContainer(getState, chest.id).length).toEqual(1);
    });
  });

  it('sets game.showPurse on action.showPurse', () => {
    dispatch(actions.showPurse());
    expect(getState().game.showPurse).toEqual(true);
  });
});