import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import {Equipment, mapState} from '/client/player/equipmentComponent.js';
import Container from '/client/misc/containerComponent.js';
import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import _ from 'lodash';

describe("<Equipment>", () => {
  let component;
  let purse = Item.generateItem(cotw.Items.Purse.Purse);
  let props = {
    equipment: {
      purse
    }
  };
  component = shallow(<Equipment {...props} />);

  it('should display equipment slots', () => {
    expect(component.find(".equipmentSlot").length).toEqual(1);
  });

  it('should have a css class named after the slot', () => {
    expect(component.find(".equipmentSlot.purse").length).toEqual(1);
  });

  it('should display worn equipment', () => {
    let purse = component.find('.equipmentSlot.purse');
    let item = purse.children().props().items;
    expect(item.length).toEqual(1);
    expect(item[0].base.name).toEqual(cotw.Items.Purse.Purse.name);
  });

  it('should map player equipment to component state {equipment: item}', () => {
    const freehand = Item.generateItem(cotw.Items.Weapon.BastardSword);
    const shield = Item.generateItem(cotw.Items.Shield.LargeIronShield);
    const fakeShield = Item.generateItem(cotw.Items.Shield.BrokenShield);

    const state = mapState({
      player: {
        equipment: {
          freehand: freehand.id,
          shield  : shield.id
        }
      },
      items : {
        [freehand.id]: freehand,
        [shield.id]  : shield
      }
    });

    let actualEquipment = _.filter(state.equipment, x=>x != null);

    expect(actualEquipment.length).toEqual(2);
    expect(_.contains(actualEquipment, freehand)).toBe(true);
    expect(_.contains(actualEquipment, shield)).toBe(true);
    expect(_.contains(actualEquipment, fakeShield)).toBe(false);
  });
});