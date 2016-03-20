import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import CharCreation from '../../client/charCreation/charCreation.jsx';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

describe("<CharCreation>", () => {
  let component;
  let props = {
    attributes: {},
    onChangeAttribute: () => {}
  };
  let store = createStore((state, _) => state, {
    player: {
      name: 'bob',
      gender: 'Male'
    }
  });

  beforeEach(() => {
    spyOn(props, 'onChangeAttribute');
    component = shallow(<Provider store={store}><CharCreation /></Provider>);
  });

  it('should display the player name correctly', () => {
    debugger;
    expect(component.find('#tet').prop('value')).toEqual('bob');
  });

  it('should allow cancelling of creation, changing route to title screen (/)', () => {
    throw 'TODO';
  });

  it('should tell the server about the player on creation of game', () => {
    throw 'TODO';
  });

  it('should route to the game screen on creation of game', () => {
    throw 'TODO';
  });
});