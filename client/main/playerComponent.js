import React from 'react'

export const playerPositionStyle = coord => ({
  position: 'absolute',
  left    : `${coord[0] * 32}px`,
  top     : `${coord[1] * 32}px`
});

const PlayerView = ({
  player
  }) => (
  <i className={`tile ${player.gender==='male'?'maleHero':'femaleHero'}`}
     style={playerPositionStyle(player.coord || [0,0])}/>
);

export default PlayerView;