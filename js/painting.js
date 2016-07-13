function Painting (context) {

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

  $('#clear').click(function(e) {
    location.reload();
  });

  $('#red').click(function(e) {
      curColor = "red";
  });

  $('#blue').click(function(e) {
      curColor = "blue";
  });

  $('#green').click(function(e) {
      curColor = "green";
  });

  $('#yellow').click(function(e) {
      curColor = "yellow";
  });

  $('#orange').click(function(e) {
      curColor = "orange";
  });

  $('#brown').click(function(e) {
      curColor = "#654321";
  });

  $('#hot-pink').click(function(e) {
      curColor = "#ff1493";
  });

  $('#pink').click(function(e) {
      curColor = "pink";
  });

  $('#eraser').click(function(e) {
      curColor = "white";
  });

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
    clickColor.push(curColor);
    clickSize.push(curSize);
    clickShape.push(curShape);
  };

  function redraw(){

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

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
  }
}

module.exports = Painting;
