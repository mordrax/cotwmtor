import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import Item, {ItemView} from '/client/shop/item.jsx';
import * as itemFactory from '/core/item.js';
import * as cotw from '/core/cotwContent.js';
import { DragSource } from 'react-dnd';

describe("<Item>", () => {
  let component;
  let bracers = itemFactory.generateItem(cotw.Items.Bracers.Bracers);
  let props = {
    item: bracers
  };

  it('should draw tiles', () => {
    component = shallow(<ItemView {...props}/>);

    expect(component.find('.description').text()).toEqual(bracers.base.name);
  });

  it('should make dragged item a bit opaque', () => {
    props.isDragging = true;
    component = shallow(<ItemView {...props}/>);

    expect(component.find('.item').node.props.style.opacity).toEqual(0.5);
  });
});