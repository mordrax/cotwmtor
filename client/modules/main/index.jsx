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
  game,
  map,
  player
  }) => {
  return (
    <div>
      <h1>Welcome to Castle of the Winds - ({game.name})</h1>
      <div style={{position:'relative'}}>
        <MapView map={map} />
        <PlayerView player={player}/>
        {//<BuildingView buildings={buildings}/>
        }
      </div>
    </div>
  )
};

let MainContainer = connect(
  (state) => {
    return {
      map   : state.game.map[state.game.area],
      player: state.player,
      game: state.game,
      //buildings: gameMaps.buildings[cotw.gameArea.Village]
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;