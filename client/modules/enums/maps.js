import  {Items, BuildingTypes, Tiles, ASCIITiles} from './cotwContent';

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
  VillageGate  : {name: 'Village Gate', type: BuildingTypes.Gate_NS, coords: [10, 0], area: GameArea.Village},
  JunkShop     : {name: 'Junk Shop', type: BuildingTypes.StrawHouse_EF, coords: [3, 6], screen: GameScreen.Shop},
  PrivateHouse : {name: 'Private House', type: BuildingTypes.StrawHouse_WF, coords: [16, 5]},
  PotionStore  : {name: 'Potion Store', type: BuildingTypes.Hut_EF, coords: [7, 13], screen: GameScreen.Shop},
  PrivateHouse2: {name: 'Private House 2', type: BuildingTypes.StrawHouse_WF, coords: [14, 12]},
  WeaponShop   : {
    name  : 'Weapon Shop',
    type  : BuildingTypes.StrawHouse_EF,
    coords: [6, 17],
    screen: GameScreen.Shop
  },
  GeneralStore : {
    name  : 'General Store',
    type  : BuildingTypes.StrawHouse_WF,
    coords: [14, 17],
    screen: GameScreen.Shop
  },
  OdinsTemple  : {name: "Odin's Temple", type: BuildingTypes.HutTemple_NF, coords: [9, 22], screen: GameScreen.Temple}
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
  FarmGate    : {name: 'Farm Gate', type: BuildingTypes.Gate_NS, coords: [10, 32], area: GameArea.Farm},
  MineEntrance: {name: 'Cave Entrance', type: BuildingTypes.MineEntrance, coords: [24, 1], area: GameArea.Farm},
  AdoptedHouse: {name: 'Adopted Parents House', type: BuildingTypes.StrawHouse_WF, coords: [43, 23]}
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
  MineEntrance: {name: 'Entrance', type: BuildingTypes.MineEntrance, coords: [22, 40], area: GameArea.MinesLvl1}
};

const link = (a, b) => {
  a.link = b;
  b.link = a;
};

link(village.VillageGate, farm.FarmGate);
link(farm.MineEntrance, mines.MineEntrance);

const mapBuildings = {};
mapBuildings[GameArea.Village] = village;
mapBuildings[GameArea.Farm] = farm;
mapBuildings[GameArea.MinesLvl1] = mines;

export const generateNewMap = () => {
  console.log('generateNewMap');
  var map = {};

  //generate village
  _.forEach([GameArea.Village, GameArea.Farm, GameArea.MinesLvl1], function (area) {
    map[area] = generateNewArea(area);
  });

  return map;
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
    let topLeft = {x: building.coords[0], y: building.coords[1]};
    let entry = {
      x: topLeft.x,
      y: topLeft.y
    };
    if (building.type.entryPoint) {
      entry.x += building.type.entryPoint.x;
      entry.y += building.type.entryPoint.y;
    }

    _.extend(mapArea[topLeft.x][topLeft.y], {
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