class Obstacle {
    constructor(){
        this.y1=random(height/2);
        this.y2=random(height/2);
        this.wd=50;
        this.x=width-this.wd;
    }

    show(){
        fill(0,0,0,180);
        stroke('white');
        strokeWeight(2);
        rect(this.x,0, this.wd,this.y1);
        rect(this.x,height-this.y2,this.wd,this.y2)

    }
    update(){
        this.x-=4;
    }
}