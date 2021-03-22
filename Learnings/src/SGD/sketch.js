

let arr = []
let m = 1 //slope
let b = 0 //bias
//y = mx + b
function setup() {

    let cnv = createCanvas(600, 600)
    cnv.parent('sketch-holder')
}

function draw() {

    background(240)
    axis()

    for (let i = 0; i < arr.length; i++) {
        let x = map(arr[i].x, 0, 1, 0, width)
        let y = map(arr[i].y, 0, 1, height, 0)
        fill(arr[i].r, arr[i].g, arr[i].b)
        ellipse(x, y, 10, 10)
    }

    predictedLine()


}

function predictedLine() {
    let x1 = 0
    let y1 = m * x1 + b
    let x2 = 1
    let y2 = m * x2 + b

    x1 = map(x1,0,1,0,width)
    y1= map(y1,0,1,height,0)
    x2 = map(x2,0,1,0,width)
    y2=map(y2,0,1,height,0)
    stroke(255,0,0)
    strokeWeight(3)
    line(x1, y1, x2, y2)
}

function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)
    let p = new Point(x, y)
    console.log(p)
    arr.push(p)
}
function axis() {
    let x1 = 0
    let x2 = 0
    let y1 = 1
    let y2 = 0

    stroke(0)
    strokeWeight(5)
    line(x1, y1, x2, y2)

    for (let i = 0; i <= 1; i = i + 0.1) {
        xm = map(i, 0, 1, 0, width)
        ym = map(0, 0, 1, height, 0)
        stroke(100)
        strokeWeight(1)
        text(i.toFixed(1), xm + 3, ym)
        stroke(200)
        strokeWeight(1)
        line(xm, ym, xm, ym - height)

    }

    x1 = 0
    x2 = 0
    y1 = 0
    y2 = 1

    stroke(0)
    strokeWeight(5)
    line(x1, y1, x2, y2)

    for (let i = 0; i <= 1; i = i + 0.1) {
        xm = map(0, 0, 1, 0, width)
        ym = map(i, 0, 1, height, 0)
        stroke(100)
        strokeWeight(1)
        text(i.toFixed(1), xm, ym - 3)
        stroke(200)
        strokeWeight(2)
        line(xm, ym, xm + width, ym)
    }

}