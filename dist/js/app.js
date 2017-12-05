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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pers_enemy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pers_powerdot__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pers_player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_render__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_move__ = __webpack_require__(6);






const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'img/pac.png'
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false)
  resizeCanvas()
}

const enemy = Object(__WEBPACK_IMPORTED_MODULE_0__pers_enemy__["a" /* default */])()

let data = {
  pscore: 0,
  gscore: 0
}

const keyClick = {}
document.addEventListener('keydown', (event) => {
  keyClick[event.keyCode] = true  
  Object(__WEBPACK_IMPORTED_MODULE_4__lib_move__["a" /* default */])(keyClick, __WEBPACK_IMPORTED_MODULE_2__pers_player__["a" /* default */], canvas)
})

document.addEventListener('keyup', (event) => {
  delete keyClick[event.keyCode]  
})

const resizeCanvas = () => {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  data = Object(__WEBPACK_IMPORTED_MODULE_3__lib_render__["a" /* default */])(ctx, canvas, __WEBPACK_IMPORTED_MODULE_2__pers_player__["a" /* default */], enemy, __WEBPACK_IMPORTED_MODULE_1__pers_powerdot__["a" /* default */], data.pscore, data.gscore, image)
  requestAnimationFrame(resizeCanvas)
}

document.body.appendChild(canvas)

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((x = 110, y = 310, pacX = 0, pacY = 0, size = 32,  moving = 0, dirX = 0, dirY = 0, speed = 5) => {
  return { x, y, pacX, pacY, size, moving, dirX, dirY, speed }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  x: 110,
  y: 310,
  powerup: false,
  pcountdoun: 0,
  ghostNum: 0,
  ghosteat: false
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  x: 10,
  y: 30,
  pacX: 320,
  pacY: 0,
  size: 32,
  speed: 5
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__randomFunc__ = __webpack_require__(5);


let showEnemy = false

/* harmony default export */ __webpack_exports__["a"] = ((ctx, canvas, player, enemy, powerdot, pscore, gscore, image) => {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = '20px Verbana'

  ctx.fillStyle = 'white'
  ctx.fillText(`Человек: ${pscore} Сопливчик: ${gscore}`, 2, 20) 

  if (player.x <= enemy.x + 12 && player.y <= enemy.y + 32 && enemy.x <= player.x + 12 && enemy.y <= player.y + 32) {
    if (powerdot.ghosteat) {
      pscore++
    } else {
      gscore++
    }
    enemy.x = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.width - 64)
    enemy.y = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.height - 64)
    player.x = 10
    player.y = 30
    powerdot.pcountdown = 0
  }

  if (player.x <= powerdot.x && player.y <= powerdot.y && powerdot.x <= player.x + 20 && powerdot.y <= player.y + 20) {
    powerdot.powerup = false
    powerdot.pcountdoun = 500
    powerdot.ghostNum = enemy.pacX    
    enemy.pacX = 384
    powerdot.ghosteat = true
  }

  if (powerdot.ghosteat) {
    powerdot.pcountdoun--
    if (powerdot.pcountdoun <=0) {
      powerdot.ghosteat = false
      enemy.pacX = powerdot.ghostNum
      enemy.speed = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(3)
    }
  }

  if (!powerdot.powerup) {
    powerdot.x = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.width - 62)
    powerdot.y = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.height - 62)
    powerdot.powerup = true
  }

  if (!showEnemy) {
    enemy.pacX = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(5) * 64
    enemy.speed = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(3)
    enemy.x = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.width - 62)
    enemy.y = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(canvas.height - 62)
    showEnemy = true
  } else {
    ctx.fillStyle = '#ffff00'
    ctx.beginPath()
    ctx.arc(powerdot.x, powerdot.y, 8, 0, Math.PI * 2, true)
    ctx.fill()
  }

  if (enemy.moving <= 0) {
    enemy.moving = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(30) * 3
    enemy.speed = Object(__WEBPACK_IMPORTED_MODULE_0__randomFunc__["a" /* default */])(3)
    enemy.dirX = 0
    enemy.dirY = 0

    if (powerdot.ghosteat) { enemy.speed = enemy.speed * -1 }

    if (enemy.moving % 2) {
      enemy.dirX = player.x < enemy.x ? -enemy.speed : enemy.speed
    } else {
      enemy.dirY = player.y < enemy.y ? -enemy.speed : enemy.speed
    }
  }
  enemy.moving--
  enemy.x += enemy.dirX
  enemy.y += enemy.dirY
  enemy.pacY = enemy.pacY === 0 ? enemy.pacY = 32 : enemy.pacY = 0

  ctx.drawImage(image, player.pacX, player.pacY, 32, 32, player.x, player.y, player.size, player.size)
  ctx.drawImage(image, enemy.pacX, enemy.pacY, 32, 32, enemy.x, enemy.y, enemy.size, enemy.size)
  
  return { pscore, gscore }
}); 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((n) => {
  return Math.floor(Math.random() * n)
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((keyClick, player, canvas) => {
  if (37 in keyClick) {
    player.x -= player.speed
    player.pacY = 64
  }
  if (38 in keyClick) {
    player.y -= player.speed
    player.pacY = 96
  }
  if (39 in keyClick) {
    player.x += player.speed
    player.pacY = 0
  }
  if (40 in keyClick) {
    player.y += player.speed
    player.pacY = 32
  }

  if (player.x >= canvas.width + 1) { player.x = -20 }
  if (player.x <= -30) { player.x = canvas.width }
  if (player.y <= -30) { player.y = canvas.height }
  if (player.y >= canvas.height + 1) { player.y = -20 }

  player.pacX = player.pacX === 320 ? 352 : 320
});

/***/ })
/******/ ]);