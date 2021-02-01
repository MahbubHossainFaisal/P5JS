var circle1 = {
  x:200,
  y:50,
  diameter:55
};

var circle2 = {
  x:150,
  y:200,
  diameter:55
};

function setup()
{
    createCanvas(400,300)
    
   
}

function draw()
{

  background(0,255,255)
  fill(255,121,1,180);
  ellipse(circle1.x,circle1.y,circle1.diameter);
  
  
 
  fill(255,121,1,180);
  ellipse(circle2.x,circle2.y,circle2.diameter);
  

   
}

function mousePressed(){
  
  background(0,255,255)
   
}