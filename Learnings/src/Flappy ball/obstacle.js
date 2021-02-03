class Obstacle {
    constructor(){
        this.y1=random(height/2);
        this.y2=random(height/2);
        this.wd=50;
        this.x=width-this.wd;
        this.c=false;
    }

    show(){
        if(this.c=== true){
            fill(255,0,0)
        } else {
            fill(0,0,0,180);
        }
        
        stroke('white');
        strokeWeight(2);
        rect(this.x,0, this.wd,this.y1);
        rect(this.x,height-this.y2,this.wd,this.y2)

    }
    update(){
        this.x-=4;
    }

    collide(bird){
        if(bird.y < this.y1 || bird.y > height-this.y2){
            if(bird.x> this.x && bird.x < this.x + this.wd){
               this.c=true;
               return this.c;
            }
        }
    }
}