"use strict";

class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(gotClass){
    var x = gotClass.x;
    var y = gotClass.y;

    this.x += x;
    this.y += y;
    return this;
  }

}

console.log(new Point(1, 2).plus(new Point(2, 1)));
// → Point{x: 3, y: 3}
