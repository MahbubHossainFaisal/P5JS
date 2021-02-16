class Bullets {
    constructor(plane){
       this.position = createVector(plane.pos.x, plane.pos.y)
       this.velocity = p5.Vector.fromAngle(plane.h)
       this.velocity.mult(5)
       
    }

    show(){
        push()
        fill(255,255,0)
        circle(this.position.x,this.position.y,10)
        pop()

        
    }
    update() {
        this.position.add(this.velocity)
    }

    shot(obstacle){
        let distance = dist(this.position.x,this.position.y,obstacle.position.x,obstacle.position.y)

        if(distance <= obstacle.r){
            return true
        } else {
            return false
        }
    }
}