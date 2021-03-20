
function setup() {
    
    //Tensor is immutable once it is declared
    // const a = tf.tensor([1,2,3,4,5,6]);
    // console.log(a)
    // console.log(a.toString())

    // const b = tf.tensor([1,2,3,4], [2,2]) // means 1,2,3,4 . convert these 4 array values into 2/2 matix first 2 is row , second 2 is col
    // console.log(b.toString());

    // const c = tf.tensor([1,2,3.4,4,5.1,6,7.8,8],[2,2,2],'int32')
    // //means this will be devided into 'two' (2/2) matrices
    // console.log(c.toString())

//     const temp = []
//     for(let i =0 ; i<20 ; i++){
//         temp[i] = random(0,100);
//     }
//     const shape = [2,5,2]
//     const t = tf.tensor3d(temp,shape,'int32')
//     // console.log(t.toString())
//    // t.data().then((s) => console.log(s)) //gives output as 1d array
//     t.print(); //gives output as 3d array
//    //console.log(t.dataSync()) // gives output as 1d array

//    //Now accessing elements
//    element = t.arraySync()
//    console.log(element[1]) //that means 2nd array list of the 3d array
//    console.log(element[1][2]) //that means the third row of the 2nd array list of the 3d array
//    console.log(element[1][2][1]) // that means the 2nd element of the third row of the 2nd array list of the 3d array
    
//    //store the whole 3d array in a new variable
//    const tv = tf.variable(t);
//    console.log(tv)

// const x = tf.tensor2d([1,2,3,4,5,6],[2,3],'int32')
// const y = tf.tensor2d([11,12,13,14,15,16],[2,3],'int32')
// //scalar calculations
// const a = x.add(y);
// const b = x.sub(y);
// const c = x.div(y);
// const d = x.mul(y);
// a.print()
// b.print()
// c.print()
// d.print()


//there can be also matrix calculation but for that col of first matrix and row of second matrix has to be same
//and this is only for tensor2d

    // const j = tf.tensor2d([1, 2, 3, 4, 5, 6], [2, 3], 'int32')
    // const k = tf.tensor2d([11, 12, 13, 14, 15, 16], [3, 2], 'int32')

    // const e = j.matMul(k)
    // e.print()

    // //the same matrix multiplication can be done like this below
    // const s = [2,3]
    // const l = tf.tensor2d([1, 2, 3, 4, 5, 6],s, 'int32')
    // l.print()
    // const m = tf.tensor2d([11, 12, 13, 14, 15, 16],s, 'int32')
    // m.print()
    // const mT =m.transpose()
    // mT.print()
    // const f = l.matMul(mT)
    // f.print()

    
}

function draw(){
   
    
  
}