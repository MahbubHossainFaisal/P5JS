let plane
function setup(){

    createCanvas(windowWidth,windowHeight)
    
    plane = new Plane();
}

function draw(){
    background(0)
    plane.show()
    plane.turn()
}

function keyReleased(){
    plane.setRotation(0);
  }

function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        plane.setRotation(0.1)
    } else if(keyCode == LEFT_ARROW){
        plane.setRotation(-0.1)
    }
}