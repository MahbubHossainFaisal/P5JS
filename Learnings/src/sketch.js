var x=0;
var speedX=5;
var y=0;
var speedY=5;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
  
  
  background(255);
  stroke(0,0,0);
  fill(255,0,0);
  ellipse(x,200,30,30);
  
  if(x>=width){
    speedX=-5;
  }
  
  x+=speedX;
  
  if(x<=0){
    speedX=5
  }
  stroke(0,0,0);
  fill(255,0,0);
  ellipse(200,y,30,30);
  if(y>=height){
    speedY=-5;
  }
  
  y+=speedY;
  
  if(y<=0){
    speedY=5;
  }
  
  
  
}