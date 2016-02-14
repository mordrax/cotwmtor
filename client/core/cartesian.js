export default class Point {
  /**
   *
   * @param x - int or a object {x,y}
   * @param y - int or null
   */
  constructor(x, y=null) {
    if (y===null) {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
  }

  /**
   * @param dx - int or an object {x,y}
   * @param dy - int or null
   */
  add(dx, dy=null) {
    if (dy===null) {
      this.x += dx.x;
      this.y += dx.y;
    } else {
      this.x += dx;
      this.y += dy;
    }
  }
}