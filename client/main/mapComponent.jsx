import ASCIITiles from '/core/cotwContent';
import React from 'react';
import PlayerView from './playerComponent.jsx';

/**
 * Rotates a half/half tile to be facing the right way re neighbours
 * Assumes top right is the half that needs to be matched
 * @param map - 2D tile map
 * @param coord - tile to rotate
 * @param match - ASCIITile neighbour to match
 * @returns {number} - rotation angle
 * @constructor
 */
export const CalculatePathRotation = (map, coord, match) => {
  let left = map[coord[0] - 1][coord[1]]['tile'].css;
  let right = map[coord[0] + 1][coord[1]]['tile'].css;
  let top = map[coord[0]][coord[1] - 1]['tile'].css;
  let bottom = map[coord[0]][coord[1] + 1]['tile'].css;

  let rotation =
    left == match ?
      top == match ?
        90 : // left top
        0   // left bottom
      :
      top == match ?
        180 :  // right top
        270;   // right bottom

  return rotation;
};

const MapView = ({map, player}) => {
  return (<div className="map-view-component" style={{position:'relative'}}> {

    _.map(map, function (mapRow) {
      return (_.map(mapRow, function (cell) {
        let style = {
          left: `${cell.coord[0] * 32}px`,
          top : `${cell.coord[1] * 32}px`
        };

        let className;
        if (cell.buildingType && cell.buildingTopLeft) {
          if (cell.buildingType.isTile) {
            className = 'tile ' + cell.buildingType.css;
          } else {
            className = 'building ' + cell.buildingType.css;
          }
        } else if (cell.tile) {
          className = 'tile ' + cell.tile.css;
          let rotations = {'PathGrass': 'Path', 'WallDarkDgn': 'Rock'};
          _.forEach(rotations, function (value, key) {
            if (cell.tile.css == key) {
              style['transform'] = `rotate(${CalculatePathRotation(map, cell.coord, value)}deg)`;
            }
          });
        }

        return <i className={className}
                  key={`cell.${cell.coord[0]}.${cell.coord[1]}`}
                  style={style}/>;
      }))
    })
  }
    <PlayerView player={player}/>
  </div>)
};

export default MapView;