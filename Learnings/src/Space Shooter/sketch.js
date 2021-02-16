let plane
let obs = [];
let shoot = [];
function setup(){

    createCanvas(windowWidth,windowHeight)
    
    plane = new Plane();
    for(let i=0;i<5;i++) {
        obs.push(new Obstacle())
    }
    //frameRate(1)
}

function draw(){
    background(0)

    

    for(let i=0; i<shoot.length;i++){
        shoot[i].update()
        shoot[i].show()
        for(j=obs.length-1;j>=0;j--){
            if(shoot[i].shot(obs[j]))
            {
                console.log('shot')
                let index = obs.indexOf(obs[j])
                obs.splice(index,1)
            }
        }
    }

     for(let i=0;i<obs.length;i++) {
        obs[i].show();
        obs[i].move();
        obs[i].boundaries();
    }
   

    
    plane.turn()
    plane.update()
    plane.boundaries()
    plane.show()

    
}

function keyReleased(){
    plane.setRotation(0);
  }

function keyPressed(){
    if(keyCode == RIGHT_ARROW){
        plane.setRotation(0.1)
    } else if(keyCode == LEFT_ARROW){
        plane.setRotation(-0.1)
    } else if(keyCode == UP_ARROW){
        plane.applyForce();
        
    } else if(key == ' '){
        shoot.push(new Bullets(plane))
    }
}