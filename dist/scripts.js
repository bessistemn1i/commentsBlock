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

/***/ "./src/js/modules/addStar.js":
/*!***********************************!*\
  !*** ./src/js/modules/addStar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AddStar {\r\n    constructor() {\r\n        this.ratingContainerWidth = 66;\r\n        this.ratingContainers = document.querySelectorAll('.comment-info__rating-stars-front');\r\n        this.addEvents()\r\n    }\r\n\r\n    getRandomIntInclusive(min, max) {\r\n        const res = Math.random() * (max - min) + min;\r\n        return parseFloat(res.toFixed(1));\r\n      }\r\n\r\n    addEvents() {\r\n        const random = this.getRandomIntInclusive(1,5);\r\n        const correctWidth = (random * this.ratingContainerWidth) / 5;\r\n        console.log(correctWidth);\r\n        this.ratingContainers.forEach((ratingContainer) => {\r\n            console.log(ratingContainer);\r\n            ratingContainer.style.width = `${correctWidth}px`;\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddStar);\n\n//# sourceURL=webpack:///./src/js/modules/addStar.js?");

/***/ }),

/***/ "./src/js/modules/textExtender.js":
/*!****************************************!*\
  !*** ./src/js/modules/textExtender.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TextExtender {\r\n    constructor(obj) {\r\n        this.triggers = document.querySelectorAll(obj.triggers);\r\n        this.target = document.querySelectorAll(obj.target);\r\n        this.activeClass = obj.activeClass;\r\n        this.addEvents()\r\n    }\r\n\r\n    findParent(el, cls) {\r\n        while((el = el.parentElement) && !el.classList.contains(cls));\r\n        return el;\r\n    }\r\n\r\n    addEvents() {\r\n        this.triggers.forEach((trigger) => trigger.addEventListener('click', () => {\r\n            const currentParent = this.findParent(trigger, 'comment');\r\n            const currentTarget = currentParent.querySelector('.comment-info__text');\r\n            currentTarget.classList.add(this.activeClass);\r\n            trigger.style.display = 'none';\r\n        }))\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextExtender);\n\n//# sourceURL=webpack:///./src/js/modules/textExtender.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_textExtender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/textExtender */ \"./src/js/modules/textExtender.js\");\n/* harmony import */ var _modules_addStar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addStar */ \"./src/js/modules/addStar.js\");\n\r\n\r\n\r\nnew _modules_textExtender__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    triggers: '.comment-info__text-more',\r\n    target: '.comment-info__text',\r\n    activeClass: 'comment-info__text--extended'\r\n})\r\n\r\nnew _modules_addStar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });