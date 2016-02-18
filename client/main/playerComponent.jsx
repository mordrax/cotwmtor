import React from 'react'

const PlayerView = ({
  player
  }) => (
  <i className={`tile maleHero`}
     style={{
         position:'absolute',
         left:`${player.coord[0]*32}px`,
         top:`${player.coord[1]*32}px`
         }}/>
);

export default PlayerView;