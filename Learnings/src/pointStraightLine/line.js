class Line {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.arrX = [];
        this.arrY = [];
    }

    show() {
        for (let i = 0; i < this.arrY.length; i++) {
            point(this.arrX[i], this.arrY[i])
            let r = random(255); // r is a random number between 0 - 255
            let g = random(100, 200); // g is a random number betwen 100 - 200
            let b = random(100); // b is a random number between 0 - 100
            let a = random(200, 255); // a is a random number between 200 - 255
            stroke(r, g, b, a);
            strokeWeight(10);
        }
    }

    update(mX, mY) {
        this.x = mX;
        this.y = mY;
        this.arrX.push(this.x);
        this.arrY.push(this.y);
    }

}