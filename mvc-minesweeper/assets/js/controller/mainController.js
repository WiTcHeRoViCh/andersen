import mainModel from "../model/mainModel";
import displayBoard from "../view/displayBoard";

function mainController(){
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

  print_board_btn.onclick = function(event, row, col, difficulty, mines){
    var row = row || document.getElementById("row").value;
    var col = col || document.getElementById("col").value;
    var difficulty = difficulty || "custom";
    var mines = mines || document.getElementById("mines_field").value;

    if (mainModel.difficulty != difficulty){
      document.querySelectorAll("table").forEach(function(table){
        table.remove();
      })
    }

    if (!( mainModel.row == row && mainModel.col == col && mainModel.mines == mines && mainModel.difficulty == difficulty)){
      new mainModel().cells([row, col, mines]);
    }

    new mainModel(row, col, difficulty, mines);

    showDifficultyMessage();

    displayBoard();
  };

  easy.onclick = function() {
    const ROW = 10;
    const COL = 10;
    const MINES = 20;
    const DIFFICULTY = "easy";

    print_board_btn.onclick(null, ROW, COL, DIFFICULTY, MINES);
  };

  middle.onclick = function() {
    const ROW = 20;
    const COL = 20;
    const MINES = 60;
    const DIFFICULTY = "middle";

    print_board_btn.onclick(null, ROW, COL, DIFFICULTY, MINES);
  };

  hard.onclick = function() {
    const ROW = 40;
    const COL = 40;
    const MINES = 600;
    const DIFFICULTY = "hard";

    print_board_btn.onclick(null, ROW, COL, DIFFICULTY, MINES);
  };

  reset.onclick = function(){
    mainModel.allCells[0].cells[0].onclick(mainModel.allCells[0].cells[0]);
  }
}


function showDifficultyMessage(){
  var difficulty_message = document.getElementById("difficulty_message");

  difficulty_message.innerHTML = "";

  difficulty_message.innerHTML = "Global difficulty: " + mainModel.difficulty;

  setTimeout(function(){
    difficulty_message.innerHTML = "";
  }, 3500)
}

export default mainController;
