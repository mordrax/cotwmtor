export const Items = {
  Club       : {x: 0, y: 896},
  Hammer     : {x: 0, y: 768},
  Spear      : {x: 0, y: 864},
  Sword      : {x: 0, y: 192},
  Mace       : {x: 0, y: 224},
  Flail      : {x: 0, y: 736},
  Axe        : {x: 0, y: 160},
  MorningStar: {x: 0, y: 832},

  LeatherArmour: {x: 0, y: 256},
  MetalArmour  : {x: 0, y: 288},

  WoodShield : {x: 0, y: 352},
  MetalShield: {x: 0, y: 320},

  LeatherHelmet         : {x: 0, y: 416},
  MetalHelmet           : {x: 0, y: 384},
  HelmetOfDetectMonsters: {x: 98, y: 384},

  Bracers          : {x: 0, y: 448},
  BracersEnchanted : {x: 32, y: 448},
  Gauntlet         : {x: 0, y: 480},
  GauntletEnchanted: {x: 32, y: 480},
  GauntletOfSlaying: {x: 92, y: 480},

  SlotBelt      : {x: 0, y: 672},
  WandQuiverBelt: {x: 32, y: 672},
  UtilityBelt   : {x: 64, y: 672},

  Boots            : {x: 0, y: 544},
  BootsOfSpeed     : {x: 64, y: 544},
  BootsOfLevitation: {x: 96, y: 544},

  Cloak: {x: 0, y: 512},
  Ring : {x: 0, y: 576},

  Amulet               : {x: 0, y: 128},
  AmuletCursed         : {x: 32, y: 128},
  AmuletResistFire     : {x: 64, y: 128},
  AmuletResistLightning: {x: 96, y: 128},
  AmuletResistCold     : {x: 128, y: 128},
  AmuletResistDrain    : {x: 160, y: 128},

  Wand               : {x: 0, y: 96},
  WandOfFireBall     : {x: 32, y: 96},
  WandOfLightningBall: {x: 64, y: 96},
  WandOfLight        : {x: 96, y: 96},
  WandOfDivination   : {x: 128, y: 96},
  WandOfNothing      : {x: 160, y: 96},
  WandOfColdBall     : {x: 192, y: 96},
  WandOfColdBolt     : {x: 224, y: 96},
  WandOfFireBolt     : {x: 256, y: 96},
  WandOfLightning    : {x: 288, y: 96},

  Staff      : {x: 0, y: 64},
  StaffFire  : {x: 32, y: 64},
  StaffSmoke : {x: 64, y: 64},
  StaffMinor : {x: 96, y: 64},
  StaffMedium: {x: 128, y: 64},
  StaffMajor : {x: 160, y: 64},
  StaffGreen : {x: 192, y: 64},
  StaffLight : {x: 224, y: 64},

  Scroll   : {x: 256, y: 32},
  SpellBook: {x: 32, y: 32},

  Potion             : {x: 0, y: 0},
  PotionWater        : {x: 32, y: 0},
  PotionMinorHeal    : {x: 64, y: 0},
  PotionMediumHeal   : {x: 96, y: 0},
  PotionMajorHeal    : {x: 128, y: 0},
  PotionGainAttribute: {x: 160, y: 0},
  PotionLoseAttribute: {x: 192, y: 0},
  PotionDivination   : {x: 224, y: 0},

  Purse        : {x: 0, y: 608},
  Bag          : {x: 32, y: 608},
  Pack         : {x: 96, y: 608},
  Chest        : {x: 64, y: 608},
  EnchantedPack: {x: 128, y: 608},

  CoinsCopper  : {x: 0, y: 640},
  CoinsSilver  : {x: 32, y: 640},
  CoinsGold    : {x: 64, y: 640},
  CoinsPlatinum: {x: 96, y: 640},

  TreasurePile         : {x: 128, y: 640},
  Parchment            : {x: 0, y: 704},
  EnchantedHelmOfStorms: {x: 32, y: 704},
  ElementalPortal      : {x: 64, y: 704},
  AmuletOfKings        : {x: 96, y: 704},
  Apple                : {x: 128, y: 704},

  BrokenSword   : {x: 0, y: 800},
  BrokenArmour  : {x: 32, y: 800},
  BrokenShield  : {x: 64, y: 800},
  BrokenHelmet  : {x: 96, y: 800},
  BrokenBelt    : {x: 128, y: 800},
  BrokenGauntlet: {x: 160, y: 800},
  BrokenBracer  : {x: 192, y: 800},
  BrokenCloak   : {x: 224, y: 800},
  BrokenPack    : {x: 256, y: 800},
  BrokenBoot    : {x: 288, y: 800}
};

export const BuildingTypes = {
  Gate_NS           : {
    name      : 'Gate_NS',
    sprite    : {x: 0, y: 0},
    size      : {w: 96, h: 32},
    entryPoint: {x: 1, y: 0}
  },
  Hut_EF            : {
    name      : 'Hut_EF',
    sprite    : {x: 96, y: 0},
    size      : {w: 64, h: 64},
    entryPoint: {x: 1, y: 0}
  },
  StrawHouse_EF     : {
    name      : 'StrawHouse_EF',
    sprite    : {x: 0, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 2, y: 1}
  },
  StrawHouse_WF     : {
    name      : 'StrawHouse_WF',
    sprite    : {x: 192, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 0, y: 1}
  },
  BurntStrawHouse_WF: {
    name      : 'BurntStrawHouse_WF',
    sprite    : {x: 288, y: 64},
    size      : {w: 96, h: 96},
    entryPoint: {x: 0, y: 1}
  },
  HutTemple_NF      : {
    name      : 'HutTemple_NF',
    sprite    : {x: 0, y: 288},
    size      : {w: 160, h: 160},
    entryPoint: {x: 2, y: 1}
  },
  MineEntrance      : {name: 'MineEntrance'},
  Fountain          : {name: 'Fountain'},
  Sign              : {name: 'Sign'},
  Well              : {name: 'Well'},
  VegePatch         : {name: 'VegePatch'},
  Wagon             : {name: 'Wagon'},
  StairsDown        : {name: 'StairsDown'},
  StairsUp          : {name: 'StairsUp'},
  DoorClosed        : {name: 'DoorClosed'},
  DoorOpen          : {name: 'DoorOpen'}
  //MineEntrance:       {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 0}}},
  //Fountain:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 96}}},
  //Sign:               {                            sprite:{file:ResourceFile.Tiles, offset: {x: 160, y: 0}}},
  //Well:               {                            sprite:{file:ResourceFile.Tiles, offset: {x: 160, y: 32}}},
  //VegePatch:          {                            sprite:{file:ResourceFile.Tiles, offset: {x: 128, y: 32}}},
  //Wagon:              {                            sprite:{file:ResourceFile.Tiles, offset: {x: 192, y: 32}}},
  //StairsDown:         {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 128}}},
  //StairsUp:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 128}}},
  //DoorClosed:         {                            sprite:{file:ResourceFile.Tiles, offset: {x: 64, y: 160}}},
  //DoorOpen:           {                            sprite:{file:ResourceFile.Tiles, offset: {x: 96, y: 160}}}
};

export const Tiles = {
  Rock         : {
    solid : true,
    name  : 'Rock',
    sprite: {x: 0, y: 0}
  },
  Grass        : {solid: false, name: 'Grass', sprite: {x: 0, y: 32}},
  DarkDgn      : {solid: false, name: 'DarkDgn', sprite: {x: 0, y: 64}},
  Water        : {solid: false, name: 'Water', sprite: {x: 0, y: 96}},
  Path         : {solid: false, name: 'Path', sprite: {x: 0, y: 128}},
  LitDgn       : {solid: false, name: 'LitDgn', sprite: {x: 0, y: 160}},
  PathRock     : {solid: true, name: 'PathRock', sprite: {x: 32, y: 0}},
  PathGrass    : {solid: false, name: 'PathGrass', sprite: {x: 32, y: 32}},
  WallDarkDgn  : {solid: true, name: 'WallDarkDgn', sprite: {x: 32, y: 64}},
  WaterGrass   : {solid: false, name: 'WaterGrass', sprite: {x: 32, y: 96}},
  WaterPath    : {solid: false, name: 'WaterPath', sprite: {x: 32, y: 128}},
  WallLitDgn   : {solid: true, name: 'WallLitDgn', sprite: {x: 32, y: 160}},
  Grass50Cave50: {solid: true, name: 'Grass50Cave50', sprite: {x: 0, y: 192}},
  Grass10Cave90: {solid: true, name: 'Grass10Cave90', sprite: {x: 32, y: 192}},
  White50Cave50: {solid: true, name: 'White50Cave50', sprite: {x: 0, y: 224}},
  White90Cave10: {solid: true, name: 'White90Cave10', sprite: {x: 32, y: 224}},
  Crop         : {solid: true, name: 'Crop', sprite: {x: 64, y: 32}},
  Entry        : {
    solid : false,
    name  : 'Entry',
    sprite: {x: 0, y: 32}
  },
  Well         : {solid: true, name: 'Well', sprite: {x: 160, y: 32}},
  Building     : {solid: true, name: 'Building', sprite: {x: 0, y: 32}},
  TreasurePile : {solid: false, name: 'TreasurePile', sprite: {x: 128, y: 640}}
};

export const ASCIITiles = {
  '^': Tiles.Rock,
  ',': Tiles.Grass,
  'o': Tiles.DarkDgn,
  '~': Tiles.Water,
  '.': Tiles.Path,
  'O': Tiles.LitDgn,
  '_': Tiles.PathRock,
  ';': Tiles.PathGrass,
  'd': Tiles.WallDarkDgn,
  'w': Tiles.WaterGrass,
  'W': Tiles.WaterPath,
  'D': Tiles.WallLitDgn,
  'g': Tiles.Grass50Cave50,
  'G': Tiles.Grass10Cave90,
  'c': Tiles.White50Cave50,
  'C': Tiles.White90Cave10,
  '=': Tiles.Crop,
  '+': Tiles.Entry,
  '#': Tiles.Building,
  'e': Tiles.Well,
  '[': BuildingTypes.DoorClosed,
  '/': BuildingTypes.DoorOpen,
  '!': BuildingTypes.Sign
};

export default ASCIITiles;