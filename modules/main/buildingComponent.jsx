import ASCIITiles from '../enums/cotwContent';
import React from 'react';

const BuildingView = ({
  buildings
  }) => {
  let coords = {x: 0, y: 0};
  return (<div>
    {
      _.map(buildings, function (building) {
        let buildingView = <i
          key={building.name}
          className={`building ${building.type.name}`}
          style={{
            top: `${building.coords[1]*32}px`,
            left: `${building.coords[0]*32}px`
          }}/>;
        return buildingView;
      })
    }
  </div>)
};

export default BuildingView;