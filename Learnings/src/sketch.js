let bird ;
function setup() {
  createCanvas(800, 700);
  
   bird=new Bird();
   obs = new Obstacle();
}

function draw() {
  background(125,214,247);

  obs.update();
  obs.show();
  
  bird.update();
  bird.show();
  
  
}


function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}