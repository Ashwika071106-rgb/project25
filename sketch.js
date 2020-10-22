
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1, dustbin2, dustbin3,dustbin4,dustbin5;
var block1,block2,block3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40);

    dustbin1 = new Dustbin(900,360,200,20);
	dustbin2 = new Dustbin(810,280,20,200);
	dustbin3 = new Dustbin(990,280,20,200);
	dustbin4 = new Dustbin(870,280,20,200);
	dustbin5 = new Dustbin(930,280,20,200);

	block1 = createSprite(900,380,200,20);
	block2 = createSprite(790,280,20,200);
	block3 = createSprite(1010,280,20,200);
	//block1.shapeColor="red";
	//block2.shapeColor="red";
	//block3.shapeColor="red";

	
	paper = new Paper(400,200,70);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(rgb(173,216,230));

  ground.display();
 
  
  dustbin4.display();
  dustbin5.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();
 
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-200});
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:200});
		//paper.body.velocityY+=85;
	}
}
