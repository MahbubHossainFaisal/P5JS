class Plane {
    constructor(){
        this.position = createVector(width/2, height/2);
        this.r = 30;
        this.h = 0;
        this.rotation = 0;
    }
    show(){
        fill(255,0,0)
        translate(this.position.x, this.position.y)
        rotate(this.h+PI/2);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    }
    
    setRotation(x){
        this.rotation = x;
    }

    turn(){
        this.h += this.rotation;
    }
}