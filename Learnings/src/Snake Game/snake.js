class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = []
    }
    
    eat(pos) {
        
        var d = dist(this.x,this.y,pos.x,pos.y)
        if(d === 0){
            this.total=this.total+1;
            return true
        } else {
            return false
        }
    }

    update() {
        if(this.total === this.tail.length){
            for(var i = 0 ; i<this.tail.length; i++){
                this.tail[i] = this.tail[i+1]
            }
        }
        this.tail[this.total-1] = createVector(this.x,this.y)

        this.x = this.x + this.xSpeed*scl
        this.y = this.y + this.ySpeed*scl

        this.x = constrain(this.x, 0, width-scl/2)
        this.y = constrain(this.y, 0, height-scl/2)
    }

    show() {
        
        fill(255)
        for(var i = 0 ; i<this.tail.length ; i++){
            rect(this.tail[i].x,this.tail[i].y,scl,scl)
        }
        rect(this.x,this.y,scl,scl)
         
    }

    direction(a,b) {
        //this.xSpeed = 0;
        this.xSpeed = a;
        //this.ySpeed = 0;
        this.ySpeed = b;
    }
}