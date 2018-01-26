import mainModel from "../model/mainModel";
import DisplayBoard from "../view/displayBoard";

function MainController(){
  this.model = new mainModel();
  this.difficulty;
  this.board = DisplayBoard;
  this.minesCount = 0;
  var that = this;

  var print_board_btn = document.getElementById("print_board_btn");
  var easy = document.getElementById("easy");
  var middle = document.getElementById("middle");
  var hard = document.getElementById("hard");

  var reset = document.getElementById("reset");

  var settings = document.getElementById("settings");
  var custom_settings = document.getElementById("custom_settings");

  var board_table = document.getElementById("board_table");

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
    var row = +document.getElementById("row").value || 2;
    var col = +document.getElementById("col").value || 2;
    var mines = +document.getElementById("mines_field").value || 2;
    var difficulty = "custom";

    settings.style.display = "none";

    that.difficult(difficulty, row, col, mines);
    that.showDifficultyMessage();
    that.printBoard();
  };

  easy.onclick = function() {
    settings.style.display = "none";

    const DIFFICULTY = "easy";

    that.difficult(DIFFICULTY);
    that.showDifficultyMessage();
    that.printBoard();
  };

  middle.onclick = function() {
    settings.style.display = "none";

    const DIFFICULTY = "middle";

    that.difficult(DIFFICULTY);
    that.showDifficultyMessage();
    that.printBoard();
  };

  hard.onclick = function() {
    settings.style.display = "none";

    const DIFFICULTY = "hard";

    that.difficult(DIFFICULTY);
    that.showDifficultyMessage();
    that.printBoard();
  };

  reset.onclick = function(){
    that.reset();
  }

  board_table.onclick = function(e){
    var elem = e.target;

    if (elem.className.includes("square")){
      var [row_i, col_i] = elem.getAttribute("data-row-col").split(",");

      that.clickCell(row_i, col_i);
    }
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

  var cells = this.model.createCells();

  this.minesCount = this.model.mines;

  var row = this.model.row || 1;
  var col = this.model.col || 1;

  var table = document.getElementById("board_table");
  table.innerHTML = "";

  var tbody = document.createElement("tbody");

  tbody.id = "gameBoard";
  table.appendChild(tbody);

  cells.forEach(function(elem){
    tbody.appendChild(elem);
  })

  this.board.addTo(tbody, table);

  this.displayMinesCount(this.model.mines);
}

MainController.prototype.difficult = function(difficult, row, col, mines){
  this.model.setDifficult(difficult, row, col, mines);
}

MainController.prototype.reset = function(){
  this.printBoard();
}

MainController.prototype.clickCell = function(row_i, col_i){
  var cell = this.model.allCells[row_i].cells[col_i];

  if (this.model.isMine(cell)){
    cell.style.backgroundColor = "red";

    this.endGame("You lose! Try again!");
  }
  else{
    this.model.step(cell);
  }
}

MainController.prototype.displayMinesCount = function(mines){
  mines = mines || 0;

  DisplayBoard.minesCount(mines)
}

MainController.prototype.endGame = function(message){
  this.board.displayMines();

  this.board.endGameMessage(message);
  this.reset();
}

export default MainController;
