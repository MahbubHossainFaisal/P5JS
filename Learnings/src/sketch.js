
function setup() {
  createCanvas(400, 400);
   background(0);
}

function draw() {
  let x=100;
  let y=200;
 
  
  
  stroke(0,0,0);
  fill(255,255,255);
  ellipse(x,y,30,30);
  noFill();
  
  noStroke();
  
  
  
  if(mouseX>200 && mouseY<300){
    fill(0,0,255,80);
  }
  if(mouseY>200){
    fill(255,10,10);
  }
  ellipse(x+40,y+50,30,30)
 
  
  
}