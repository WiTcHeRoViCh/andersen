"use strict";
import mainModel from "./mainModel";

export default function (){
  var row = mainModel.row || 0;
  var col = mainModel.col || 0;

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  tbody.className = "gameBoard";
  table.appendChild(tbody);

  document.body.insertBefore(table, document.body.childNodes[0])
}
