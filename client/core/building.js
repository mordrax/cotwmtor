
export const BuildingTypes = {
  Gate_NS           : {
    css      : 'Gate_NS',
    entryPoint: {x: 1, y: 0}
  },
  Hut_EF            : {
    css      : 'Hut_EF',
    entryPoint: {x: 1, y: 0}
  },
  StrawHouse_EF     : {
    css      : 'StrawHouse_EF',
    entryPoint: {x: 2, y: 1}
  },
  StrawHouse_WF     : {
    css      : 'StrawHouse_WF',
    entryPoint: {x: 0, y: 1}
  },
  BurntStrawHouse_WF: {
    css      : 'BurntStrawHouse_WF',
    entryPoint: {x: 0, y: 1}
  },
  HutTemple_NF      : {
    css      : 'HutTemple_NF',
    entryPoint: {x: 2, y: 1}
  },
  MineEntrance      : {css: 'MineEntrance', sprite:{x:32, y:0}, size:{w:32, h:32}, isTile: true},
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

export default class Building {
  constructor(name, type, area, coord, stockedItemTypes) {
    this.name = name;
    this.type = type;
    this.area = area;
    this.coord = coord;
    this.items = [];
    // once off generation of items
    _.forEach(stockedItemTypes, (stockedItemType) => {

    })
  }

  /**
   * Link two buildings such that entering one will trigger a teleport to the other building's entrance
   * @param building
   */
  linkBuilding(building) {
    this.link = building;
    building.link = this;
  }
}
