import React from 'react';
import { connect } from 'react-redux';
import {GameScreen} from '/core/maps.js';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import MapView from './mapComponent.jsx';

export const MainView = ({game, area, player}) => (
  <div>
    <h1>Welcome to Castle of the Winds - ({game.name})</h1>
    {
      <MapView map={area} player={player}/>
    }
  </div>
);

let MainContainer = connect(
  (state) => {
    return {
      area  : state.areas[state.game.currentArea],
      player: state.player,
      game  : state.game
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;