import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import {ShopView, mapState} from '/client/shop/shopComponent.jsx';
import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';

//describe("<Shop>", () => {
//  let component;
//  let props = {};
//
//  describe('Equipment panel', () => {
//    it('should display panel');
//
//    it('should display worn equipment');
//
//    it('should allow equipping of items');
//  });
//
//  describe('Shop panel', () => {
//    it('should display stock');
//  });
//
//  describe('Pack panel', () => {
//    it('should display pack content');
//    it('should respect weight limit of pack');
//    it('should respect bulk limit of pack');
//  });
//
//  describe('Buy/sell behaviour', () => {
//    it('should allow purchase from shop');
//    it('should allow sale to shop');
//  });
//
//  describe('Identification behaviour', () => {
//    it('should allow id on unidentified items');
//  });
//
//  it('should route to /game on esc key');
//});