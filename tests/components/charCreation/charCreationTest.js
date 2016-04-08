import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import {CharCreation, mapDispatch, mapState } from '/client/charCreation/charCreation.jsx';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import {routeActions} from 'redux-simple-router';
import * as actions from '/actions/index';

describe("<CharCreation>", () => {
  let component;
  let props = {
    player: {
      name: 'bob',
      gender: 'Male'
    },
    onChangeGender: () => {}
  };

  beforeEach(() => {
    component = shallow(<CharCreation {...props} />);
  });

  it('should display the player name correctly', () => {
    expect(component.find('input').prop('value')).toEqual('bob');
  });

  describe('mapState', () => {
    let state = mapState({abc:1, player: {name:'bob'}});
    it('should map the player to the state', () => {
      expect(state.player.name).toEqual('bob');
      expect(state.abc).toBeUndefined();
    })
  });

  describe('mapDispatch', () => {
    let props = {dispatch : () => {}};
    let testDispatch;
    beforeEach(() => {
      spyOn(props, 'dispatch');
      testDispatch = mapDispatch(props.dispatch);
    });

    it('should dispatch a route action "/" on cancel', () => {
      testDispatch.onCancelled();
      expect(props.dispatch).toHaveBeenCalledWith(routeActions.push('/'))
    });

    it('should increase stats', () => {
      testDispatch.onChangeAttribute('Strength', 5);
      expect(props.dispatch).toHaveBeenCalledWith(actions.setAttribute('Strength', 5))
    });

    describe('New game creation', () => {
      it('should save the game to server and route to /game on a new game', () => {
        //TODO: Server spy, async spy and route action
      })
    })

  })
});