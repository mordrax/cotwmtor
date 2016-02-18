import ASCIITiles from '/client/enums/cotwContent';
import React from 'react';

const BuildingView = ({buildings}) => (
  <div>
    {
      _.map(buildings, function (building) {
        let buildingView = <i
          key={building.name}
          className={`building ${building.type.name}`}
          style={{
            left: `${building.coord[0]*32}px`,
            top: `${building.coord[1]*32}px`

          }}/>;
        return buildingView;
      })
    }
  </div>
);

export default BuildingView;