"use strict";

import MainController from "../controller/mainController";
import DisplayBoard from "../view/displayBoard";

function Model (row, col, difficulty, mines){
  this.row = row || 2;
  this.col = col || 2;
  this.difficulty = difficulty || "custom";
  this.mines = mines || 2;

  this.constructor.displayMines = 2;

  this.mainController = MainController;
  this.displayBoard = DisplayBoard;

  this.easy = [10, 10, 20];
  this.middle = [20,20,60];
  this.hard = [40,40,500];

  this.allCells = [];
  this.constructor.all_empty_cell = [];
  this.constructor.all_mines_cell = [];
}


Model.prototype.createCells = function (){
  var row = this.row;
  var col = this.col;
  var mines = this.mines;

  this.constructor.displayMines = mines;

  this.constructor.all_empty_cell = [];
  this.constructor.all_mines_cell = [];

  var board_cells = Array(row*col + 1).join("0").split("");
  var board_elements = [];
  var k = 0;

  for (let i = 0; i <mines; i++){
    var j = Math.floor(Math.random() * board_cells.length);

    if (board_cells[j] == "1"){
      i--;
      j = Math.floor(Math.random() * board_cells.length);
    }
    else {
      board_cells[j] = "1";
    }
  }

  for (var i = 0; i < col; i++){
    var tr = document.createElement('tr');
    for (var j = 0; j < row; j++){
      var td = document.createElement("td");

      td.className = "square";
      td.style.backgroundColor = "#d8d8d8";

      td.dataset.rowCol = [i,j];
      td.oncontextmenu = this.setFlag;

      tr.appendChild(td);

      if (board_cells[k] == "1"){
        this.constructor.all_mines_cell.push(td);

        td.className += " mine"
      }
      else{
        this.constructor.all_empty_cell.push(td);
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

  if (this.difficulty == "easy"){
    [this.row, this.col, this.mines] = this.easy;
  }
  else if (this.difficulty == "middle"){
    [this.row, this.col, this.mines] = this.middle;
  }
  else if (this.difficulty == "hard"){
    [this.row, this.col, this.mines] = this.hard;
  }
  else{
    this.row = row || 2;
    this.col = col || 2;
    this.mines = mines || 2;

    (this.row * this.col <= this.mines) ? this.mines = (this.row * this.col)-1 : null;
  }

  console.log("Difficul set to "+this.difficulty);
}

Model.prototype.step = function(cell){
  var nearest = this.findNearest(cell);
  var nearest_mines;
  var nearest_empty = [];

  nearest_mines = this.nearMines(nearest);

  if (this.isMine(cell) || this.isClean(cell)) return

  if (nearest_mines.length > 0){
    cell.innerHTML = nearest_mines.length;
  }

  cell.style.backgroundColor = "white";
  cell.className = "square clean";
  this.constructor.all_empty_cell.splice(this.constructor.all_empty_cell.indexOf(cell), 1);

  this.checkIfEmptyCellExist();

  for (var j = 0; j < nearest.length; j++){
    var near_cell = nearest[j];
    var was_mine = false;

    for (var i = 0; i < nearest.length; i++){
      if (this.isMine(nearest[i])) was_mine = true;

      if (!this.isMine(nearest[i]) && !this.isClean(cell)){
        nearest[i].style.backgroundColor = "white";
        nearest[i].className = "square clean";
        this.constructor.all_empty_cell.splice(this.constructor.all_empty_cell.indexOf(nearest[i]), 1);

        this.checkIfEmptyCellExist();
      }
    }

    if (!was_mine) this.step(near_cell);
  }
}

Model.prototype.findNearest = function(cell){
  var near = [];
  var [row_i, col_i] = cell.getAttribute("data-row-col").split(",");

  for (var i = -1; i < 2; i++){
    var tr = this.allCells[+row_i + i];

    if (tr){

      for (var j = -1; j < 2;j++){
        var td = tr.cells[+col_i + j];

        if (td && td != cell){
          near.push(td);
        }
      }

    }
  }

  return near;
}

Model.prototype.nearMines = function(cells){
  var result = [];

  [].forEach.call(cells, function(el){
    if (el.className.includes("mine")){
      result.push(el);
    }
  });

  return result;
}

Model.prototype.isMine = function(cell){
  if (cell.className.includes("mine")){
    return true;
  }
  return false;
}

Model.prototype.isClean = function(cell){
  return cell.className.includes("clean") ? true : false;
}

Model.prototype.checkIfEmptyCellExist = function(){
  if (this.constructor.all_empty_cell.length == 0){
    var reset = document.getElementById("reset");

    DisplayBoard.endGameMessage("You won! My congratulations!");

    reset.onclick();
  }
}

Model.prototype.setFlag = function(cell){

  if (cell.target){
    cell = cell.target;
  }
  else{
    var [row_i, col_i] = cell.getAttribute("data-row-col").split(",");

    cell = this.allCells[row_i].cells[col_i];
  }

  if (!Model.prototype.isClean(cell)){

    if (cell.style.backgroundColor == "rgb(216, 216, 216)") {
      cell.style.backgroundColor = "red";

      (Model.all_mines_cell.indexOf(cell) != -1) ? Model.all_mines_cell.splice( Model.all_mines_cell.indexOf(cell),1 ) : null ;

      Model.displayMines--;
      MainController.prototype.displayMinesCount(Model.displayMines)

      if (Model.all_mines_cell.length <= 0 && Model.displayMines >= 0){
        var reset = document.getElementById("reset");

        DisplayBoard.endGameMessage("You won! My congratulations!");

        reset.onclick();
      }
    }
    else{
      cell.style.backgroundColor = "rgb(216, 216, 216)";
      Model.displayMines++;

      MainController.prototype.displayMinesCount(Model.displayMines);
    }
  }

  return false;
}

export default Model;

