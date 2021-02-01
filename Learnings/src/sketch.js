let bird ;
function setup() {
  createCanvas(1000, 800);
   bird=new Bird();
}

function draw() {
  background(125,214,247);
  bird.update();
  bird.show();
  
}


function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}