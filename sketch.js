
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1
var box1,box2,box3
var ball1


function preload()
{

}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(600,530,20,250);
    box2 = new Basebox(680,580,120,20);
    box3 = new Box(800,530,20,350)
	
    ball1 = new ball(100,500,70)
    ground1 = new ground(800,600,1600,20)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  text(mouseX+","+mouseY,mouseX,mouseY)
 //box1.display();
box2.display();
//box3.display();
	ball1.display();
	ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:710,y:-910})

}
}