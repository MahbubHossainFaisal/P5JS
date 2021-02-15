
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
        snake.direction(0,-1)
    } else if(keyCode === DOWN_ARROW){
        snake.direction(0,1)
    } else if(KeyCode === ENTER){
        snake.direction(-1,0)
    } else if(keyCode === BACKSPACE){
        snake.direction(1,0)
    }
}