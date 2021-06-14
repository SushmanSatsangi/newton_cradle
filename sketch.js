const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 150, 450, 40, {isStatic:true});
	

	bobObj1 = new Bob(225, 500, 100);
	bobObj2 = new Bob(280, 555, 100);
	bobObj3 = new Bob(335, 610, 100);
	bobObj4 = new Bob(170, 445, 100);
	bobObj5 = new Bob(115, 395, 100);

	rope1 = new Rope(bobObj1.body, roof.body);
	rope2 = new Rope(bobObj2.body, roof.body);
	rope3 = new Rope(bobObj3.body, roof.body);
	rope4 = new Rope(bobObj4.body, roof.body);
	rope5 = new Rope(bobObj5.body, roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}