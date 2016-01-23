import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {ASCIITiles, Tiles} from '../enums/cotwContent.js';
import cotw from '../enums/enums';
import maps from '../enums/maps';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';


const MainView = ({
  ASCIITiles,
  map,
  player,
  }) => {

  let coords = {x:0,y:0};
  return (
    <div>
      <h1>Welcome to Castle of the Winds - Past Present Future</h1>
      {
        _.map(map, function (row) {
          let rowView = (<div key={`row.${coords.y}`} style={{height: '32px'}}>
            {
              _.map(row, function (cell) {
                let asset = ASCIITiles[cell];
                asset.size = asset.size || {w: 32, h: 32};
                let offset = `-${asset.sprite.x}px -${asset.sprite.y}px`;
                let style = {
                  left: `${coords.x*32}px`
                };
                let cellView = (<i className={`tile ${(asset.name||'').toLowerCase()}`} key={`cell.${coords.x}`} style={style}></i>);
                coords.x++;
                return cellView;
              })
            }
          </div>);
          coords.y++;
          coords.x=0;
          return rowView;
        })
      }
      <i className={`tile maleHero`} style={{position:'absolute', top:`${player.coords.y*32}px`, left:`${player.coords.x*32}px`}}></i>
    </div>
  )
};

let MainContainer = connect(
  (state) => {
    return {
      ASCIITiles,
      map: maps[cotw.gameArea.Village],
      player: state.player
    }
  },
  (dispatch) => {
    return {
      onKeyPress: (e) => {
        dispatch({type: 'KEY_PRESS', event: e})
      }
    }
  }
)(MainView);

export default MainContainer;