import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import * as Item from '/core/item.js';

import reducer from '/reducers/itemReducer.js';
import storeFactory from '/tests/core/testStore.js';

let store, dispatch, getState;

describe("Reducer: Items", () => {
  const bracers = Item.generateItem(cotw.Items.Bracers.BracersOfDefenseVS);
  const pack = Item.generateItem(cotw.Items.Pack.EnchantedMediumPackOfHolding);
  const sword = Item.generateItem(cotw.Items.Weapon.BastardSword);

  beforeEach(() => {
    store = storeFactory();
    dispatch = store.dispatch;
    getState = store.getState;
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
});