import  {Items, Tiles, ASCIITiles, BuildingTypes} from './cotwContent';

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

let mapTiles = {};
let mapBuildings = {};
let mapLinks = {};
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
mapBuildings[GameArea.Village] = {
  VillageGate  : {
    name : 'Village Gate',
    type : BuildingTypes.Gate_NS,
    area : GameArea.Village,
    coord: [10, 0],
    link : {area: GameArea.Farm, bid: 'FarmGate'}
  },
  JunkShop     : {name: 'Junk Shop', type: BuildingTypes.StrawHouse_EF, area: GameArea.Village, coord: [3, 6]},
  PrivateHouse : {
    name : 'Private House',
    type : BuildingTypes.StrawHouse_WF,
    area : GameArea.Village,
    coord: [16, 5]
  },
  PotionStore  : {name: 'Potion Store', type: BuildingTypes.Hut_EF, area: GameArea.Village, coord: [7, 13]},
  PrivateHouse2: {
    name : 'Private House 2',
    type : BuildingTypes.StrawHouse_WF,
    area : GameArea.Village,
    coord: [14, 12]
  },
  WeaponShop   : {
    name            : 'Weapon Shop', type: BuildingTypes.StrawHouse_EF, area: GameArea.Village, coord: [6, 17],
    stockedItemTypes: [Items.Weapon]
  },
  GeneralStore : {
    name            : 'General Store',
    type            : BuildingTypes.StrawHouse_WF,
    area            : GameArea.Village,
    coord           : [14, 17],
    stockedItemTypes: [Items.Armour, Items.Bag, Items.Belt, Items.Bracer, Items.Chest, Items.Gauntlet]
  },
  OdinsTemple  : {
    name : "Odin's Temple",
    type : BuildingTypes.HutTemple_NF,
    area : GameArea.Village,
    coord: [9, 22]
  }
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
mapBuildings[GameArea.Farm] = {
  FarmGate    : {
    name : 'Farm Gate',
    type : BuildingTypes.Gate_NS,
    area : GameArea.Farm,
    coord: [10, 32],
    link : {area: GameArea.Village, bid: 'VillageGate'}
  },
  MineEntrance: {
    name : 'Mine Entrance',
    type : BuildingTypes.MineEntrance,
    area : GameArea.Farm,
    coord: [24, 1],
    link : {area: GameArea.MinesLvl1, bid: 'MineExit'}
  },
  AdoptedHouse: {
    name : 'Adopted Parents House',
    type : BuildingTypes.StrawHouse_WF,
    area : GameArea.Farm,
    coord: [43, 23]
  }
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
mapBuildings[GameArea.MinesLvl1] = {
  MineExit: {
    name : 'Mine Exit',
    type : BuildingTypes.MineEntrance,
    area : GameArea.MinesLvl1,
    coord: [22, 40],
    link : {area: GameArea.Farm, bid: 'MineEntrance'}
  }
};

/**
 * Generate all game areas and return as a object with [GameArea.Village] as key
 * @returns {{}}
 */
export const generateAreas = () => {
  console.log('generateAreas');
  let areas = {};

  //generate village
  _.forEach([GameArea.Village, GameArea.Farm, GameArea.MinesLvl1], function (area) {
    areas[area] = generateArea(area);

    _.forEach(mapBuildings[area], (building, id) => {
      let topLeft = _.extend([], building.coord);
      let entryOffset = building.type.entryPoint || [0,0];
      let entry = [topLeft[0] + entryOffset[0], topLeft[1] + entryOffset[1]];

      _.extend(areas[area][topLeft[0]][topLeft[1]], {
        buildingType   : building.type,
        buildingTopLeft: true
      });

      _.extend(areas[area][entry[0]][entry[1]], {
        buildingType: building.type,
        bid: id
      });
    });
  });

  return areas;
};

export const generateBuildings = () => {
  console.log('generateBuildings');

  let buildings = {};
  _.forEach([GameArea.Village, GameArea.Farm, GameArea.MinesLvl1], (area) => {
    _.forEach(mapBuildings[area], (blueprint, id) => {
      buildings[id] = _.extend({}, blueprint);
    });
  });

  return buildings;
};

/**
 * Given [GameArea.Village], will generate a 2D array of tiles
 * @param area
 * @returns {Array}
 */
const generateArea = (area) => {
  console.log(`GenerateArea: ${area}`);
  let map = [], y = 0, x = 0;

  // init with tile
  _.forEach(mapTiles[area], function (tileRow) {
    _.forEach(tileRow, function (asciiTile) {
      if (y === 0)
        map[x] = [];
      let cell = {
        tile  : _.extend({}, ASCIITiles[asciiTile]),
        coord: [x, y]
      };
      map[x][y] = cell;

      x++;
    });
    y++;
    x = 0;
  });

  return map;
};