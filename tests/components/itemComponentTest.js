import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as Item from '/core/item.js';
import * as cotw from '/core/cotwContent.js';

import {ItemView, dragTargets} from '/client/shop/itemComponent.js';

describe("<Item>", () => {
  let component;
  let bracers = Item.generateItem(cotw.Items.Bracers.Bracers, {type: cotw.ItemType.Bracers});
  let props = {
    cid: '7',
    item: bracers,
    isDragging: true
  };

  component = shallow(<ItemView {...props}/>);

  it('should display item name and picture', () => {
    expect(component.find('.description').text()).toEqual(bracers.base.name);
    expect(component.find(`.${bracers.base.css}`));
  });

  it('should make dragged item a bit transparent', () => {
    expect(component.find('.ui.item').node.props.style.opacity).toEqual(0.5);
  });

  it("should set the dragTarget to be from the prop's item type", () => {
    const actualTarget = dragTargets(props);
    expect(actualTarget).toEqual('Bracers');
  })
});