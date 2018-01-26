/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_mainController__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__ = __webpack_require__(1);





function Model (row, col, difficulty, mines){
  this.row = row || 2;
  this.col = col || 2;
  this.difficulty = difficulty || "custom";
  this.mines = mines || 2;

  this.constructor.displayMines = 2;

  this.mainController = __WEBPACK_IMPORTED_MODULE_0__controller_mainController__["a" /* default */];
  this.displayBoard = __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__["a" /* default */];

  this.easy = [10, 10, 20];
  this.middle = [20,20,60];
  this.hard = [40,40,500];

  this.allCells = [];
  this.constructor.all_empty_cell = [];
  this.constructor.all_mines_cell = [];
}


Model.prototype.createCells = function (){
  var row = this.row;
  var col = this.col;
  var mines = this.mines;

  this.constructor.displayMines = mines;

  this.constructor.all_empty_cell = [];
  this.constructor.all_mines_cell = [];

  var board_cells = Array(row*col + 1).join("0").split("");
  var board_elements = [];
  var k = 0;

  for (let i = 0; i <mines; i++){
    var j = Math.floor(Math.random() * board_cells.length);

    if (board_cells[j] == "1"){
      i--;
      j = Math.floor(Math.random() * board_cells.length);
    }
    else {
      board_cells[j] = "1";
    }
  }

  for (var i = 0; i < col; i++){
    var tr = document.createElement('tr');
    for (var j = 0; j < row; j++){
      var td = document.createElement("td");

      td.className = "square";
      td.style.backgroundColor = "#d8d8d8";

      td.dataset.rowCol = [i,j];
      td.oncontextmenu = this.setFlag;

      tr.appendChild(td);

      if (board_cells[k] == "1"){
        this.constructor.all_mines_cell.push(td);

        td.className += " mine"
      }
      else{
        this.constructor.all_empty_cell.push(td);
      }

      k++;
    }

    board_elements.push(tr);
  }

  if (board_cells[k] == "1"){
    td.className += " mine"
  }

  this.allCells = board_elements;
  return this.allCells;
}

Model.prototype.setDifficult = function(difficul, row, col, mines){
  this.difficulty = difficul || "custom";

  if (this.difficulty == "easy"){
    [this.row, this.col, this.mines] = this.easy;
  }
  else if (this.difficulty == "middle"){
    [this.row, this.col, this.mines] = this.middle;
  }
  else if (this.difficulty == "hard"){
    [this.row, this.col, this.mines] = this.hard;
  }
  else{
    this.row = row || 2;
    this.col = col || 2;
    this.mines = mines || 2;

    (this.row * this.col <= this.mines) ? this.mines = (this.row * this.col)-1 : null;
  }

  console.log("Difficul set to "+this.difficulty);
}

Model.prototype.step = function(cell){
  var nearest = this.findNearest(cell);
  var nearest_mines;
  var nearest_empty = [];

  nearest_mines = this.nearMines(nearest);

  if (this.isMine(cell) || this.isClean(cell)) return

  if (nearest_mines.length > 0){
    cell.innerHTML = nearest_mines.length;
  }

  cell.style.backgroundColor = "white";
  cell.className = "square clean";
  this.constructor.all_empty_cell.splice(this.constructor.all_empty_cell.indexOf(cell), 1);

  this.checkIfEmptyCellExist();

  for (var j = 0; j < nearest.length; j++){
    var near_cell = nearest[j];
    var was_mine = false;

    for (var i = 0; i < nearest.length; i++){
      if (this.isMine(nearest[i])) was_mine = true;

      if (!this.isMine(nearest[i]) && !this.isClean(cell)){
        nearest[i].style.backgroundColor = "white";
        nearest[i].className = "square clean";
        this.constructor.all_empty_cell.splice(this.constructor.all_empty_cell.indexOf(nearest[i]), 1);

        this.checkIfEmptyCellExist();
      }
    }

    if (!was_mine) this.step(near_cell);
  }
}

Model.prototype.findNearest = function(cell){
  var near = [];
  var [row_i, col_i] = cell.getAttribute("data-row-col").split(",");

  for (var i = -1; i < 2; i++){
    var tr = this.allCells[+row_i + i];

    if (tr){

      for (var j = -1; j < 2;j++){
        var td = tr.cells[+col_i + j];

        if (td && td != cell){
          near.push(td);
        }
      }

    }
  }

  return near;
}

Model.prototype.nearMines = function(cells){
  var result = [];

  [].forEach.call(cells, function(el){
    if (el.className.includes("mine")){
      result.push(el);
    }
  });

  return result;
}

Model.prototype.isMine = function(cell){
  if (cell.className.includes("mine")){
    return true;
  }
  return false;
}

Model.prototype.isClean = function(cell){
  return cell.className.includes("clean") ? true : false;
}

Model.prototype.checkIfEmptyCellExist = function(){
  if (this.constructor.all_empty_cell.length == 0){
    var reset = document.getElementById("reset");

    __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__["a" /* default */].endGameMessage("You won! My congratulations!");

    reset.onclick();
  }
}

Model.prototype.setFlag = function(cell){

  if (cell.target){
    cell = cell.target;
  }
  else{
    var [row_i, col_i] = cell.getAttribute("data-row-col").split(",");

    cell = this.allCells[row_i].cells[col_i];
  }

  if (!Model.prototype.isClean(cell)){

    if (cell.style.backgroundColor == "rgb(216, 216, 216)") {
      cell.style.backgroundColor = "red";

      (Model.all_mines_cell.indexOf(cell) != -1) ? Model.all_mines_cell.splice( Model.all_mines_cell.indexOf(cell),1 ) : null ;

      Model.displayMines--;
      __WEBPACK_IMPORTED_MODULE_0__controller_mainController__["a" /* default */].prototype.displayMinesCount(Model.displayMines)

      if (Model.all_mines_cell.length <= 0 && Model.displayMines >= 0){
        var reset = document.getElementById("reset");

        __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__["a" /* default */].endGameMessage("You won! My congratulations!");

        reset.onclick();
      }
    }
    else{
      cell.style.backgroundColor = "rgb(216, 216, 216)";
      Model.displayMines++;

      __WEBPACK_IMPORTED_MODULE_0__controller_mainController__["a" /* default */].prototype.displayMinesCount(Model.displayMines);
    }
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (Model);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

/* harmony default export */ __webpack_exports__["a"] = (new DisplayBoard());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_mainModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__ = __webpack_require__(1);



function MainController(){
  this.model = new __WEBPACK_IMPORTED_MODULE_0__model_mainModel__["a" /* default */]();
  this.difficulty;
  this.board = __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__["a" /* default */];
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

  __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__["a" /* default */].minesCount(mines)
}

MainController.prototype.endGame = function(message){
  this.board.displayMines();

  this.board.endGameMessage(message);
  this.reset();
}

/* harmony default export */ __webpack_exports__["a"] = (MainController);


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_displayBoard__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_mainModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_mainController__ = __webpack_require__(2);
"use script";








function Game(){
  this.mainController;
}

Game.prototype.start = function(){
  this.mainController = new __WEBPACK_IMPORTED_MODULE_3__controller_mainController__["a" /* default */]();
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


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#custom_settings_div {\n  display: inline-block; }\n\n#reset {\n  margin-left: 20px; }\n\n#settings {\n  position: absolute; }\n\n#print_board_btn {\n  margin: 0px 25px 0 10px; }\n\n.square {\n  height: 28px;\n  width: 28px;\n  border: 1px solid gray;\n  border-radius: 5px; }\n\n.table_inline {\n  display: inline-block;\n  margin-right: 15px; }\n", ""]);

// exports


/***/ })
/******/ ]);