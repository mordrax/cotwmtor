import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import ItemView from '/client/shop/item.jsx';

import {ItemsWindow} from '/client/misc/itemsWindowComponent.js';

describe("<ItemsWindow>", () => {
  let component;
  const connectDropTarget = () => {};

  const items = [
    Item.generateItem(cotw.Items.Armour.ElvenChainMail),
    Item.generateItem(cotw.Items.Shield.MediumIronShield),
    Item.generateItem(cotw.Items.Gauntlet.GauntletOfDexterity),
    Item.generateItem(cotw.Items.Belt.TwoSlotBelt),
    Item.generateItem(cotw.Items.Helmet.EnchantedHelmOfStorms)
  ];
  const props = {
    items,
    connectDropTarget,
    isDraggingOver: false
  };

  component = shallow(<ItemsWindow {...props} />);
  it('display a list of items', () => {
    expect(component.find(ItemView).length).toEqual(5);
  });

  it('should pass dragTargetType to items so they are draggable', () => {
    expect(component.find('[dragTargetType="armour"]').length).toEqual(1);
  });

  it('should be a dropTarget', () => {
    spyOn(props, 'connectDropTarget').and.callThrough();

  });

  it('should know when something is over it')
});