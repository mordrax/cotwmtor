import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import * as actions from '/actions/index.js';

import storeFactory from '/tests/core/testStore.js';
import Game from '/client/game/init.js';

let store, dispatch, getState;
const storeSetup = () => {
  store = storeFactory();
  dispatch = store.dispatch;
  getState = store.getState;
};

describe("Starting a new game", () => {
  describe('Player equipment', () => {
    let state;
    beforeEach(() => {
      storeSetup();
      Game.init(store);
      state = getState();
    });
    it('should create a player with starting equipment', () => {

      expect(state.player).toBeTruthy('Player exists');
      expect(state.player.equipment).toBeTruthy('Has equipment');
      expect(state.player.equipment.purse).toBeTruthy('Has purse');
    });

    it('should give the player some starting money', () => {
      let purseId = state.player.equipment.purse;
      expect(state.items[purseId].copper).toEqual(1000);
      expect(state.items[purseId].silver).toEqual(10);
      expect(state.items[purseId].gold).toEqual(1);
      expect(state.items[purseId].platinum).toEqual(0);
    });
  });

  describe('Areas and buldings', () => {

  });

  //component = shallow(<ComponentName {...props} />);
  //describe('abc', () => {
  //  it('def');
  //});
});