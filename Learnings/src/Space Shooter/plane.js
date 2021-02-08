class Plane {
    constructor(){
        this.position = createVector(width/2, height/2);
        this.r = 30;
        this.h = 0;
        this.rotation = 0;
        this.velocity = createVector(0,0);
    }
    show(){
        fill(255,0,0)
        translate(this.position.x, this.position.y)
        rotate(this.h + PI/2);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    }

    update(){
        this.position.add(this.velocity)
    }

    applyForce() {
        let f = p5.Vector.fromAngle(this.h)
        f.mult(0.3)
        this.velocity.add(f);

    }
    
    setRotation(x){
        this.rotation = x;
    }

    turn(){
        this.h += this.rotation;
    }

    boundaries(){
        if(this.position.x > width+this.r){
            this.position.x = -this.r;
        }else if(this.position.x < -this.r){
            this.position.x = width+this.r;
        } else if(this.position.y > height+this.r){
            this.position.y = -this.r;
        } else if(this.position.y < -this.r){
            this.position.y = height+this.r;
        }
    }
}