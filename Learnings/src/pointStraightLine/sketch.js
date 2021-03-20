function setup(){
  createCanvas(400,400);



}
var a =0;
var b = 0;
function draw(){

  background(55);
  var x= 100;
  var y =100;
  // point(x,y);
  // stroke(255);
  // strokeWeight(8);
  line(0,a,20,b)
     stroke(255);
     strokeWeight(8);
   a=a+10;
   b= b+10;
   line(0,a,20,b)
     stroke(255);
     strokeWeight(8);

   
    
   
}


function mouseClicked() {
  point(mouseX,mouseY);
  stroke(255);
  strokeWeight(8);
}