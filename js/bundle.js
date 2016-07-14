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
	  new Painting(canvas, context);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Painting (canvas, context) {
	
	  let clickX = new Array();
	  let clickY = new Array();
	  let clickDrag = new Array();
	  let painting;
	  let curColor = "black";
	  let clickColor = new Array();
	  let curSize = 5;
	  let clickSize = new Array();
	  let curShape = "round";
	  let clickShape = new Array();
	  // let bucket = false;
	  let bucketColor = "white";
	  let dataURL;
	  let text = false;
	  let inputText = "fail";
	  let spray = false;
	
	
	  $('#tiny').click(function(e) {
	    curSize = 1;
	  });
	
	  $('#normal').click(function(e) {
	    curSize = 5;
	  });
	
	  $('#large').click(function(e) {
	    curSize = 15;
	  });
	
	  $('#huge').click(function(e) {
	    curSize = 25;
	  });
	
	
	  $('#red').click(function(e) {
	      curColor = "red";
	  });
	
	  $('#blue').click(function(e) {
	      curColor = "blue";
	  });
	
	  $('#teal').click(function(e) {
	      curColor = "#33FFE6";
	  });
	
	  $('#lime').click(function(e) {
	      curColor = "#7AFF33";
	  });
	
	  $('#grey').click(function(e) {
	      curColor = "#808080";
	  });
	
	  $('#lavender').click(function(e) {
	      curColor = "#9370DB";
	  });
	
	  $('#orange-red').click(function(e) {
	      curColor = "#FF7F50";
	  });
	
	  $('#beige').click(function(e) {
	      curColor = " #FFE4B5";
	  });
	
	  $('#sky').click(function(e) {
	      curColor = "#87CEEB";
	  });
	
	  $('#pink').click(function(e) {
	      curColor = "pink";
	  });
	
	  $('#green').click(function(e) {
	      curColor = "green";
	  });
	
	  $('#yellow').click(function(e) {
	      curColor = "yellow";
	  });
	
	  $('#brown').click(function(e) {
	    curColor = "#654321";
	  });
	
	  $('#orange').click(function(e) {
	      curColor = 	"#FFA500";
	  });
	
	  $('#hot-pink').click(function(e) {
	      curColor = "#ff1493";
	  });
	
	  $('#pink').click(function(e) {
	      curColor = "pink";
	  });
	
	  $('#purple').click(function(e) {
	      curColor = "purple";
	  });
	
	  $('#black').click(function(e) {
	      curColor = "black";
	  });
	
	  $('#eraser').click(function(e) {
	      curColor = "white";
	  });
	
	  $('#bucket').click(function(e) {
	    // bucket = true;
	    bucketColor = curColor;
	    context.fillStyle = bucketColor;
	    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	
	    clickX =[];
	    clickY =[];
	    clickColor = [];
	    clickSize = [];
	    clickShape = [];
	  });
	
	  $('#clear').click(function(e) {
	    location.reload();
	  });
	
	  $("#pencil").click(function(e) {
	    curColor = "black";
	    curSize = 1;
	  });
	
	  $("#text").click(function(e) {
	      text = true;
	      inputText = $("#input").val();
	  });
	
	  $('#canvas').mousedown(function(e) {
	    const mouseX = e.pageX - this.offsetLeft;
	    const mouseY = e.pageY - this.offsetTop;
	    painting = true;
	    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	    if (text) {
	      let fontSize = $('select[name=selector]').val();
	      let font = `${fontSize}px 'Signika Negative', sans-serif`;
	      context.font = font;
	      context.fillText(inputText, mouseX, mouseY);
	    } else {
	      redraw();
	    }
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
	    clickColor.push(curColor);
	    clickSize.push(curSize);
	    clickShape.push(curShape);
	  };
	
	  $("#spray").click(function(e) {
	    spray = true;
	  });
	
	  function redraw(){
	
	    // if (bucket) {
	    //   context.fillStyle = bucketColor;
	    //   context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	    // } else {
	    //   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	    // }
	
	    // if (spray) {
	    //   for(var i = 0; i < clickX.length; i++) {
	    //     context.beginPath();
	    //     if(clickDrag[i] && i){
	    //       context.moveTo(clickX[i-1], clickY[i-1]);
	    //      } else{
	    //        context.moveTo(clickX[i]-1, clickY[i]);
	    //      }
	    //      context.lineTo(clickX[i], clickY[i]);
	    //      context.closePath();
	    //      context.strokeStyle = clickColor[i];
	    //      context.lineWidth = clickSize[i];
	    //      context.lineJoin = clickShape[i];
	    //      context.stroke();
	    // } else {
	      for(var i = 0; i < clickX.length; i++) {
	        context.beginPath();
	        if(clickDrag[i] && i){
	          context.moveTo(clickX[i-1], clickY[i-1]);
	         } else{
	           context.moveTo(clickX[i]-1, clickY[i]);
	         }
	         context.lineTo(clickX[i], clickY[i]);
	         context.closePath();
	         context.strokeStyle = clickColor[i];
	         context.lineWidth = clickSize[i];
	         context.lineJoin = clickShape[i];
	         context.stroke();
	      }
	    // }
	
	    dataURL = canvas.toDataURL();
	    $("#canvas-img").attr("href", dataURL);
	    // debugger
	  }
	
	
	
	}
	
	module.exports = Painting;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map