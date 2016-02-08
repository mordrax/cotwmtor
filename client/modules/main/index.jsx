import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cotw from '../enums/enums';
import {GameScreen} from '../enums/maps';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import MapView from './mapComponent.jsx';
import ScreenView from './screenComponent.jsx';

const MainView = ({
  game,
  map,
  player
  }) => {
  return (
    <div>
      <h1>Welcome to Castle of the Winds - ({game.name})</h1>
      {
        (game.screen == GameScreen.Map) ?
          <MapView map={map} player={player}/> :
          <ScreenView building={game.buildingScreen} />
      }
    </div>
  )
};

let MainContainer = connect(
  (state) => {
    return {
      map   : state.game.map[state.game.area],
      player: state.player,
      game  : state.game
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;