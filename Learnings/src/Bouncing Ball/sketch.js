var x=0;
var speedX=5;
var y=0;
var speedY=5;
var a=255;
var b=0;
var c=0;
var e=255;
var f=0;
var g=0;
function setup() {
  createCanvas(400, 400);
  
   
}

function draw() {
  background(255);
  
  if(x>=width){
    speedX=-5;
    a=255;
    b=255;
    c=0;
  }
  
  
  stroke(0,0,0);
  fill(a,b,c);
  ellipse(x,200,50,50);
  
  
  
  x+=speedX;
  
  if(x<=0){
    speedX=5;
    a=255;
    b=0;
    c=0;
  }
  stroke(0,0,0);
  fill(e,f,g);
  ellipse(200,y,50,50);
  if(y>=height){
    speedY=-5;
    e=255;
    f=0;
    g=0;
  }
  
  y+=speedY;
  
  if(y<=0){
    speedY=5;
    e=255;
    f=255;
    g=0;
  }
  
  
  
}