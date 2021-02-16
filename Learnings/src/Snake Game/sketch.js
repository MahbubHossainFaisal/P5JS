var snake ;
var scl = 20;
var food;
function setup () {
    createCanvas(600, 600)
    snake = new Snake()
    frameRate(8)
    foodloaction()
}

function draw() {
     
    background(51)
    
    snake.update()
    snake.show()
    snake.boundary()
    snake.dead()
    
    if(snake.eat(food)){
        foodloaction();
    }
    fill(255,255,0)
    rect(food.x,food.y,scl,scl)
   
}

function foodloaction() {
    var col = floor(width/scl)
    var row = floor(height/scl)

    food = createVector(floor(random(col)),floor(random(row)))
    food.mult(scl)
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        snake.direction(0,-1)
    } else if(keyCode === DOWN_ARROW){
        snake.direction(0,1)
    } else if(keyIsDown(LEFT_ARROW)){
        snake.direction(-1,0)
    } else if(keyIsDown(RIGHT_ARROW)){
        snake.direction(1,0)
    }
}