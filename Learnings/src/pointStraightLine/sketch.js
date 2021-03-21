var Ln;
let des;
let cnt =0;
function setup() {
  createCanvas(400, 400);
  Ln = new Line()
  des = new Design()
  frameRate(4)
}
var a = 0;
var b = 0;
function draw() {

  background(220, 220, 220)
  des.update()
  des.show(++cnt)
  Ln.show()

}


function mousePressed() {
  Ln.update(mouseX, mouseY)
}