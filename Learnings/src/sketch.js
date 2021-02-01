
var r=0;
var g=0;
var b=0;
var x=0;
var y=400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  r=map(mouseX,0,400,0,255);
  g=map(mouseY,0,400,255,0);
  b=map(mouseX,0,400,255,0);
  background(r,g,b);
  
  fill(255,0,0);
  ellipse(x++,200,40,40);
  if(x>400){
    noLoop();
  }
  ellipse(y--,200,40,40);
}