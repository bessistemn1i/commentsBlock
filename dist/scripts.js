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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/fabric.js":
/*!**********************************!*\
  !*** ./src/js/modules/fabric.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pig {\r\n    feedCattle() {\r\n        console.log('feed trash');\r\n    }\r\n}\r\nclass Horse {\r\n    feedCattle() {\r\n        console.log('feed grass');\r\n    }\r\n}\r\nclass Cow {\r\n    feedCattle() {\r\n        console.log('feed water');\r\n    }\r\n}\r\n\r\nclass CattleFeed {\r\n    feed() {\r\n        const currentAnimal = this.getCurrentAnimal();\r\n        return currentAnimal.feedCattle();\r\n    }\r\n}\r\n\r\nclass PigFeed extends CattleFeed {\r\n    getCurrentAnimal() {\r\n        return new Pig();\r\n    }\r\n}\r\nclass HorseFeed extends CattleFeed {\r\n    getCurrentAnimal() {\r\n        return new Horse();\r\n    }\r\n}\r\nclass CowFeed extends CattleFeed {\r\n    getCurrentAnimal() {\r\n        return new Cow();\r\n    }\r\n}\r\n\r\nclass Fabric {\r\n    constructor() {\r\n        this.addEvents();\r\n    }\r\n\r\n    addEvents() {\r\n        const pigFeed = new PigFeed;\r\n        pigFeed.feed();\r\n        const horseFeed = new HorseFeed;\r\n        horseFeed.feed();\r\n        const cowFeed = new CowFeed;\r\n        cowFeed.feed();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\n\n//# sourceURL=webpack:///./src/js/modules/fabric.js?");

/***/ }),

/***/ "./src/js/modules/simpleFabric.js":
/*!****************************************!*\
  !*** ./src/js/modules/simpleFabric.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass WoodenDoors {\r\n    constructor(height, width) {\r\n        this.height = height;\r\n        this.width = width;\r\n    }\r\n\r\n    getWidth() {\r\n        return this.height;\r\n    }\r\n\r\n    getHeight() {\r\n        return this.width;\r\n    }\r\n}\r\n\r\nconst MakeDoor = {\r\n    makeDoor: (height,width) => new WoodenDoors(height,width)\r\n}\r\n\r\nclass SimpleFabric {\r\n    constructor() {\r\n        this.addEvents();\r\n    }\r\n    addEvents() {\r\n        const p = document.createElement('p');\r\n        const door = MakeDoor.makeDoor(12,21);\r\n        p.innerText = door.getHeight();\r\n        document.body.appendChild(p);\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleFabric);\n\n//# sourceURL=webpack:///./src/js/modules/simpleFabric.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_simpleFabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/simpleFabric */ \"./src/js/modules/simpleFabric.js\");\n/* harmony import */ var _modules_fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fabric */ \"./src/js/modules/fabric.js\");\n\r\n\r\n\r\nnew _modules_simpleFabric__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nnew _modules_fabric__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });