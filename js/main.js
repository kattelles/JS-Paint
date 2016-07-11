const Painting = require("./painting");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  new Painting(context);
});
