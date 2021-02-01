let bird ;
function setup() {
  createCanvas(800, 700);
  
   bird=new Bird();
   obs = new Obstacle();
}

function draw() {
  background(125,214,247);
  bird.update();
  bird.show();
  obs.show();
  
}


function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}