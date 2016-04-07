import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';

import actions from '/actions/index.js';
import store from './testStore.js';

import {Pack, mapState} from '/client/player/packComponent.js';
import Container from '/client/misc/containerComponent.js';

describe("<Pack>", () => {
  let component;
  const sword = Item.generateItem(cotw.Items.Weapon.BastardSword);
  const shield = Item.generateItem(cotw.Items.Shield.LargeIronShield);
  const bag = Item.generateItem(cotw.Items.Pack.LargeBag);

  store.dispatch(actions.addItem(sword));
  store.dispatch(actions.addItem(shield));
  store.dispatch(actions.addItem(bag));

  store.dispatch(actions.addAsContainer(bag.id));
  store.dispatch(actions.addToContainer(bag.id, sword.id));
  store.dispatch(actions.addToContainer(bag.id, shield.id));

  store.dispatch(actions.equipItem('pack', bag.id));

  let state = store.getState();

  const props = {...mapState(state)};

  component = shallow(<Pack {...props}/>);

  it('should render a title and a container for items', () => {
    expect(component.find('.ui.block.header').text()).toContain('Pack');
    expect(component.find(Container).length).toEqual(1);
  });

  describe('What it gives to the container', () => {
    const containerProps = component.find(Container).props();
    it('the dropTargetType should include all items', () => {
      expect(containerProps.dropTargetType).toContain('Weapon');
      expect(containerProps.dropTargetType).toContain('Armour');
      expect(containerProps.dropTargetType).toContain('Boots');
      expect(containerProps.dropTargetType).toContain('Neckwear');
    });

    it('should give the container its container id', () => {
      expect(containerProps.id).toEqual(bag.id);
    });

    it('should give the items to be rendered', () => {
      expect(containerProps.items.length).toEqual(2);
    });

    it('should give the pack (for calculating max weight/bulk)', () => {
      expect(containerProps.pack).toEqual(bag);
      expect(containerProps.pack).not.toEqual(sword);
      expect(containerProps.pack).not.toEqual(null);
    })
  });

  it('renders the weight of the pack', () => {
    expect(component.find('.test-weight-bulk').text()).toContain(bag.base.weightCap);
    expect(component.find('.test-weight-bulk').text()).not.toContain(bag.base.weightCap+5);
  });

  it('renders the weight of all items in the pack', () => {
    expect(component.find('.test-weight-bulk').text()).toContain(sword.base.weight+shield.base.weight);
    expect(component.find('.test-weight-bulk').text()).not.toContain(sword.base.weight+shield.base.weight+5);
  });

  it('renders the bulk of all items in the pack', () => {
    expect(component.find('.test-weight-bulk').text()).toContain(bag.base.bulkCap);

    expect(component.find('.test-weight-bulk').text()).toContain(sword.base.bulk + shield.base.bulk);
    expect(component.find('.test-weight-bulk').text()).not.toContain(sword.base.bulk + shield.base.bulk + 5);
  });
});