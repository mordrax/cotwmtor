import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';

import {ContainerView} from '/client/misc/containerComponent.jsx';
import ItemView from '/client/shop/itemComponent.js';

import * as actions from '/actions/index.js';
import storeFactory from './../core/testStore.js';

describe("<Container>", () => {
  let component;

  let items = [
    Item.generateItem(cotw.Items.Armour.ElvenChainMail),
    Item.generateItem(cotw.Items.Shield.MediumIronShield),
    Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity),
    Item.generateItem(cotw.Items.Belt.TwoSlotBelt),
    Item.generateItem(cotw.Items.Helmet.EnchantedHelmOfStorms)
  ];
  const store = storeFactory();
  let bag = Item.generateItem(cotw.Items.Pack.LargeChest);

  _.forEach(items, x=>store.dispatch(actions.addItem(x)));
  _.forEach(items, x=>store.dispatch(actions.addToContainer(bag.id, x.id)));

  store.dispatch(actions.addItem(bag));
  store.dispatch(actions.addAsContainer(bag.id));

  let state = store.getState();

  let props = {
    items,
    id    : bag.id,
    isOver: true
  };

  component = shallow(<ContainerView {...props}/>);

  it('should display all items', () => {
    expect(component.find(ItemView).length).toEqual(5);
    expect(component.find(ItemView).length).not.toEqual('5');
  });

  it('passes the dragTargetType, container and the item itself to the ItemView', () => {
    const actualItem = (component.find(ItemView).nodes[4]).props;
    const expectedItem = items[4];
    expect(actualItem.dragTargetType).toEqual(expectedItem.base.type);
    expect(actualItem.dragTargetType).not.toEqual('');

    expect(actualItem.cid).toEqual(props.id);

    expect(actualItem.item).toEqual(expectedItem);
  });
});