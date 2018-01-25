"use strict";
import mainModel from "../model/mainModel";

export default function (){
  var row = mainModel.row || 0;
  var col = mainModel.col || 0;

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  tbody.className = "gameBoard";
  table.appendChild(tbody);

  mainModel.allCells.forEach(function(elem){
    tbody.appendChild(elem);
  })

  document.body.insertBefore(table, document.body.childNodes[0]);
}
