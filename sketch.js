var canvas;
var music;
var Blue;
var orange;
var red;
var green;
var Box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   Blue = createSprite(92,587,180,20);
   Blue.shapeColor="blue";

   orange = createSprite(295,587,180,20);
   orange.shapeColor="orange";

   red = createSprite(500,587,190,20);
   red.shapeColor="red"

   green = createSprite(708,587,180,20);
   green.shapeColor="green";

    //create box sprite and give velocity
    Box = createSprite(400,50,30,30);
    Box.shapeColor="white";
    Box.velocityY=6;
    Box.velocityX=6;

    
}

function draw() {
    background("black");
    //create edgeSprite
     createEdgeSprites();
     Box.bounceoff(edges);


    //add condition to check if box touching surface and make it box
   
    drawSprites();
}
