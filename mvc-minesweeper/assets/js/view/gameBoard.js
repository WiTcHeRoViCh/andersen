"use script";

import '../../css/index.scss'

import displayBoard from "../view/displayBoard";
import mainModel from "../model/mainModel";
import MainController from "../controller/mainController";


function Game(){
  this.mainController;
}

Game.prototype.start = function(){
  this.mainController = new MainController(); //must by first
}

Game.prototype.setDifficultTo = function(difficult, row, col, mines){
  this.mainController.difficult(difficult, arg);
}

Game.prototype.printBoard = function(){
  this.mainController.printBoard();
}

var game = new Game();

game.start();

/*
game.setDifficultTo("easy");
game.setDifficultTo("custom", 3, 3, 3)
game.printBoard();
*/