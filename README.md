#JS Paint

[JS Paint live][paint]

[paint]: https://kattelles.github.io/JS-Paint/

JS Paint is a modern paint studio, inspired by the classic MS Paint. It was created with
Javascript, jQuery, HTML5 Canvas and CSS.

![image of splash](https://github.com/kattelles/JS-Paint/blob/master/css/assets/readme-splash.png)

This is an example of some beautiful artwork created solely on JS Paint:

![image of josh](https://github.com/kattelles/JS-Paint/blob/master/css/assets/josh.png)

## Implementation

JS Paint uses jQuery to render a canvas element on the page when the DOM loads.

```Javascript
const Painting = require("./painting");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  new Painting(canvas, context);
});
```

When the mouse drags over the page, JS Paint used click handlers to record the exact XY coordinates of each pixel that needs to be rendered. I then iterate over that array and "paint" the dragged line on the canvas.

```Javascript
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
```

## Features

Users (artists) have a variety of tools at their disposal: various sized brushes, a pencil, and eraser and a wide range of colors.

![image of tools](https://github.com/kattelles/JS-Paint/blob/master/css/assets/tools.png)

Users can also use the text input feature to add text to their canvas.

![image of text](https://github.com/kattelles/JS-Paint/blob/master/css/assets/text.png)


## Future Plans

My future plans for this project include: a spray paint feature and image upload feature.
