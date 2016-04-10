import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import * as Item from '/core/item.js';

import reducer from '/reducers/itemReducer.js';
import storeFactory from '/tests/core/testStore.js';

let store, dispatch, getState;
const setupStore = () => {
  store = storeFactory();
  dispatch = store.dispatch;
  getState = store.getState;
};

describe("Reducer: Items", () => {
  const bracers = Item.generateItem(cotw.Items.Bracers.BracersOfDefenseVS);
  const pack = Item.generateItem(cotw.Items.Pack.EnchantedMediumPackOfHolding);
  const sword = Item.generateItem(cotw.Items.Weapon.BastardSword);

  beforeEach(() => {
    setupStore();
  });

  it('should add an item', () => {
    dispatch(actions.addItem(bracers));
    expect(actions.getItems(getState()).length).toEqual(1);
  });

  it('should remove an item', () => {
    dispatch(actions.addItem(bracers));
    dispatch(actions.removeItem(bracers.id));

    expect(getState().items).toEqual({});
    expect(actions.getItems(getState()).length).toEqual(0);
  });

  it('should add a container if item is a bag or pack', () => {
    dispatch(actions.addItem(pack));
    expect(getState().containers[pack.id]).toEqual({});
  });

  it('should not add a container if item is not a bag or pack', () => {
    dispatch(actions.addItem(sword));
    expect(getState().containers[sword.id]).toEqual(undefined);
  });

  it('should remove a pack from containers', () => {
    dispatch(actions.addItem(pack));
    dispatch(actions.removeItem(pack.id));
    expect(getState().containers[pack.id]).toEqual(undefined);
  });

  it('should update the weight of an item');
  //() => {
  //  let newState = reducer(state, actions.addItem(item));
  //  newState = reducer(newState, actions.updateItem(item.id, 50));
  //  expect(newState[item.id].weight).toEqual(50);
  //});

  describe('Purse', () => {
    beforeEach(() => {
      setupStore();
      let purseItem = Item.generateItem(cotw.Items.Purse.Purse);
      dispatch(actions.addItem(purseItem));
      dispatch(actions.equipItem('purse', purseItem.id));
    });

    it('should be able to equip a purse', () => {
      let purseId = getState().player.equipment.purse;
      expect(purseId).toBeTruthy();

      let purse = getState().items[purseId];
      expect(purse).toBeTruthy();
    });

    it('should be able to add coins to a purse', () => {
      let purseId = getState().player.equipment.purse;
      let purse = getState().items[purseId];

      expect(purse.copper).toEqual(0);

      dispatch(actions.updatePurse({copper: 100, gold: 1}));

      expect(getState().items[purseId].copper).toEqual(100);
      expect(getState().items[purseId].gold).toEqual(1);
      expect(getState().items[purseId].platinum).toEqual(0);
    });

    it('should be able to remove coins from a purse', () => {
      let purseId = getState().player.equipment.purse;
      let purse = getState().items[purseId];

      expect(purse.copper).toEqual(0);

      dispatch(actions.updatePurse({copper: 100, gold: 3}));
      dispatch(actions.updatePurse({copper: -50, gold: -1}));

      expect(getState().items[purseId].copper).toEqual(50);
      expect(getState().items[purseId].gold).toEqual(2);
      expect(getState().items[purseId].platinum).toEqual(0);
    });

    it('should not take out more than what the purse has', () => {
      let purseId = getState().player.equipment.purse;
      let purse = getState().items[purseId];

      expect(purse.copper).toEqual(0);

      dispatch(actions.updatePurse({copper: -50, gold: -1}));

      expect(getState().items[purseId].copper).toEqual(0);
      expect(getState().items[purseId].gold).toEqual(0);
    });
  })
});