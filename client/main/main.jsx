import React from 'react';
import { connect } from 'react-redux';
import cotw from '/client/enums/enums.js';
import {GameScreen} from '/client/enums/maps.js';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import MapView from './mapComponent.jsx';

const MainView = ({game, area, player}) => (
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
      area   : state.areas[state.game.currentArea],
      player: state.player,
      game  : state.game
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;