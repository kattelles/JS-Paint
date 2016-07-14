function Painting (canvas, context) {
  this.canvas = canvas;
  this.context = context;
  this.start();
}

Painting.prototype.start = function () {
  let context = this.context;
  let canvas = this.canvas;

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
  let bucketColor = "white";
  let dataURL;
  let text = false;
  let inputText = "";

  // sizes
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

  // fill bucket
  $('#bucket').click(function(e) {
    bucketColor = curColor;
    context.fillStyle = bucketColor;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    clickX =[];
    clickY =[];
    clickColor = [];
    clickSize = [];
    clickShape = [];
  });

  // clear

  $('#clear').click(function(e) {
    location.reload();
  });

  // pencil
  $("#pencil").click(function(e) {
    curColor = "black";
    curSize = 1;
  });

  // text
  $("#text").click(function(e) {
      text = true;
      inputText = $("#input").val();
  });

  // drawing
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

  function redraw(){
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

    dataURL = canvas.toDataURL();
    $("#canvas-img").attr("href", dataURL);
  }

  // colors


    $('#red').click(function(e) {
        curColor = "red";
        $("#current").css('background-color', 'red');
    });

    $('#blue').click(function(e) {
        curColor = "blue";
        $("#current").css('background-color', 'blue');
    });

    $('#teal').click(function(e) {
        curColor = "#33FFE6";
        $("#current").css('background-color', "#33FFE6");
    });

    $('#lime').click(function(e) {
        curColor = "#7AFF33";
        $("#current").css('background-color', "#7AFF33");
    });

    $('#grey').click(function(e) {
        curColor = "#808080";
        $("#current").css('background-color', "#808080");
    });

    $('#lavender').click(function(e) {
        curColor = "#9370DB";
        $("#current").css('background-color', "#9370DB");
    });

    $('#orange-red').click(function(e) {
        curColor = "#FF7F50";
        $("#current").css('background-color', "#FF7F50");
    });

    $('#beige').click(function(e) {
        curColor = "#FFE4B5";
        $("#current").css('background-color', "#FFE4B5");
    });

    $('#sky').click(function(e) {
        curColor = "#87CEEB";
        $("#current").css('background-color', "#87CEEB");
    });

    $('#pink').click(function(e) {
        curColor = "pink";
        $("#current").css('background-color', "pink");
    });

    $('#green').click(function(e) {
        curColor = "green";
        $("#current").css('background-color', "green");
    });

    $('#yellow').click(function(e) {
        curColor = "yellow";
        $("#current").css('background-color', "yellow");
    });

    $('#brown').click(function(e) {
      curColor = "#654321";
      $("#current").css('background-color', "#654321");
    });

    $('#orange').click(function(e) {
        curColor = 	"#FFA500";
        $("#current").css('background-color', "#FFA500");
    });

    $('#hot-pink').click(function(e) {
        curColor = "#ff1493";
        $("#current").css('background-color', "#ff1493");
    });

    $('#pink').click(function(e) {
        curColor = "pink";
        $("#current").css('background-color', "pink");
    });

    $('#purple').click(function(e) {
        curColor = "purple";
        $("#current").css('background-color', "purple");
    });

    $('#black').click(function(e) {
        curColor = "black";
        $("#current").css('background-color', "black");
    });

    $('#eraser').click(function(e) {
        curColor = "white";
        $("#current").css('background-color', "white");
    });

};

module.exports = Painting;
