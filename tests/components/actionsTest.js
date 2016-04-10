import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';

import * as actions from '/actions/index.js';
import storeFactory from './../core/testStore.js';
import * as repo from '/reducers/reducerRepository.js';

describe('Actions', () => {
  const armour = Item.generateItem(cotw.Items.Armour.ElvenChainMail);
  const shield = Item.generateItem(cotw.Items.Shield.MediumIronShield);
  const gauntlet = Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity);
  const belt = Item.generateItem(cotw.Items.Belt.TwoSlotBelt);
  const helmet = Item.generateItem(cotw.Items.Helmet.EnchantedHelmOfStorms);

  const chest = Item.generateItem(cotw.Items.Pack.LargeChest);
  const bag = Item.generateItem(cotw.Items.Pack.MediumBag);

  const items = [armour, shield, gauntlet, belt, helmet];

  let store, getState, dispatch;
  beforeEach(() => {
    store = storeFactory();
    dispatch = store.dispatch;

    getState = store.getState;
    _.forEach(items, x=>dispatch(actions.addItem(x)));

    dispatch(actions.addItem(chest));
    _.forEach(items, x=>dispatch(actions.addToContainer(chest.id, x.id)));

    dispatch(actions.addItem(bag));
  });

  it('moves the item from the source container to the destination container', () => {
    dispatch(actions.moveItem(shield.id, chest.id, bag.id));

    const chestItems = repo.getItemsFromContainer(getState(), chest.id);
    const bagItems = repo.getItemsFromContainer(getState(), bag.id);

    expect(chestItems.length).toEqual(4);
    expect(bagItems.length).toEqual(1);
  });

  it('does not move item if it exceeds weight limit', () => {
    expect(repo.getItemsFromContainer(getState(), bag.id).length).toEqual(0);

    dispatch(actions.moveItem(chest.id, 'pack', bag.id));

    expect(repo.getItemsFromContainer(getState(), bag.id).length).toEqual(0);
  });

  it('allows nesting of containers', () => {
    dispatch(actions.addToContainer(chest.id, bag.id));
    expect(repo.getItemsFromContainer(getState(), chest.id).length).toEqual(6);
  });

  it('allows equipping of items', () => {
    dispatch(actions.moveItem(shield.id, chest.id, 'shield'));
    expect(getState().player.equipment.shield).toEqual(shield.id);
  });

  it('doesnt allow doubling up of equipment slot items', () => {
    const shield2 = Item.generateItem(cotw.Items.Shield.LargeIronShield);

    dispatch(actions.addItem(shield2));
    dispatch(actions.equipItem('shield', shield2.id));
    expect(getState().player.equipment.shield).toEqual(shield2.id);
    expect(getState().player.equipment.shield).not.toEqual(shield.id);

    dispatch(actions.moveItem(shield.id, chest.id, 'shield'));
    expect(getState().player.equipment.shield).toEqual(shield2.id);
    expect(getState().player.equipment.shield).not.toEqual(shield.id);
  });

  it('allows you to unequip items', () => {
    dispatch(actions.moveItem(shield.id, chest.id, 'shield'));
    expect(getState().player.equipment.shield).toEqual(shield.id);

    dispatch(actions.moveItem(shield.id, 'shield', chest.id));
    expect(getState().player.equipment.shield).toBeFalsy();
  });

  it('does not allow containers to be put in itself', () => {
    dispatch(actions.moveItem(bag.id, bag.id, bag.id));
    expect(getState().containers[bag.id][bag.id]).toBeFalsy();
  });

  it('combines the contents of two purses by dropping a purse on equipment');
});