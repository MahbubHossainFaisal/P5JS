  
class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        
    }
    
    eat(pos) {
        var d = dist(this.x,this.y,pos.x,pos.y)
        if(d === 0){
            return true
        } else {
            return false
        }
    }

    update() {
        this.x = this.x + this.xSpeed*scl
        this.y = this.y + this.ySpeed*scl

        this.x = constrain(this.x, 0, width-scl/2)
        this.y = constrain(this.y, 0, height-scl/2)
    }

    show() {
        fill(255)
        rect(this.x,this.y,scl,scl)
    }

    direction(a,b) {
        //this.xSpeed = 0;
        this.xSpeed = a;
        //this.ySpeed = 0;
        this.ySpeed = b;
    }
}