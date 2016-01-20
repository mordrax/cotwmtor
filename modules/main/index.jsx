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
                let asset = ASCIITiles[cell];
                asset.size = asset.size || {w: 32, h: 32};
                let offset = `-${asset.sprite.x}px -${asset.sprite.y}px`;
                let style = {
                  background: 'url(assets/original/tiles.png) ' + offset,
                  height    : `${asset.size.h}px`,
                  width     : `${asset.size.w}px`,
                  display   : 'inline-block'
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