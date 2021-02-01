let bird ;
var obs = []
function setup() {
  createCanvas(800, 700);
  
   bird=new Bird();
   obs.push(new Obstacle());
}

function draw() {
  background(125,214,247);

  for(let i=0;i<obs.length;i++){
      obs[i].update();
      obs[i].show();

  }
  bird.update();
  bird.show();

  if(frameCount % 80 == 0){
    obs.push(new Obstacle());
  }
  noLoop();
  
}


function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}