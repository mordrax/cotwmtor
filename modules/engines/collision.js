import {maps} from '/modules/enums/maps';
import cotw from '/modules/enums/enums';

const onKeyPress = (e, store) => {
  var state = store.getState();
  if (state.game.screen === cotw.gameScreen.Map) {
    var dir = calculateDirection(e);
    calculateLink(state.player.coords, dir);
    calculatePlayerMove(state.player.coords, dir);
  }
};

const calculateLink = (curCoords, dir) => {

};

const calculatePlayerMove = (curCoords, dir) => {
  if (maps[cotw.gameArea.Village][curCoords.x+dir.x][curCoords.y+dir.y] != '#')
    store.dispatch({type: 'PLAYER_MOVE', dir});
};

const calculateDirection = (e) => {
  var dir = {x:0, y:0};

  switch (e.keyCode) {
    case 83:
    case 40:
      //up
      dir.y+=1;
      break;
    case 87:
    case 38:
      dir.y-=1;
      break;
    case 68:
    case 39:
      dir.x+=1;
      break;
    case 65:
    case 37:
      dir.x-=1;
      break;
    default:
      break;
  }

  return dir;
};

export default {onKeyPress};