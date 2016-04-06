import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount} from 'enzyme';
import {ShopView, mapState} from '/client/shop/shopComponent.jsx';
import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as itemFactory from '/core/item.js';

describe("<ShopView>", () => {
  let component;
  let props = {
    building: {},
    containers: {},
    items: {},
    pack: {},
    packItems: {},
    buildingItems: {}
  };

  component = shallow(<ShopView {...props}/>);

  describe('Correct states are mapped', () => {

  });

  describe('Pack panel', () => {
    it('should display pack content');
    it('should respect weight limit of pack');
    it('should respect bulk limit of pack');
  });

  describe('Buy/sell behaviour', () => {
    it('should allow purchase from shop');
    it('should allow sale to shop');
  });

  describe('Identification behaviour', () => {
    it('should allow id on unidentified items');
  });

  it('should route to /game on esc key');
});