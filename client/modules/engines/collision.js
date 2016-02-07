import {GameScreen} from '/client/modules/enums/maps';
import cotw from '/client/modules/enums/enums';

let _store;
const onKeyPress = (e, store) => {
  _store = store;
  var state = store.getState();
  if (state.game.screen === GameScreen.Map) {
    var dir = calculateDirection(e);

    if (followLink(state.game.map[state.game.area], state.player.coords, dir))
      return;

    movePlayer(state.game.map[state.game.area], state.player.coords, dir);
  }
};

const followLink = (area, curCoords, dir) => {
  let newCell = area[curCoords.x+dir.x][curCoords.y+dir.y];
  if (!newCell.entry)
    return false;

  if (newCell.building.screen)
    _store.dispatch({type: 'SCREEN_CHANGE', screen:newCell.building.screen});
  else if (newCell.building.link)
    _store.dispatch({
      type: 'AREA_CHANGE',
      area:newCell.building.link.area,
      coords: {
        x:newCell.building.link.coords[0] + newCell.building.link.type.entryPoint.x,
        y:newCell.building.link.coords[1] + newCell.building.link.type.entryPoint.y
      }
    });

  return true;
};

const movePlayer = (area, curCoords, dir) => {
  var cell = area[curCoords.x+dir.x][curCoords.y+dir.y];
  if (!(cell.tile.solid || cell.building))
    _store.dispatch({type: 'PLAYER_MOVE', dir});
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