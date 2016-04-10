import * as actions from '/actions/index.js';
import * as items from '/core/item.js';
import * as cotw from '/core/cotwContent.js';

import storeFactory from '/tests/core/testStore.js';

let store, dispatch, getState, state;
const setupStore = () => {
  store = storeFactory();
  dispatch = store.dispatch;
  getState = store.getState;
};

describe("Reducer: Player", () => {
  beforeEach(setupStore);

  it('should return base state on no action', () => {
    expect(getState().player.name).toBeDefined();
    expect(getState().player.attributes).toBeDefined();
    expect(getState().player.equipment).toBeDefined();
  });

  it('should set gender', () => {
    dispatch(actions.setGender('female'));
    expect(getState().player.gender).toEqual('female');
  });

  it('should set difficulty', () => {
    dispatch(actions.setDifficulty('easy'));
    expect(getState().player.difficulty).toEqual('easy');
  });

  it('should increase attributes', () => {
    dispatch(actions.setAttribute('Strength', 5));
    expect(getState().player.attributes.Strength).toEqual({value: 55, name: 'Strength'});
    expect(getState().player.attributes.Available).toEqual({value: 95, name: 'Available'});
  });

  it('should decrease attributes', () => {
    dispatch(actions.setAttribute('Intelligence', -5));
    expect(getState().player.attributes.Intelligence).toEqual({value: 45, name: 'Intelligence'});
    expect(getState().player.attributes.Available).toEqual({value: 105, name: 'Available'});
  });

  it('should not increase attibutes past 100', () => {
    dispatch(actions.setAttribute('Dexterity', 55));
    expect(getState().player.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(getState().player.attributes.Available).toEqual({value: 100, name: 'Available'});
  });

  it('should not decrease attributes past 0', () => {
    dispatch(actions.setAttribute('Dexterity', -55));
    expect(getState().player.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(getState().player.attributes.Available).toEqual({value: 100, name: 'Available'});
  });

  describe('Inventory interactions', () => {
    let fourSlotBelt = items.generateItem(cotw.Items.Belt.FourSlotBelt);

    beforeEach(() => {
      setupStore();
      dispatch(actions.equipItem('belt', fourSlotBelt.id));
    });

    it('should allow players to equip items', () => {
      expect(getState().player.equipment.belt).toEqual(fourSlotBelt.id);
    });

    it('should allow players to unequip items', () => {
      dispatch(actions.unequipItem('belt'));
      expect(getState().player.equipment.belt).toBeNull();
    });

    //TODO: This is not possible with the current design of the state & reducers;
    it('should prevent players from equiping items into the wrong slot');

  });

  describe('Movements', () => {
    let currentCoords;

    beforeEach(() => {
      setupStore();
      currentCoords = getState().player.coord;
    });

    it('should move players', () => {
      dispatch(actions.movePlayer([0, 1]));
      expect(getState().player.coord[1]).toEqual(currentCoords[1] + 1);
    });

    it('should teleport players to different parts of the map (on entering new areas)', () => {
      dispatch(actions.teleportPlayer([42, 6]));
      expect(getState().player.coord).toEqual([42, 6]);
    });
  });

  describe('Purse', () => {
    beforeEach(() => {
      setupStore();
      let purse = items.generateItem(cotw.Items.Purse.Purse);
      dispatch(actions.addItem(purse));
      dispatch(actions.equipItem('purse', purse.id));
    });

    it('should be able to equip a purse', () => {
      let itemId = getState().player.equipment.purse;
      expect(itemId).toBeTruthy();

      let purse = getState().items[itemId];
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
      throw 'TODO';
    });

    it('should not take out more than what the purse has', () => {
      throw 'TODO';
    })
  })
});