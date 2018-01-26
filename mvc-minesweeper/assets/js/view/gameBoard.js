"use script";

import '../../css/index.scss'

import displayBoard from "../view/displayBoard";
import mainModel from "../model/mainModel";
import MainController from "../controller/mainController";


function Game(){
  this.mainController;
}

Game.prototype.start = function(){
  this.mainController = new MainController();
}

Game.prototype.setDifficultTo = function(difficult, row, col, mines){

  this.mainController.difficult(difficult, row, col, mines);
}

Game.prototype.printBoard = function(){
  this.mainController.printBoard();
}

Game.prototype.reset = function(){
  this.mainController.reset();
}

Game.prototype.clickCell = function(row_i, col_i){
  this.mainController.clickCell(row_i, col_i);
};

var game = new Game();

game.start(); //must by first

/*
game.printBoard();
game.setDifficultTo("easy");
game.reset();
game.clickCell(0,0)
game.setDifficultTo("easy");
game.setDifficultTo("custom", 3, 3, 3)
game.reset();
game.clickCell(0,0);
*/
