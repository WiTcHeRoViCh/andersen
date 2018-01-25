"use strict";

function Model (row, col, difficulty, mines){
  row ? this.constructor.row = row : null;
  col ? this.constructor.col = col : null;

  difficulty ? this.constructor.difficulty = difficulty : null;

}

Model.prototype.inf = function(){
  return [Model.row, Model.col];
}

Model.prototype.cells = function (board_params){
  var [row, col, mines] = board_params;

  var board_cells = Array(row*col + 1).join("0").split("");
  var board_elements = [];
  var k = 0;

  row*col <= mines ? mines = row*col-1 : null;

  for (let i = 0; i < mines; i++){
    var j = Math.floor(Math.random() * board_cells.length);

    do {

      if (board_cells[j] != "1"){
        board_cells[j] = "1";
      }
      else{
        j = Math.floor(Math.random() * board_cells.length);
      }

    }while (board_cells[j] == "1")
  }

  for (var i = 0; i < col; i++){
    var tr = document.createElement('tr');
    for (var j = 0; j < row; j++){
      var td = document.createElement("td");

      td.className = "square";
      td.style.backgroundColor = "#d8d8d8";

      td.dataset.rowCol = [i, j];

      tr.appendChild(td);

      if (board_cells[k] == "1"){
        td.className += " mine"
      }
      k++;
    }

    board_elements.push(tr);
  }

  if (board_cells[k] == "1"){
    td.className += " mine"
  }

  this.constructor.allCells = board_elements;
}



export default Model;
