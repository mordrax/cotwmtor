import  {Items, Tiles, ASCIITiles} from './cotwContent';
import Building, {BuildingTypes} from '/client/core/building.js';
import Point from '/client/core/cartesian.js';

export const GameArea = {
  0        : 'Village',
  Village  : 0,
  1        : 'Farm',
  Farm     : 1,
  2        : 'MinesLvl1',
  MinesLvl1: 2,
  3        : 'MinesLvl2',
  MinesLvl2: 3
};

export const GameScreen = {
  0        : 'Map',
  Map      : 0,
  1        : 'Inventory',
  Inventory: 1,
  2        : 'Temple',
  Temple   : 2,
  3        : 'Shop',
  Shop     : 3
};

const mapTiles = {};
mapTiles[GameArea.Village] = [
// 0 2 4 6 8 0 2 4 6 8 0 2 4
  '========,,###,,,========', // 0
  '========,,,.,,,,========',
  '========,,,.,,,,========', // 2
  '========,,,.,,,,========',
  '========,,,.,,,,========', // 4
  '===,,,,,;...,,,!###=====',
  '===###!;.;,.,,;.###=====', // 6
  '===###..;,,.,;.;###=====',
  '===###,,,,,...;,,,,,,===', // 8
  '===,,,,,,,,.,,,,,,,,,===',
  '====,,,,,,,.,,,,,,,,,===', // 0
  '====,,,,,,,.,,,,,,,,,===',
  '====,,,,,,,.,!###,,,,===', // 2
  '====,,,##.....###,,,,===',
  '====,,,##!,.,,###,,,,===', // 4
  '====,,,,,,,.,,,,,,,,,===',
  '====,,,,,,,.,,,,,,,,,===', // 6
  '====,,###!...!###,======',
  '====,,###..e..###,======', // 8
  '====,,###,...,###,======',
  '====,,,,,,,.,,,,,,======', // 0
  '====,,,,,,,.!,,,,,======',
  '======,,,#####,=========', // 2
  '======,,,#####,=========',
  '======,,,#####,=========', // 4
  '======,,,#####,=========',
  '======,,,#####,=========', // 6
  '========================'
];
let village = {
  VillageGate  : new Building('Village Gate', BuildingTypes.Gate_NS, GameArea.Village, new Point(10, 0)),
  JunkShop     : new Building('Junk Shop', BuildingTypes.StrawHouse_EF, GameArea.Village, new Point(3, 6)),
  PrivateHouse : new Building('Private House', BuildingTypes.StrawHouse_WF, GameArea.Village, new Point(16, 5)),
  PotionStore  : new Building('Potion Store', BuildingTypes.Hut_EF, GameArea.Village, new Point(7, 13)),
  PrivateHouse2: new Building('Private House 2', BuildingTypes.StrawHouse_WF, GameArea.Village, new Point(14, 12)),
  WeaponShop   : new Building('Weapon Shop', BuildingTypes.StrawHouse_EF, GameArea.Village, new Point(6, 17),
    [Items.Weapon]),
  GeneralStore : new Building('General Store', BuildingTypes.StrawHouse_WF, GameArea.Village, new Point(14, 17),
    [Items.Armour, Items.Bag, Items.Belt, Items.Bracer, Items.Chest, Items.Gauntlet]),
  OdinsTemple  : new Building("Odin's Temple", BuildingTypes.HutTemple_NF, GameArea.Village, new Point(9, 22))
};

mapTiles[GameArea.Farm] = [
  '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^^^M^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^^^.^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^^^.,,,^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^,,.,,,,,^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^,,,,,,,.,,,,,,^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^,,,,,,,,.,,,,,,,,,^^^^^^^^^^^^^^^',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,',
  '.................................................',
  '.................................................',
  ',,,,,,,,,,,,,,,,,,,,,,,..;,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,',
  ',,,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,=',
  ',,,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,=',
  ',,,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,=',
  ',,,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,=',
  ',,,,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,###,,=',
  ',,,,,,,,,,,,,,,,;..........................###,,=',
  ',,,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,###,,=',
  ',,,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,=',
  ',,,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
  ',,,,,,,,,,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
  '========,,,;.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
  '========,,,.;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,=======',
  '========,,,.,,,,,=======,,,,,,,,,,,,,,,,,,=======',
  '========,,###,,,,=======,,,,,,,,,,,,,,,,,,,,,,,,,'
];
let farm = {
  FarmGate    : new Building('Farm Gate', BuildingTypes.Gate_NS, GameArea.Farm, new Point(10, 32)),
  MineEntrance: new Building('Cave Entrance', BuildingTypes.MineEntrance, GameArea.Farm, new Point(24, 1)),
  AdoptedHouse: new Building('Adopted Parents House', BuildingTypes.StrawHouse_WF, GameArea.Farm, new Point(43, 23))
};

mapTiles[GameArea.MinesLvl1] = [
  '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^dooo^^ood^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^doooooddooo^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^doddoooooooo^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^dod^^oooo^ooo^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^od^^^oooo^ooo^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^o^^^^dooo^ooo^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^o^^^^^dod^dod^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^od^^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^dod^^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^dod^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^do^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^o^^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^od^^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^dod^^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^dod^^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^dod^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^do^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^dood^^^^^^o^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^ooood^^^^^o^^^^^^^^^^doood^^^',
  '^^^^^^^^^^^^oooooo^^^^o^^^^^^^^^^ooooo^^^',
  '^^^^^^^^^^^^dooooo^^^^o^^^^^^^^^^ooooo^^^',
  '^^^^^^^^^^^^^o^^^^^^^^o^^^^^^^^^dooooo^^^',
  '^^^^^^^^^^^^^o^^^^^^^^o^^^^^dooooooooo^^^',
  '^^^^^^^^^^^^^o^^^^^^^^o^^^^dod^^^doooo^^^',
  '^^^^^^^^^^^^^od^^^^^^^od^^dod^^^^^^^oo^^^',
  '^^^^^^^^^^^^^dod^^^^^^doddod^^^^^^^ood^^^',
  '^^^^^^^^^^^^^^dod^^^^^^dood^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^do^^^^^^^o^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^od^^^^^^o^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^dod^^^^^o^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^dod^^^do^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^dod^^od^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^doddo^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^dood^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^do^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^o^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^o^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^o^^^^^^^^^^^^^^^^^^',
  '^^^^^^^^^^^^^^^^^^^^^^.^^^^^^^^^^^^^^^^^^'
];
let mines = {
  MineEntrance: new Building('Entrance', BuildingTypes.MineEntrance, GameArea.MinesLvl1, new Point(22, 40))
};

village.VillageGate.linkBuilding(farm.FarmGate);
farm.MineEntrance.linkBuilding(mines.MineEntrance);

const mapBuildings = {};
mapBuildings[GameArea.Village] = village;
mapBuildings[GameArea.Farm] = farm;
mapBuildings[GameArea.MinesLvl1] = mines;

export const generateNewMap = () => {
  console.log('generateNewMap');
  let map = {};

  //generate village
  _.forEach([GameArea.Village, GameArea.Farm, GameArea.MinesLvl1], function (area) {
    map[area] = generateNewArea(area);
  });

  return map;
};

export const generateBuildings = () => {
  console.log('generateBuildings');
  let buildings = {};

  _.forEach([GameArea.Village, GameArea.Farm, GameArea.MinesLvl1], function (area) {
    _.forEach(mapBuildings[area], (building) => {

    })
  });

};

const generateNewArea = (area) => {
  console.log(`generateNewArea: ${area}`);
  let mapArea = [], y = 0, x = 0;

  // init with tile
  _.forEach(mapTiles[area], function (tileRow) {
    _.forEach(tileRow, function (asciiTile) {
      if (y === 0) mapArea[x] = [];
      let cell = {
        tile  : ASCIITiles[asciiTile],
        coords: {x, y}
      };
      mapArea[x][y] = cell;

      x++;
    });
    y++;
    x = 0;
  });

  // add buildings
  _.forEach(mapBuildings[area], function (building, key) {
    let entry = new Point(building.coord);

    if (building.type.entryPoint) {
      entry.add(building.type.entryPoint);
    }

    _.extend(mapArea[building.coord.x][building.coord.y], {
      building       : building,
      buildingTopLeft: true
    });
    _.extend(mapArea[entry.x][entry.y], {
      building: building,
      entry   : true
    })
  });

  return mapArea;
};