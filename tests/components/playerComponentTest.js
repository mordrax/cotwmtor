import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import Player, {playerPositionStyle} from '/client/main/playerComponent.js';

describe("<Player>", () => {
  let component;
  let props = {player: {
    coord : [1, 2],
    name  : 'bob',
    gender: 'female'
  }
  };

  beforeEach(() => {
    component = shallow(<Player {...props}/>);
  });

  it('should show a male/female hero', () => {
    expect(component.find('.femaleHero').length).toEqual(1);
    expect(component.find('.maleHero').length).toEqual(0);
  });

  it('should position the player absolutely at the correct coords', () => {
    let style = playerPositionStyle([1,2]);
    expect(style.left).toEqual('32px');
    expect(style.top).toEqual('64px');
    expect(style.position).toEqual('absolute');
  })

});