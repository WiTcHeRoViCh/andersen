import mainModel from "./mainModel";
import gameBoard from "./gameBoard";

function mainController(){
  var print_board_btn = document.getElementById("print_board_btn");
  var easy = document.getElementById("easy");
  var middle = document.getElementById("middle");
  var hard = document.getElementById("hard");




  print_board_btn.onclick = function(event, row, col, difficulty){
    var row = row || document.getElementById("row").value;
    var col = col || document.getElementById("col").value;
    var difficulty = difficulty || "custom";

    new mainModel(row, col, difficulty);
    gameBoard();
  };

  easy.onclick = function() {
    const ROW = 10;
    const COL = 10;
    const DIFFICULTY = "easy";

    new mainModel(ROW, COL, DIFFICULTY);
    gameBoard();
  };
}

export default mainController;
