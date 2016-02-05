import {maps} from '/modules/enums/maps';
import {GameArea} from '/modules/enums/enums';

const onKeyPress = (e, store) => {
  // if on world map

  var coords = store.getState().player.coords;
  var coordsMove = {x:0, y:0};

  switch (e.keyCode) {
    case 83:
    case 40:
      //up
      coordsMove.y+=1;
      break;
    case 87:
    case 38:
      coordsMove.y-=1;
      break;
    case 68:
    case 39:
      coordsMove.x+=1;
      break;
    case 65:
    case 37:
      coordsMove.x-=1;
      break;
    default:
      break;
  }
  var finalCoords = {
    x:coords.x+coordsMove.x,
    y:coords.y+coordsMove.y
  }
  if (maps[GameArea.Village][finalCoords.y][finalCoords.x] != '#')
    store.dispatch({type: 'PLAYER_MOVE', dir:coordsMove});
};
export default {onKeyPress};