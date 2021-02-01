var circleX=0;
var circleY=0;

function setup()
{
    createCanvas(400,300)
    
   
}

function draw()
{

  background(0,255,255)
  fill(255,121,1,180);
  ellipse(circleX,circleY,15,15);
  circleX+=1;
  circleY+=3;
  if(circleY>=300){
    circleY-=30;
  }
   
}

function mousePressed(){
  
  background(0,255,255)
   
}