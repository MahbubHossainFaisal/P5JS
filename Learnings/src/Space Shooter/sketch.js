let plane
function setup(){

    createCanvas(windowWidth,windowHeight)
    
    plane = new Plane();
}

function draw(){
    background(0)
    plane.show()
}