
var snake ;
function setup () {
    createCanvas(600, 600)
    snake = new Snake()
}

function draw() {
    
    background(51)
    snake.update()
    snake.show()
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        snake.dir(0,-1)
    }
    if(keyCode === DOWN_ARROW){
        snake.dir(0,1)
    } 
    if(keyIsDown(LEFT_ARROW)){
        snake.dir(-1,0)
    }
    if(keyIsDown(RIGHT_ARROW)){
        snake.dir(1,0)
    }
}