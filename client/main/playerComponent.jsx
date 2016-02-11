import React from 'react'

const PlayerView = ({
  player
  }) => (
  <i className={`tile maleHero`}
     style={{
         position:'absolute',
         top:`${player.coords.y*32}px`,
         left:`${player.coords.x*32}px`}}/>
);

export default PlayerView;