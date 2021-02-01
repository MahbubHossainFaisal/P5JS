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
      if(obs[i].collide(bird)){
        console.log("Collision")
      }
     
  }
  bird.update();
  bird.show();

  if(frameCount % 80 == 0){
    obs.push(new Obstacle());
    
  }
  if(obs.length>5){
    obs.shift();
  }
  console.log(obs.length)
  
  noLoop()
}


function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}

