function setup()
{
    createCanvas(400,300)
   background(0,255,255)
}

function draw()
{
   
    line(0,0,400,300)
  
    rectMode(RADIUS);
    
  //color functions
  //   fill(255,255,0);
  //  stroke(255,100,110)
  // strokeWeight(8)
  // rect(180, 138, 80, 60);
  
  
  // fill(255,121,1,180)
  // stroke(100,200,255)
  // strokeWeight(2)
  // ellipse(260,138,40,40)
  
  fill(255,121,1,180)
  stroke(100,200,255)
  strokeWeight(2)
  ellipse(mouseX,mouseY,10,10) //make the ellipse work and draw while hovering mouse
  
    
    
}