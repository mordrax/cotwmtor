export class Location {
  constructor(coords, gameArea) {
    this.coords = coords;
    this.gameArea = gameArea;
  }
}
export class Building {
  constructor(name, type, location, link) {
    this.name = name;
    this.type = type;
    this.location = location;
    this.link = link;
  }
}

