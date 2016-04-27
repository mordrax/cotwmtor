import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount} from 'enzyme';
import Main, {MainView} from '/client/main/main.js';
import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';

describe("<Main>", () => {
  let component;
  let props = {
    game:{},
    area:{},
    player:{}
  };

  it('should display a map', () => {
    component = mount(<MainView {...props}/>);
    expect(component.find('.map-view-component').length).toEqual(1);
  });
});