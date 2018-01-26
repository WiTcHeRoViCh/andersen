"use strict";

function DisplayBoard (){

}

DisplayBoard.prototype.addTo = function(elem, setTo){
  setTo.appendChild(elem);
}

DisplayBoard.prototype.minesCount = function(mines){
  var span = document.getElementById("mines_count");
  span.innerHTML = "All mines: " + mines;
}

DisplayBoard.prototype.endGameMessage = function(message){
  alert(message);
}

DisplayBoard.prototype.displayMines = function(){
  var mines = document.getElementsByClassName("mine");

  [].forEach.call(mines, function(mine_elem){
    mine_elem.innerHTML = "*";
  });
}

export default new DisplayBoard();
