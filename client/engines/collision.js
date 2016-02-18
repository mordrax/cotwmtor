import {GameScreen, GameArea} from '/client/enums/maps';
import {cotw} from '/client/enums/enums.js';
import { routeActions } from 'redux-simple-router';

let _store;
let _state;
const onKeyPress = (e, store) => {
  _store = store;
  _state = store.getState();

  if (_state.game.currentScreen === GameScreen.Map) {
    var dir = calculateDirection(e);

    if (followLink(_state.areas[_state.game.currentArea], _state.player.coord, dir))
      return;

    if (movePlayer(_state.areas[_state.game.currentArea], _state.player.coord, dir))
      return;
  }

  if (e.keyCode === 27) {
    store.dispatch({type: 'SCREEN_CHANGE', screen: GameScreen.Map});
    store.dispatch(routeActions.push('/game'));
  }
};

const followLink = (area, curcoord, dir) => {
  let destCell = area[curcoord[0] + dir[0]][curcoord[1] + dir[1]];
  if (!destCell.bid)
    return false;

  let building = _state.buildings[destCell.bid];
  if (building.items) {
    _store.dispatch({type: 'SCREEN_CHANGE', currentScreen: GameScreen.Shop, /*TODO*/buildingScreen: building.id});
    _store.dispatch(routeActions.push('/shop'));
  } else if (building.link) {
    _store.dispatch({
      type: 'AREA_CHANGE',
      area: building.link.area,
      bid: building.link.bid
    });
    let linkBuilding = _state.buildings[building.link.bid];
    let entry = linkBuilding.type.entryPoint || [0,0];
    _store.dispatch({
      type: 'PLAYER_MOVE_TELEPORT', coord: [
        linkBuilding.coord[0] + entry[0],
        linkBuilding.coord[1] + entry[1]
      ]
    })
  }
  return true;
};

const movePlayer = (area, curcoord, dir) => {
  var cell = area[curcoord[0] + dir[0]][curcoord[1] + dir[1]];
  if (!(cell.tile.solid || cell.building)) {
    _store.dispatch({type: 'PLAYER_MOVE', dir});
    return true;
  }
  return false;
};

const calculateDirection = (e) => {
  var dir = [0,0];

  switch (e.keyCode) {
    case 83:
    case 40:
      //up
      dir[1] += 1;
      break;
    case 87:
    case 38:
      dir[1] -= 1;
      break;
    case 68:
    case 39:
      dir[0] += 1;
      break;
    case 65:
    case 37:
      dir[0] -= 1;
      break;
    default:
      break;
  }

  return dir;
};

export default {onKeyPress}