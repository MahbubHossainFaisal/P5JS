let x_arr = [];
let y_arr = [];
let a,b,c,d;

const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

function setup() {
	createCanvas(500, 500);
	a= tf.variable(tf.scalar(random(-1,1)));
	b = tf.variable(tf.scalar(random(-1,1)));
	c = tf.variable(tf.scalar(random(-1,1)));
	d = tf.variable(tf.scalar(random(-1,1)));
}

function prediction(x) {
	// y = mx+b
	const x_t = tf.tensor1d(x);
	const y_t = x_t.pow(tf.scalar(3)).mul(a).add(x_t.square().mul(b)).add(x_t.mul(c)).add(d)//x_t.mul(m).add(b); 
	return y_t;
}

function loss(pred, label) {
	// calc the mean squared difference
	return pred.sub(label).square().mean();
}
function mousePressed() {
	let x = map(mouseX, 0, width, 0, 1);
	let y = map(mouseY, 0, height, 1, 0);
	x_arr.push(x);
	y_arr.push(y);
}

function draw() {
	background(0);

	//console.log(y_arr);
	tf.tidy(() => {
		if (y_arr.length > 1) {
			const tmp = tf.tensor1d(y_arr);
			optimizer.minimize(() => loss(prediction(x_arr), tmp));

			let curveX=[]
			for(let i = -1 ; i<=1 ; i+=0.1){
				curveX.push(i)
			}

			const tmpY = tf.tidy(() => prediction(curveX));
			let curveY = tmpY.dataSync();
			tmpY.dispose();
			stroke(255,0,0)
			strokeWeight(1)
			noFill()
			beginShape()
			for(let i=0 ; i<curveX.length; i++){
				let x = map(curveX[i],-1,1,0,width)
				let y = map(curveY[i],-1,1,height,0)
				vertex(x,y)
			}
			endShape()
		}
	});

	stroke(255);
	strokeWeight(10);
	for (let i = 0; i < x_arr.length; i++) {
		let x = map(x_arr[i], 0, 1, 0, width);
		let y = map(y_arr[i], 0, 1, height, 0);
		point(x, y);
	}
}
