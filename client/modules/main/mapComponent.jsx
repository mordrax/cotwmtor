import ASCIITiles from '../enums/cotwContent';
import React from 'react';

function CalculatePathRotation(map, coord, match) {
  let left = map[coord.x - 1][coord.y]['tile'].name;
  let right = map[coord.x + 1][coord.y]['tile'].name;
  let top = map[coord.x][coord.y - 1]['tile'].name;
  let bottom = map[coord.x][coord.y + 1]['tile'].name;

  let rotation =
    left == match ?
      top == match ?
        270 : // left top
        0   // left bottom
      :
      top == match ?
        180 :  // right top
        90;   // right bottom

  return rotation;
}

export default class MapView extends React.Component {
  render() {
    console.log('draw map');

    let {map} = this.props;
    return (<div style={{height:'128px'}}>
      {
        _.map(map, function (mapRow) {
          return (_.map(mapRow, function (cell) {
            let style = {
              left: `${cell.coords.x * 32}px`,
              top : `${cell.coords.y * 32}px`
            };
            let className;
            if (cell.building && cell.buildingTopLeft) {
              className = 'building ' + cell.building.type.name;
            } else if (cell.tile) {
              className = 'tile ' + cell.tile.name.toLowerCase();
              if (cell.tile.name == 'PathGrass')
                style['transform'] = `rotate(-${CalculatePathRotation(map, cell.coords, 'Path')}deg)`;
            }

            let cellView = (<i className={className}
                               key={`cell.${cell.coords.x}.${cell.coords.y}`}
                               style={style}/>);
            return cellView;
          }))
        })
      }
    </div>)
  }
}