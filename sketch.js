
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var ground1;
var ball1


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	

	//Create the Bodies Here.
	ball1 = new Ball(200,200,2)
	dustbin1 = new Dustbin(780,550,20,100);
	dustbin2 = new Dustbin(865,580,150,20);
	dustbin3 = new Dustbin(930,550,20,100);

	ground1 = new ground(600,600,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}



