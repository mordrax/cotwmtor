import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import * as actions from '/actions/index.js';

import storeFactory from '/tests/core/testStore.js';

let store, dispatch, getState;
const storeSetup = () => {
  store = storeFactory();
  dispatch = store.dispatch;
  getState = store.getState;
};

describe("<ComponentName>", () => {
  let component;
  let props = {};

  beforeEach(storeSetup);
  //component = shallow(<ComponentName {...props} />);
  //describe('abc', () => {
  //  it('def');
  //});
});