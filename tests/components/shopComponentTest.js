import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as itemFactory from '/core/item.js';

import {ShopView, mapState} from '/client/shop/shopComponent.jsx';
import Equipment from '/client/player/equipmentComponent.js';
import ShopWindow from '/client/shop/shopWindowComponent.js';
import Container from '/client/misc/containerComponent.js';
import Pack from '/client/player/packComponent.js';

describe("<ShopView>", () => {
  let component;
  const props = {
    building: {name:"Bob's Armorsmithy"}
  };

  component = shallow(<ShopView {...props}/>);

  it('should render equipment and shop window and not something else', () => {
    expect(component.find(Equipment).length).toEqual(1);
    expect(component.find(ShopWindow).length).toEqual(1);
    expect(component.find(Pack).length).toEqual(1);
    expect(component.find(Container).length).toEqual(0);
  });

  it('should display the building name', () => {
    expect(component.find('.test-building-name').text()).toContain(props.building.name);
  });

  describe('mapState', () => {
    it('maps a {building} to the state', () => {
      const state = {
        buildings: {
          'One': {name: 'OneBuilding'}
        },
        game: {
          currentBuilding: 'One'
        }
      };

      const actualState = mapState(state);
      expect(actualState.building.name).toEqual('OneBuilding');
    })
  });

  it('should route to /game on esc key');
});