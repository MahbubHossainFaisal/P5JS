class Design {

    constructor() {
       this.x = 0;
       this.y = 20;
       this.varx = 30;
       this.very = 0;
    }

    show(cnt) {
        
        
       for(let i = 0; i<cnt; i++){
           line(this.x, this.x, this.y, this.x);
           strokeWeight(10);

           line(this.x, this.x, this.x, this.varx);

           strokeWeight(10);

           line(this.x, this.varx, this.y, this.varx);

           strokeWeight(10);
           this.varx+=30
           if(this.varx>=400){
               this.varx=30
           }
       }
       
    }
    update(){
        
    }
}