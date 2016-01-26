import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cotw from '../enums/enums';
import gameMaps from '../enums/maps';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import MapView from './mapComponent.jsx';
import PlayerView from './playerComponent.jsx';
import BuildingView from './buildingComponent.jsx';

const MainView = ({
  map,
  player,
  buildings
  }) => {
  return (
    <div>
      <h1>Welcome to Castle of the Winds - Past Present Future</h1>
      <div style={{position:'relative'}}>
        <MapView map={map} />
        <PlayerView player={player}/>
        <BuildingView buildings={buildings}/>
      </div>
    </div>
  )
};

let MainContainer = connect(
  (state) => {
    return {
      map   : gameMaps.maps[cotw.gameArea.Village],
      player: state.player,
      buildings: gameMaps.buildings[cotw.gameArea.Village]
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;