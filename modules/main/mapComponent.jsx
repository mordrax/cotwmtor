import ASCIITiles from '../enums/cotwContent';
import React from 'react';

function CalculatePathRotation(map, coord, match) {
  let left = map[coord.y][coord.x-1];
  let right = map[coord.y][coord.x+1];
  let top = map[coord.y-1][coord.x];
  let bottom = map[coord.y+1][coord.x];

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

const MapView = ({
  map
  }) => {
  let coords = {x: 0, y: 0};
  return (<div>
    {
      _.map(map, function (row) {
        let rowView = (<div key={`row.${coords.y}`} style={{height: '32px'}}>
          {
            _.map(row, function (cell) {
              let asset = ASCIITiles[cell];
              let style = {
                left: `${coords.x * 32}px`
              };
              if (cell == ';')
                style['transform'] = `rotate(-${CalculatePathRotation(map, coords, '.')}deg)`;

              let cellView = (<i className={`tile ${(asset.name||'').toLowerCase()}`}
                                 key={`cell.${coords.x}`}
                                 style={style}/>);
              coords.x++;
              return cellView;
            })
          }
        </div>);
        coords.y++;
        coords.x = 0;
        return rowView;
      })
    }
  </div>)
};

export default MapView;