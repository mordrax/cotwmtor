import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import _ from 'lodash';

import * as actions from '/actions/index.js';
import {storeSetup, dispatch, getState} from './../core/testStore.js';
import {Purse, mapState, mapDispatch} from '/client/player/purseComponent.js';
import {ContainerView} from '/client/misc/containerComponent.js';

let component;
const purse = _.extend(Item.generateItem(cotw.Items.Purse.Purse), {
  copper: 1000,
  silver:50,
  gold:0
});

const newComponent = () => {
  let props = _.extend({}, mapState(getState()), mapDispatch(dispatch));
  return shallow(<Purse {...props} />);
};

describe("<Purse>", () => {
  beforeEach(() => {
    storeSetup();

    dispatch(actions.addItem(purse));
    dispatch(actions.equipItem('purse', purse.id));

    component = newComponent();
  });

  it('should show all denominations, even if zero coins', () => {
    expect(component.find('[id="copper"]').text()).toEqual('1000');
    expect(component.find('[id="silver"]').text()).toEqual('50');
    expect(component.find('[id="gold"]').text()).toEqual('0');
    expect(component.find('[id="platinum"]').text()).toEqual('0');
  });
});