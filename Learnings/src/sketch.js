var a=0;
var b=400;
var c=0;
var d=400;
var e=0;
var f=0;
var g=400;
var h=400;
var i=400;
var x=0;
var y=400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(255);
  
  fill(random(0,150),random(0,200),10);
  stroke(0,0,0);
  strokeWeight(5);
  ellipse(x++,200,40,40);
  ellipse(y--,200,40,40);
  ellipse(200,a++,40,40);
  ellipse(200,b--,40,40);
  
  ellipse(d--,e++,40,40);
  ellipse(f++,g--,40,40);
  ellipse(h--,i--,40,40);
  ellipse(c++,c++,40,40);
  if(c>400){
    noLoop();
  }
  if(h<0){
    h=400;
  }
  
  if(x>400){
    noLoop();
  }
  
  if(y>400){
    noLoop()
  }
  
  
}