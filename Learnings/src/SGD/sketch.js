
function setup() {
    
    let cnv = createCanvas(600,600)
    cnv.parent('sketch-holder')
}

function draw(){
   
    background(220)
    
    let x1 = 0
    let x2 = 0
    let y1 = 1
    let y2 = 0

    stroke(0)
    strokeWeight(5)
    line(x1,y1,x2,y2)

    for(let i = 0 ; i <= 1 ; i=i+0.1){
        xm = map(i,0,1,0,width)
        ym = map(0,0,1,height,0)
        line(xm,ym,xm,ym)

    }

}