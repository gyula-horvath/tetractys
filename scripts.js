var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var x = cw/2;
var y = ch/2;

var a = 50;

var height = function (a) {
  return (Math.sqrt(3)/2)*a;
}

for (var triangleCounter = 1; triangleCounter<=3; triangleCounter++) {
  for (var i = 0; i < triangleCounter; i++){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + a, y);
    context.lineTo(x + a/2, y - height(a));
    context.closePath();
    context.stroke();
    if (triangleCounter === 1) {
      context.fillStyle = 'red';
    } else if (triangleCounter === 2) {
      context.fillStyle = 'green';
    } else {
      context.fillStyle = 'blue';
    }
    context.fill();
    x += a;
  }
  x -= i*a+a/2;
  y += height(a);
}
