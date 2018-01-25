"use strict";

function Model (row, col, difficulty, mines){
  this.row = row || 1;
  this.col = col || 1;
  this.difficulty = difficulty || "custom";
  this.mines = mines || 1;

  this.allCells = [];
}

Model.prototype.inf = function(){
  return [this.row, this.col];
}

Model.prototype.cells = function (){
  var row = this.row;
  var col = this.col;
  var mines = this.mines;

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

      td.dataset.rowCol = i + "" + j;

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

  this.allCells = board_elements;
  return this.allCells;
}

Model.prototype.setDifficult = function(difficul, row, col, mines){
  this.difficulty = difficul || "custom";
  row ? this.row = row : null;
  col ? this.col = col : null;
  mines ? this.mines = mines : null;

  console.log("Difficul set to "+this.difficulty);
}

export default Model;
