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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Model{
  constructor(row, col, difficulty){
    row ? this.constructor.row = row : null;
    col ? this.constructor.col = col : null;

    difficulty ? this.constructor.difficulty = difficulty : null;
  }

  static get inf(){
    return [Model.row, Model.col];
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Model);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainModel__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (){
  var row = __WEBPACK_IMPORTED_MODULE_0__mainModel__["a" /* default */].row || 0;
  var col = __WEBPACK_IMPORTED_MODULE_0__mainModel__["a" /* default */].col || 0;

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  tbody.className = "gameBoard";
  table.appendChild(tbody);

  document.body.insertBefore(table, document.body.childNodes[0])
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameBoard__ = __webpack_require__(1);



function mainController(){
  var print_board_btn = document.getElementById("print_board_btn");
  var easy = document.getElementById("easy");
  var middle = document.getElementById("middle");
  var hard = document.getElementById("hard");




  print_board_btn.onclick = function(event, row, col, difficulty){
    var row = row || document.getElementById("row").value;
    var col = col || document.getElementById("col").value;
    var difficulty = difficulty || "custom";

    new __WEBPACK_IMPORTED_MODULE_0__mainModel__["a" /* default */](row, col, difficulty);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gameBoard__["a" /* default */])();
  };

  easy.onclick = function() {
    const ROW = 10;
    const COL = 10;
    const DIFFICULTY = "easy";

    new __WEBPACK_IMPORTED_MODULE_0__mainModel__["a" /* default */](ROW, COL, DIFFICULTY);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__gameBoard__["a" /* default */])();
  };
}

/* harmony default export */ __webpack_exports__["a"] = (mainController);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameBoard__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainController__ = __webpack_require__(2);
"use script";





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mainController__["a" /* default */])(); //must by first

alert(__WEBPACK_IMPORTED_MODULE_2__mainController__["a" /* default */]);


/***/ })
/******/ ]);