import mainModel from "../model/mainModel";
import DisplayBoard from "../view/displayBoard";

function MainController(){
  this.model = new mainModel();
  this.difficulty;
  this.board = new DisplayBoard();
  var that = this;

  var print_board_btn = document.getElementById("print_board_btn");
  var easy = document.getElementById("easy");
  var middle = document.getElementById("middle");
  var hard = document.getElementById("hard");

  var reset = document.getElementById("reset");

  var settings = document.getElementById("settings");
  var custom_settings = document.getElementById("custom_settings");

  settings.style.display = "none";

  custom_settings.onclick = function(){
    if (settings.style.display == "none"){
      settings.style.display = "block";
    }
    else {
      settings.style.display = "none";
    }
  }

  print_board_btn.onclick = function(){
    var row = document.getElementById("row").value || 1;
    var col = document.getElementById("col").value || 1;
    var difficulty = "custom";
    var mines = document.getElementById("mines_field").value || 1;

    that.difficult(difficulty, row, col, mines);
    that.showDifficultyMessage();
    that.printBoard();
  };

  easy.onclick = function() {
    const ROW = 10;
    const COL = 10;
    const MINES = 20;
    const DIFFICULTY = "easy";

    that.difficult(DIFFICULTY, ROW, COL, MINES);
    that.showDifficultyMessage();
    that.printBoard();
  };

  middle.onclick = function() {
    const ROW = 20;
    const COL = 20;
    const MINES = 60;
    const DIFFICULTY = "middle";

    that.difficult(DIFFICULTY, ROW, COL, MINES);
    that.showDifficultyMessage();
    that.printBoard();
  };

  hard.onclick = function() {
    const ROW = 40;
    const COL = 40;
    const MINES = 600;
    const DIFFICULTY = "hard";

    that.difficult(DIFFICULTY, ROW, COL, MINES);
    that.showDifficultyMessage();
    that.printBoard();
  };

  reset.onclick = function(){

  }
}


MainController.prototype.showDifficultyMessage = function(){
  var difficulty_message = document.getElementById("difficulty_message");

  difficulty_message.innerHTML = "Global difficulty: " + this.model.difficulty;

  setTimeout(function(){
    difficulty_message.innerHTML = "";
  }, 3500)
}

MainController.prototype.printBoard = function(){
  var cells = this.model.cells();

  var row = this.model.row || 1;
  var col = this.model.col || 1;

  var table = document.getElementById("board_table");
  table.innerHTML = "";

  var tbody = document.createElement("tbody");

  tbody.className = "gameBoard";
  table.appendChild(tbody);

  cells.forEach(function(elem){
    tbody.appendChild(elem);
  })

  this.board.addTo(table, table);
}

MainController.prototype.difficult = function(difficult, row, col, mines){
  this.model.setDifficult(difficult, row, col, mines);
}

MainController.prototype.reset = function(){

}

export default MainController;
