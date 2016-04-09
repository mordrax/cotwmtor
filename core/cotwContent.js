export const Items = {
  Weapon     : {
    BrokenSword   : {type: 'Weapon', name: 'Broken Sword', weight: 1000, bulk: 5000, buy: NaN, sell: 25, weaponClass: 0, css: 'BrokenSword'},
    Club          : {type: 'Weapon', name: 'Club', weight: 1500, bulk: 3000, buy: 105, sell: 60, weaponClass: 1, css: 'Club'},
    Dagger        : {type: 'Weapon', name: 'Dagger', weight: 500, bulk: 500, buy: 420, sell: 240, weaponClass: 2, css: 'Sword'},
    Hammer        : {type: 'Weapon', name: 'Hammer', weight: 2000, bulk: 3000, buy: 420, sell: 240, weaponClass: 2, css: 'Hammer'},
    HandAxe       : {type: 'Weapon', name: 'Hand Axe', weight: 1000, bulk: 3000, buy: 472, sell: 270, weaponClass: 3, css: 'Axe'},
    Quarterstaff  : {type: 'Weapon', name: 'Quarterstaff', weight: 750, bulk: 5000, buy: 648, sell: 360, weaponClass: 3, css: 'Spear'},
    Spear         : {type: 'Weapon', name: 'Spear', weight: 1500, bulk: 5000, buy: 840, sell: 480, weaponClass: 4, css: 'Spear'},
    ShortSword    : {type: 'Weapon', name: 'Short Sword', weight: 1000, bulk: 5000, buy: 1470, sell: 840, weaponClass: 5, css: 'Sword'},
    Mace          : {type: 'Weapon', name: 'Mace', weight: 2500, bulk: 4375, buy: 1728, sell: 960, weaponClass: 5, css: 'Mace'},
    Flail         : {type: 'Weapon', name: 'Flail', weight: 2000, bulk: 3250, buy: 1512, sell: 840, weaponClass: 6, css: 'Flail'},
    Axe           : {type: 'Weapon', name: 'Axe', weight: 2000, bulk: 5000, buy: 1944, sell: 1080, weaponClass: 6, css: 'Axe'},
    WarHammer     : {type: 'Weapon', name: 'War Hammer', weight: 1400, bulk: 7500, buy: 2160, sell: 1200, weaponClass: 7, css: 'Hammer'},
    LongSword     : {type: 'Weapon', name: 'Long Sword', weight: 1500, bulk: 8000, buy: 3240, sell: 1800, weaponClass: 8, css: 'Sword'},
    BattleAxe     : {type: 'Weapon', name: 'Battle Axe', weight: 3000, bulk: 6000, buy: 2160, sell: 1200, weaponClass: 8, css: 'Axe'},
    BroadSword    : {type: 'Weapon', name: 'Broad Sword', weight: 1600, bulk: 9000, buy: 3240, sell: 1800, weaponClass: 9, css: 'Sword'},
    MorningStar   : {type: 'Weapon', name: 'Morning Star', weight: 3000, bulk: 9000, buy: 2160, sell: 1200, weaponClass: 10, css: 'MorningStar'},
    BastardSword  : {type: 'Weapon', name: 'Bastard Sword', weight: 3000, bulk: 10000, buy: 4320, sell: 2400, weaponClass: 11, css: 'Sword'},
    TwoHandedSword: {type: 'Weapon', name: 'Two Handed Sword', weight: 5000, bulk: 12000, buy: 6360, sell: 3600, weaponClass: 12, css: 'Sword'}
  },
  Armour     : {
    RustyArmour         : {type: 'Armour', name: 'Rusty Armour', weight: 10000, bulk: 30000, buy: NaN, sell: 25, ac: 0, css: 'BrokenArmour'},
    LeatherArmour       : {type: 'Armour', name: 'Leather Armour', weight: 5000, bulk: 2400, buy: 1080, sell: 600, ac: 6, css: 'LeatherArmour'},
    StuddedLeatherArmour: {type: 'Armour', name: 'Studded Leather Armour', weight: 7000, bulk: 25000, buy: 3150, sell: 1800, ac: 12, css: 'LeatherArmour'},
    RingMail            : {type: 'Armour', name: 'Ring Mail', weight: 8000, bulk: 30000, buy: 6300, sell: 3600, ac: 18, css: 'MetalArmour'},
    ScaleMail           : {type: 'Armour', name: 'Scale Mail', weight: 9000, bulk: 30000, buy: 10800, sell: 6000, ac: 24, css: 'MetalArmour'},
    ChainMail           : {type: 'Armour', name: 'Chain Mail', weight: 10000, bulk: 30000, buy: 16200, sell: 9000, ac: 30, css: 'MetalArmour'},
    SplintMail          : {type: 'Armour', name: 'Splint Mail', weight: 12000, bulk: 40000, buy: 27000, sell: 15000, ac: 36, css: 'MetalArmour'},
    PlateMail           : {type: 'Armour', name: 'Plate Mail', weight: 15000, bulk: 40000, buy: 42000, sell: 24000, ac: 42, css: 'MetalArmour'},
    PlateArmour         : {type: 'Armour', name: 'Plate Armour', weight: 15000, bulk: 60000, buy: 42000, sell: 24000, ac: 48, css: 'MetalArmour'},
    MeteoricSteelPlate  : {type: 'Armour', name: 'Meteoric Steel Plate', weight: 5000, bulk: 30000, buy: 105000, sell: 60000, ac: 54, css: 'MetalArmour'},
    ElvenChainMail      : {type: 'Armour', name: 'Elven Chain Mail', weight: 50000, bulk: 24000, buy: 162000, sell: 90000, ac: 52, css: 'MetalArmour'}
  },
  Shield     : {
    BrokenShield             : {type: 'Shield', name: 'Broken Shield', weight: 4000, bulk: 35000, buy: NaN, sell: 25, ac: 0, css: 'BrokenShield'},
    SmallWoodenShield        : {type: 'Shield', name: 'Small Wooden Shield', weight: 3000, bulk: 15000, buy: 525, sell: 300, ac: 3, css: 'WoodShield'},
    MediumWoodenShield       : {type: 'Shield', name: 'Medium Wooden Shield', weight: 4000, bulk: 35000, buy: 1050, sell: 600, ac: 6, css: 'WoodShield'},
    LargeWoodenShield        : {type: 'Shield', name: 'Large Wooden Shield', weight: 5000, bulk: 50000, buy: 2100, sell: 1200, ac: 9, css: 'WoodShield'},
    SmallIronShield          : {type: 'Shield', name: 'Small Iron Shield', weight: 4000, bulk: 15000, buy: 1260, sell: 720, ac: 6, css: 'MetalShield'},
    MediumIronShield         : {type: 'Shield', name: 'Medium Iron Shield', weight: 5000, bulk: 35000, buy: 2592, sell: 1440, ac: 9, css: 'MetalShield'},
    LargeIronShield          : {type: 'Shield', name: 'Large Iron Shield', weight: 6000, bulk: 50000, buy: 3150, sell: 1800, ac: 12, css: 'MetalShield'},
    SmallSteelShield         : {type: 'Shield', name: 'Small Steel Shield', weight: 4000, bulk: 15000, buy: 2730, sell: 1560, ac: 9, css: 'MetalShield'},
    MediumSteelShield        : {type: 'Shield', name: 'Medium Steel Shield', weight: 5000, bulk: 35000, buy: 3360, sell: 1920, ac: 12, css: 'MetalShield'},
    LargeSteelShield         : {type: 'Shield', name: 'Large Steel Shield', weight: 6000, bulk: 50000, buy: 4200, sell: 2400, ac: 15, css: 'MetalShield'},
    SmallMeteoricSteelShield : {type: 'Shield', name: 'Small Meteoric Steel Shield', weight: 2500, bulk: 10000, buy: 4620, sell: 2640, ac: 15, css: 'MetalShield'},
    MediumMeteoricSteelShield: {type: 'Shield', name: 'Medium Meteoric Steel Shield', weight: 3500, bulk: 25000, buy: 5940, sell: 3300, ac: 18, css: 'MetalShield'},
    LargeMeteoricSteelShield : {type: 'Shield', name: 'Large Meteoric Steel Shield', weight: 4500, bulk: 35000, buy: 7560, sell: 4200, ac: 21, css: 'MetalShield'}
  },
  Helmet     : {
    BrokenHelmet          : {type: 'Helmet', name: 'Broken Helmet', weight: 1000, bulk: 1000, buy: NaN, sell: 25, ac: 0, css: 'BrokenHelmet'},
    LeatherHelmet         : {type: 'Helmet', name: 'Leather Helmet', weight: 500, bulk: 500, buy: 525, sell: 300, ac: 3, css: 'LeatherHelmet'},
    IronHelmet            : {type: 'Helmet', name: 'Iron Helmet', weight: 2000, bulk: 2000, buy: 1050, sell: 600, ac: 6, css: 'MetalHelmet'},
    SteelHelmet           : {type: 'Helmet', name: 'Steel Helmet', weight: 2500, bulk: 2000, buy: 3150, sell: 1800, ac: 9, css: 'MetalHelmet'},
    MeteoricSteelHelmet   : {type: 'Helmet', name: 'Meteoric Steel Helmet', weight: 1000, bulk: 2000, buy: 10500, sell: 6000, ac: 15, css: 'MetalHelmet'},
    HelmetOfDetectMonsters: {type: 'Helmet', name: 'Helmet Of Detect Monsters', weight: 2500, bulk: 2000, buy: 42000, sell: 24000, ac: 9, css: 'HelmetOfDetectMonsters'},
    EnchantedHelmOfStorms : {type: 'Helmet', name: 'Enchanted Helm Of Storms', weight: 1000, bulk: 2000, buy: 1050000, sell: 600000, ac: 25, css: 'EnchantedHelmOfStorms'}
  },
  Bracers    : {
    Bracers               : {type: 'Bracers', name: 'Bracers', weight: 500, bulk: 2000, buy: 108, sell: 60, ac: 3, css: 'Bracers'},
    BracersOfDefenseNormal: {type: 'Bracers', name: 'Bracers Of Defense Normal', weight: 500, bulk: 2000, buy: 1836, sell: 1020, ac: 8, css: 'BracersEnchanted'},
    BracersOfDefenseS     : {type: 'Bracers', name: 'Bracers Of Defense Strong', weight: 500, bulk: 2000, buy: 5616, sell: 3120, ac: 13, css: 'BracersEnchanted'},
    BracersOfDefenseVS    : {type: 'Bracers', name: 'Bracers Of Defense Very Strong', weight: 500, bulk: 2000, buy: 11556, sell: 6420, ac: 18, css: 'BracersEnchanted'}
  },
  Gauntlet   : {
    Gauntlet              : {type: 'Gauntlet', name: 'Gauntlet', weight: 500, bulk: 2000, buy: 105, sell: 60, ac: 5, css: 'Gauntlet'},
    GauntletOfProtection  : {type: 'Gauntlet', name: 'Gauntlet Of Protection', weight: 500, bulk: 2000, buy: 2625, sell: 1500, ac: 10, css: 'GauntletEnchanted'},
    GauntletOfProtectionS : {type: 'Gauntlet', name: 'Gauntlet Of Protection Strong', weight: 500, bulk: 2000, buy: 6300, sell: 3600, ac: 15, css: 'GauntletEnchanted'},
    GauntletOfProtectionVS: {type: 'Gauntlet', name: 'Gauntlet Of Protection Very Strong', weight: 500, bulk: 2000, buy: 12420, sell: 6900, ac: 20, css: 'GauntletEnchanted'},
    GauntletOfSlaying     : {type: 'Gauntlet', name: 'Gauntlet Of Slaying', weight: 500, bulk: 2000, buy: 3780, sell: 2100, ac: 0, css: 'GauntletOfSlaying'},
    GauntletOfSlayingS_S  : {type: 'Gauntlet', name: 'Gauntlet Of Slaying Strong', weight: 500, bulk: 2000, buy: 7560, sell: 4200, ac: 0, css: 'GauntletOfSlaying'},
    GauntletOfSlayingVS_VS: {type: 'Gauntlet', name: 'Gauntlet Of Slaying Very Strong', weight: 500, bulk: 2000, buy: 13125, sell: 7500, ac: 0, css: 'GauntletOfSlaying'},
    GauntletOfDexterity   : {type: 'Gauntlet', name: 'Gauntlet Of Dexterity', weight: 500, bulk: 2000, buy: 3240, sell: 1800, ac: 5, css: 'GauntletEnchanted'},
    GauntletOfDexterityS  : {type: 'Gauntlet', name: 'Gauntlet Of Dexterity Strong', weight: 500, bulk: 2000, buy: 7020, sell: 3900, ac: 5, css: 'GauntletEnchanted'},
    GauntletOfDexterityVS : {type: 'Gauntlet', name: 'Gauntlet Of Dexterity Very Strong', weight: 500, bulk: 2000, buy: 12960, sell: 7200, ac: 5, css: 'GauntletEnchanted'},
    GauntletOfStrength    : {type: 'Gauntlet', name: 'Gauntlet Of Strength', weight: 500, bulk: 2000, buy: 3240, sell: 1800, ac: 5, css: 'GauntletEnchanted'},
    GauntletOfStrengthS   : {type: 'Gauntlet', name: 'Gauntlet Of Strength Strong', weight: 500, bulk: 2000, buy: 0, sell: 0, ac: 5, css: 'GauntletEnchanted'},
    GauntletOfStrengthVS  : {type: 'Gauntlet', name: 'Gauntlet Of Strength Very Strong', weight: 500, bulk: 2000, buy: 12960, sell: 7200, ac: 5, css: 'GauntletEnchanted'}
  },
  Belt       : {
    TwoSlotBelt   : {type: 'Belt', name: 'Two Slot Belt', weight: 300, bulk: 300, buy: NaN, sell: NaN, level: NaN, weightCap: 2100, bulkCap: 3100, slot: 2, css: 'SlotBelt'},
    ThreeSlotBelt : {type: 'Belt', name: 'Three Slot Belt', weight: 300, bulk: 300, buy: NaN, sell: NaN, level: NaN, weightCap: 2600, bulkCap: 3600, slot: 3, css: 'SlotBelt'},
    FourSlotBelt  : {type: 'Belt', name: 'Four Slot Belt', weight: 300, bulk: 300, buy: NaN, sell: NaN, level: NaN, weightCap: 3100, bulkCap: 4100, slot: 4, css: 'SlotBelt'},
    UtilityBelt   : {type: 'Belt', name: 'Utility Belt', weight: 1350, bulk: 1800, buy: NaN, sell: NaN, level: NaN, weightCap: 3100, bulkCap: 4100, slot: 2, slotScroll: 4, slotPotion: 4, css: 'UtilityBelt'},
    WandQuiverBelt: {type: 'Belt', name: 'Wand Quiver Belt', weight: 300, bulk: 300, buy: NaN, sell: NaN, level: NaN, weightCap: 3100, bulkCap: 4100, slot: 2, slotWand: 4, css: 'WandQuiverBelt'}
  },
  Purse      : {
    Purse: {
      type     : 'Purse',
      name     : 'Purse',
      weight   : 300,
      bulk     : 300,
      buy      : NaN,
      sell     : NaN,
      level    : NaN,
      weightCap: 100300,
      bulkCap  : 100300,
      css      : 'Purse'
    }
  },
  Pack       : {
    SmallBag                    : {type: 'Pack', name: 'Small Bag', weight: 300, bulk: 500, buy: NaN, sell: NaN, level: NaN, weightCap: 5000, bulkCap: 6000, css: 'Bag'},
    MediumBag                   : {type: 'Pack', name: 'Medium Bag', weight: 500, bulk: 700, buy: NaN, sell: NaN, level: NaN, weightCap: 10000, bulkCap: 12000, css: 'Bag'},
    LargeBag                    : {type: 'Pack', name: 'Large Bag', weight: 900, bulk: 900, buy: NaN, sell: NaN, level: NaN, weightCap: 15000, bulkCap: 18000, css: 'Bag'},
    SmallPack                   : {type: 'Pack', name: 'Small Pack', weight: 1000, bulk: 1000, buy: NaN, sell: NaN, level: NaN, weightCap: 12000, bulkCap: 50000, css: 'Pack'},
    MediumPack                  : {type: 'Pack', name: 'Medium Pack', weight: 2000, bulk: 1500, buy: NaN, sell: NaN, level: NaN, weightCap: 22000, bulkCap: 75000, css: 'Pack'},
    LargePack                   : {type: 'Pack', name: 'Large Pack', weight: 4000, bulk: 100000, buy: NaN, sell: NaN, level: NaN, weightCap: 35000, bulkCap: 100000, css: 'Pack'},
    SmallChest                  : {type: 'Pack', name: 'Small Chest', weight: 5000, bulk: 100000, buy: NaN, sell: NaN, level: NaN, weightCap: 100000, bulkCap: 50000, css: 'Chest'},
    MediumChest                 : {type: 'Pack', name: 'Medium Chest', weight: 15000, bulk: 150000, buy: NaN, sell: NaN, level: NaN, weightCap: 100000, bulkCap: 150000, css: 'Chest'},
    LargeChest                  : {type: 'Pack', name: 'Large Chest', weight: 25000, bulk: 250000, buy: NaN, sell: NaN, level: NaN, weightCap: 100000, bulkCap: 250000, css: 'Chest'},
    EnchantedSmallPackOfHolding : {type: 'Pack', name: 'Enchanted Small Pack Of Holding', weight: 5000, bulk: 75000, buy: NaN, sell: NaN, level: NaN, weightCap: 50000, bulkCap: 150000, css: 'EnchantedPack'},
    EnchantedMediumPackOfHolding: {type: 'Pack', name: 'Enchanted Medium Pack Of Holding', weight: 7500, bulk: 100000, buy: NaN, sell: NaN, level: NaN, weightCap: 75000, bulkCap: 200000, css: 'EnchantedPack'},
    EnchantedLargePackOfHolding : {type: 'Pack', name: 'Enchanted Large Pack Of Holding', weight: 10000, bulk: 125000, buy: NaN, sell: NaN, level: NaN, weightCap: 100000, bulkCap: 250000, css: 'EnchantedPack'}
  },
  Neckwear   : {
    OrdinaryAmulet: {type: 'Neckwear', name: 'Decorative Broch', weight: 300, bulk: 300, buy: 100, sell: 50, css: 'Amulet'}
  },
  Overgarment: {},
  Ring       : {},
  Boots      : {}
};

export const ItemType = {
  Weapon       : 'Weapon',
  Armour       : 'Armour',
  Shield       : 'Shield',
  Helmet       : 'Helmet',
  Bracers      : 'Bracers',
  Gauntlet     : 'Gauntlet',
  Belt         : 'Belt',
  Purse        : 'Purse',
  Bag          : 'Bag',
  Pack         : 'Pack',
  Chest        : 'Chest',
  PackOfHolding: 'PackOfHolding',
  Neckwear     : 'Neckwear',
  Overgarment  : 'Overgarment',
  Ring         : 'Ring',
  Boots        : 'Boots'
};

let allItemTypes = [
  ItemType.Weapon,
  ItemType.Armour,
  ItemType.Neckwear,
  ItemType.Overgarment,
  ItemType.Helmet,
  ItemType.Shield,
  ItemType.Bracers,
  ItemType.Gauntlet,
  ItemType.Ring,
  ItemType.Ring,
  ItemType.Belt,
  ItemType.Boots,
  ItemType.Pack,
  ItemType.Purse];
/**
 * slot name to accepted item types
 */
export const EquipmentSlotToItemType = {
  'armour'       : ItemType.Armour
  , 'neckwear'   : ItemType.Neckwear
  , 'overgarment': ItemType.Overgarment
  , 'helmet'     : ItemType.Helmet
  , 'shield'     : ItemType.Shield
  , 'bracers'    : ItemType.Bracers
  , 'gauntlets'  : ItemType.Gauntlet
  , 'weapon'     : allItemTypes
  , 'freehand'   : allItemTypes
  , 'rightring'  : ItemType.Ring
  , 'leftring'   : ItemType.Ring
  , 'belt'       : ItemType.Belt
  , 'boots'      : ItemType.Boots
  , 'pack'       : ItemType.Pack
  , 'purse'      : ItemType.Purse
};

export const Tiles = {
  Rock         : {solid: true, css: 'Rock'},
  Grass        : {solid: false, css: 'Grass'},
  DarkDgn      : {solid: false, css: 'DarkDgn'},
  Water        : {solid: false, css: 'Water'},
  Path         : {solid: false, css: 'Path'},
  LitDgn       : {solid: false, css: 'LitDgn'},
  PathRock     : {solid: true, css: 'PathRock'},
  PathGrass    : {solid: false, css: 'PathGrass'},
  WallDarkDgn  : {solid: true, css: 'WallDarkDgn'},
  WaterGrass   : {solid: false, css: 'WaterGrass'},
  WaterPath    : {solid: false, css: 'WaterPath'},
  WallLitDgn   : {solid: true, css: 'WallLitDgn'},
  Grass50Cave50: {solid: true, css: 'Grass50Cave50'},
  Grass10Cave90: {solid: true, css: 'Grass10Cave90'},
  White50Cave50: {solid: true, css: 'White50Cave50'},
  White90Cave10: {solid: true, css: 'White90Cave10'},
  Crop         : {solid: true, css: 'Crop'},
  MineEntrance : {solid: false, css: 'MineEntrance'},
  Well         : {solid: true, css: 'Well'},
  Building     : {solid: true, css: 'Building'},
  TreasurePile : {solid: false, css: 'TreasurePile'}
};

export const BuildingTypes = {
  Gate_NS           : {
    css       : 'Gate_NS',
    entryPoint: [1, 0]
  },
  Hut_EF            : {
    css       : 'Hut_EF',
    entryPoint: [1, 0]
  },
  StrawHouse_EF     : {
    css       : 'StrawHouse_EF',
    entryPoint: [2, 1]
  },
  StrawHouse_WF     : {
    css       : 'StrawHouse_WF',
    entryPoint: [0, 1]
  },
  BurntStrawHouse_WF: {
    css       : 'BurntStrawHouse_WF',
    entryPoint: [0, 1]
  },
  HutTemple_NF      : {
    css       : 'HutTemple_NF',
    entryPoint: [2, 1]
  },
  MineEntrance      : {css: 'MineEntrance', sprite: {x: 32, y: 0}, size: {w: 32, h: 32}, isTile: true},
  Fountain          : {css: 'Fountain'},
  Sign              : {css: 'Sign'},
  Well              : {css: 'Well'},
  VegePatch         : {css: 'VegePatch'},
  Wagon             : {css: 'Wagon'},
  StairsDown        : {css: 'StairsDown'},
  StairsUp          : {css: 'StairsUp'},
  DoorClosed        : {css: 'DoorClosed'},
  DoorOpen          : {css: 'DoorOpen'}
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
  'M': Tiles.MineEntrance,
  '#': Tiles.Building,
  'e': Tiles.Well,
  '[': BuildingTypes.DoorClosed,
  '/': BuildingTypes.DoorOpen,
  '!': BuildingTypes.Sign
};