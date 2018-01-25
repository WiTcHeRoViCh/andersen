"use strict";

class Model{
  constructor(row, col, difficulty){
    row ? this.constructor.row = row : null;
    col ? this.constructor.col = col : null;

    difficulty ? this.constructor.difficulty = difficulty : null;
  }

  static get inf(){
    return [Model.row, Model.col];
  }
}

export default Model;
