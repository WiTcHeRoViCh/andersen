"use strict";
import MainModel from "../model/mainModel";

function DisplayBoard (){

}

DisplayBoard.prototype.addTo = function(elem, setTo){
  document.body.insertBefore(elem, setTo);
}

export default DisplayBoard;
