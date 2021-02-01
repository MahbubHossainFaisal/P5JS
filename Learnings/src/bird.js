class Bird {
    constructor(){
       this.x=200;
       this.y=400;

       this.gravity =0.5;
       this.velocity=0;
    }

    show(){
        ellipse(this.x, this.y, 30);

    }

    update(){
        this.velocity+=this.gravity;
        this.y+=this.velocity;

        if(this.y>height-15){
            this.y=height-15;
            this.velocity=0;
        }
    }
}