
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  paper=loadImage("sprites/logo2.png")//bg=loadImage("sprites/bg.png")
  BX=loadImage("sprites/download.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  box1 = new Box(700,320,125,120);
  box2 = new Box(770,320);
  box3 = new Box(630,320,20,50);

  
    box4 = new Paper(100,320,45,45);
    ground = new Ground(600,570,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //box3.display();
  box4.display();
 // box2.display();
  ground.display();
  drawSprites();

  box1.display();
}
 function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(box4.body,box4.body.position,{ x:175,y:-180})
box4.destroy();
}



 }


