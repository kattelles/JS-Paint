/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Painting = __webpack_require__(1);
	
	document.addEventListener("DOMContentLoaded", function(){
	  const canvas = document.getElementById('canvas');
	  const context = canvas.getContext('2d');
	
	  new Painting(context);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Painting (context) {
	
	  let clickX = new Array();
	  let clickY = new Array();
	  let clickDrag = new Array();
	  let painting;
	
	  $('#canvas').mousedown(function(e) {
	    const mouseX = e.pageX - this.offsetLeft;
	    const mouseY = e.pageY - this.offsetTop;
	    painting = true;
	    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	    redraw();
	  });
	
	  $('#canvas').mousemove(function(e) {
	    if(painting){
	      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
	      redraw();
	    }
	  });
	
	  $('#canvas').mouseup(function(e){
	    painting = false;
	  });
	
	  $('#canvas').mouseleave(function(e){
	    painting = false;
	  });
	
	  const addClick = function(x, y, dragging) {
	    clickX.push(x);
	    clickY.push(y);
	    clickDrag.push(dragging);
	  };
	
	  function redraw(){
	    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	
	    context.strokeStyle = "black";
	    context.lineJoin = "round";
	    context.lineWidth = 5;
	
	    for(var i=0; i < clickX.length; i++) {
	      context.beginPath();
	      if(clickDrag[i] && i){
	        context.moveTo(clickX[i-1], clickY[i-1]);
	       }else{
	         context.moveTo(clickX[i]-1, clickY[i]);
	       }
	       context.lineTo(clickX[i], clickY[i]);
	       context.closePath();
	       context.stroke();
	    }
	  }
	}
	
	module.exports = Painting;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map