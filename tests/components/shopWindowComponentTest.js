import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';

import {ShopWindow, mapState} from '/client/shop/shopWindowComponent.js';
import Container from '/client/misc/containerComponent.js';

describe("<ShopWindow>", () => {
  let component;
  const props = {
    building: {name: "Bob's Armorsmithy"}
  };

  component = shallow(<ShopWindow {...props}/>);

  it('should render a title and a container for items', () => {
    expect(component.find('.ui.block.header').text()).toContain('Shop');
    expect(component.find(Container).length).toEqual(1);
  });

  describe('mapState', () => {
    const state = {
      buildings : {
        'One': {name: 'OneBuilding', cid: '7'}
      },
      containers: {
        '7': {'Item1': true, 'Item2': true}
      },
      game      : {
        currentBuilding: 'One'
      },
      items     : {
        Item1: {id: 'Item1', name: 'AnItem'},
        Item2: {id: 'Item2', name: 'AnotherItem'}
      }
    };

    const mappedState = mapState(state);
    it('gets items from the current building', () => {
      expect(mappedState.items.length).toEqual(2);
    });

    it('passes in a containerId for the drop to know which container to remove item from', () => {
      expect(mappedState.containerId).toEqual('7');
    });
  });
});