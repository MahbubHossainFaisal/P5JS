class Obstacle {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.r = random(10, 50);
        this.velocity = p5.Vector.random2D();
        this.corners = floor(random(4,20));
        this.arr = [];
        for(let i=0;i<this.corners;i++) {
            this.arr[i] = random(-this.r /2, this.r/2);
        }
    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        beginShape();
        for(let i=0; i<this.corners; i++) {
            let r = this.r + this.arr[i];
            let a = map(i, 0, this.corners, 0, TWO_PI);
            let x = r * cos(a);
            let y = r * sin(a);
            vertex(x, y);
        }
        endShape();
        pop();
    }
    move() {
        if(this.position.x<=width || this.position.y <=height ){
             this.position.add(this.velocity)
        }else {
           this.position.add(-this.velocity)
        }
  
    }
    boundaries(){
    if (this.position.x > width + this.r) {
      this.position.x = -this.r;
    } else if (this.position.x < -this.r) {
      this.position.x = width + this.r;
    }
    if (this.position.y > height + this.r) {
      this.position.y = -this.r;
    } else if (this.position.y < -this.r) {
      this.position.y = height + this.r;
    }
    }
    
}