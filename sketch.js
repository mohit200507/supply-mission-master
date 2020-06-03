var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft, boxRight, boxBottom	
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	boxLeftSprite=createSprite(280, 610, 20,100);
	 boxLeftSprite.shapeColor=color(255,0,0); 
	 boxLeftBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxLeftBody);
	
	boxRightSprite=createSprite(440, 610, 20,100);
	 boxRightSprite.shapeColor=color(255,0,0); 
	 boxRightBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxRightBody);
	
	boxBottomSprite=createSprite(360, 670, 180,30);
	 boxBottomSprite.shapeColor=color(255,0,0); 
	 boxBottomBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxBottomBody);
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



