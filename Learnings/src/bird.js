class Bird {
    constructor(){
       this.x=200;
       this.y=400;
       this.r=15;
       this.gravity =0.3;
       this.velocity=0;
    }

    show(){
        noFill()
        fill(255,255,0)
        ellipse(this.x, this.y, this.r*2);

    }

    update(){
        this.velocity+=this.gravity;
        this.y+=this.velocity;

        //when bird goes lower than lower x axis
        if(this.y>height-this.r){
            this.y=height-this.r;
            this.velocity=0;
        }
        //when bird goes upper than upper x axis
        if(this.y < this.r){
            this.y = this.r;
            this.velocity=0;
        }
    }

    up(){
        this.velocity-=4;
    }
}