import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {ASCIITiles, Tiles} from '../enums/cotwContent.js';
import cotw from '../enums/enums';
import maps from '../enums/maps';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';

const MainView = ({
  ASCIITiles,
  map
  }) => {

  return (
    <div>
      <h1>Welcome to Castle of the Winds - Past Present Future</h1>
      {
        _.map(map, function (row) {
          return (<div style={{height: '32px'}}>
            {
              _.map(row, function (cell) {
                let offset = `-${ASCIITiles[cell].sprite.x}px -${ASCIITiles[cell].sprite.y}px`;
                let style = {
                  background: 'url(assets/original/tiles.png) ' + offset,
                  height: '32px',
                  width: '32px',
                  display: 'inline-block'
                };
                return <i style={style}></i>
              })
            }
          </div>)
        })
      }
    </div>
  )
};

let MainContainer = connect(
  () => {
    return {ASCIITiles, map: maps[cotw.gameArea.Village]}
  }
)(MainView);

export default MainContainer;