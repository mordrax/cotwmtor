import * as actions from '/actions/index.js';
import reducer from '/reducers/playerReducer.js';
import * as items from '/core/item.js';
import * as cotw from '/core/cotwContent.js';

describe("Reducer: Player", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it('should return base state on no action', () => {
    expect(state.name).toBeDefined();
    expect(state.attributes).toBeDefined();
    expect(state.equipment).toBeDefined();
  });

  it('should set gender', () => {
    let newState = reducer(state, actions.setGender('female'));
    expect(newState.gender).toEqual('female');
  });

  it('should set difficulty', () => {
    let newState = reducer(state, actions.setDifficulty('easy'));
    expect(newState.difficulty).toEqual('easy');
  });

  it('should increase attributes', () => {
    let newState = reducer(state, actions.setAttribute('Strength', 5));
    expect(newState.attributes.Strength).toEqual({value: 55, name: 'Strength'});
    expect(newState.attributes.Available).toEqual({value: 95, name: 'Available'});
  });

  it('should decrease attributes', () => {
    let newState = reducer(state, actions.setAttribute('Intelligence', -5));
    expect(newState.attributes.Intelligence).toEqual({value: 45, name: 'Intelligence'});
    expect(newState.attributes.Available).toEqual({value: 105, name: 'Available'});
  });

  it('should not increase attibutes past 100', () => {
    let newState = reducer(state, actions.setAttribute('Dexterity', 55));
    expect(newState.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(newState.attributes.Available).toEqual({value: 100, name: 'Available'});
  });

  it('should not decrease attributes past 0', () => {
    let newState = reducer(state, actions.setAttribute('Dexterity', -55));
    expect(newState.attributes.Dexterity).toEqual({value: 50, name: 'Dexterity'});
    expect(newState.attributes.Available).toEqual({value: 100, name: 'Available'});
  });

  describe('Inventory interactions', () => {
    let fourSlotBelt = items.generateItem(cotw.Items.Belt.FourSlotBelt);
    let equippedState = reducer(state, actions.equipItem('belt', fourSlotBelt.id));

    it('should allow players to equip items', () => {
      expect(equippedState.equipment.belt).toEqual(fourSlotBelt.id);
    });

    it('should allow players to unequip items', () => {
      let unequipState = reducer(equippedState, actions.unequipItem('belt'));
      expect(unequipState.equipment.belt).toBeNull();
    });

    //TODO: This is not possible with the current design of the state & reducers;
    it('should prevent players from equiping items into the wrong slot');

  });

  describe('Movements', () => {
    let currentCoords;

    beforeEach(() => {
      state = reducer(undefined, {});
      currentCoords = state.coord;
    });

    it('should move players', () => {
      let movedPlayer = reducer(state, actions.movePlayer([0, 1]));
      expect(movedPlayer.coord[1]).toEqual(currentCoords[1] + 1);
    });

    it('should teleport players to different parts of the map (on entering new areas)', () => {
      let teleportedPlayer = reducer(state, actions.teleportPlayer([42, 6]));
      expect(teleportedPlayer.coord).toEqual([42, 6]);
    });
  });
});