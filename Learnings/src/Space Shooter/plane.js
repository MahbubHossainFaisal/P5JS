class Plane {
    constructor(){
        this.position = createVector(width/2, height/2);
        this.r = 40;
    }
    show(){
        fill(255,0,0)
        translate(this.position.x, this.position.y)
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    }
}