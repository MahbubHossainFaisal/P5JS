var Num_of_nodes_in_input_layer=3;
var Num_of_nodes_in_output_layer=5;

var Num_of_hidden_layers=[4,7,6];

var input_layer_x=50;
var input_layer_y=0;
var line_input_x=50;
var line_input_y=80;

var output_layer_x=1200-50;
var output_layer_y=0;
var line_output_x=1150;
var line_output_y=0;

var hidden_layer_x=200;
var hidden_layer_y=0;
var hidden_layer_1_x=200;
var hidden_layer_1_y=0;
var hidden_layer_2_x=500;
var hidden_layer_2_y=0;
var hidden_layer_3_x=800;
var hidden_layer_3_y=0;

function setup() {
    createCanvas(1200,600);
     background(255,255,0)

}

function draw(){
   
    
   input_layer();
   hidden_layer();
   output_layer();

   //Lines for input layer to hidden layer 1
   for(let i=0;i<Num_of_nodes_in_input_layer;i++){
       for(let j=0;j<Num_of_hidden_layers[0];j++){
           stroke(0);
           strokeWeight(3);
           line(line_input_x,line_input_y, hidden_layer_1_x, hidden_layer_1_y+=80)

       }
        line_input_y+=80;
        hidden_layer_1_x=200;
        hidden_layer_1_y=0;
       
   }
   hidden_layer_1_x=200;
   hidden_layer_1_y=80;
   //Lines for input layer to hidden layer 2
   for(let i=0;i<Num_of_hidden_layers[0];i++){
       for(let j=0;j<Num_of_hidden_layers[1];j++){
           stroke(0);
           strokeWeight(3);
           line(hidden_layer_1_x,hidden_layer_1_y,hidden_layer_2_x,hidden_layer_2_y+=80)
       }
       hidden_layer_1_y+=80;
       hidden_layer_2_x=500;
       hidden_layer_2_y=0;
   }
   hidden_layer_2_x=500;
   hidden_layer_2_y=80;

   for(let i=0;i<Num_of_hidden_layers[1];i++){
       for(let j=0;j<Num_of_hidden_layers[2];j++){
           stroke(0);
           strokeWeight(3);
           line(hidden_layer_2_x,hidden_layer_2_y,hidden_layer_3_x,hidden_layer_3_y+=80)
       }
       hidden_layer_2_y+=80;
       hidden_layer_3_x=800;
       hidden_layer_3_y=0;
   }
   hidden_layer_3_x=800;
       hidden_layer_3_y=80;

   //Line for hidden layer 2 to final layer;
   for(let i=0;i<Num_of_hidden_layers[2];i++){
       for(let j=0;j<Num_of_nodes_in_output_layer;j++){
           stroke(0);
           strokeWeight(3);
           line(hidden_layer_3_x,hidden_layer_3_y,line_output_x,line_output_y+=80)
       }
       hidden_layer_3_y+=80;
       line_output_y=0;

   }

   
   noLoop();
}

function input_layer(){
     for(let i=1; i<=Num_of_nodes_in_input_layer;i++){
        fill(255,0,0);
        ellipse(input_layer_x,input_layer_y+=80,25,25)
    }
}

function output_layer(){
    for(let i=1;i<=Num_of_nodes_in_output_layer;i++){
        fill(255,0,0);
        ellipse(output_layer_x,output_layer_y+=80,25,25)
    }
}

function hidden_layer(){
    for(let i=0;i<Num_of_hidden_layers.length;i++){
        for(let j=0;j<Num_of_hidden_layers[i];j++){
            fill(255,0,0);
            ellipse(hidden_layer_x,hidden_layer_y+=80,25,25);
        }
        hidden_layer_x+=300;
        hidden_layer_y=0;
    }
}