var box;
var ground;
var boundary, boundary2,boundary3;
var right;
var left;
var down;
var button;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

  

	engine = Engine.create();
	world = engine.world;

  button = createImg("button.png")
  button.size(100,100)
  button.position(600,200)
  button.mouseClicked(givingForce)

  
  ground =new Ground(400,790,800,20)
  down =new Ground(660,790,260,20)
  right  =new Ground(780,675,20,200)
  left =new Ground(540,675,20,200)
  boundary =new Ground(790,400,20,800)
  boundary2 =new Ground(400,10,800,20)
  boundary3 =new Ground(90,400,20,800)
  var box_options={
    
    restitution:0.8,
    firctionAir:0,
    density:0.1
    
    
    
  }

  box=Bodies.rectangle(200,350,50,50,box_options)
  World.add(world,box)



 

	//Create the Bodies Here.
  


	Engine.run(engine);
  
}


function draw() {
  background("blue");
  textSize(30)
  text("PRESS RED BUTTON",200,250)
  Engine.update(engine)
  down.show();
  left.show();
  right.show();
  
  
  rectMode(CENTER)
  fill("white")
  stroke("black")
  strokeWeight(6)

  rect(box.position.x,box.position.y,50,50);
  
  drawSprites();
 
}

function givingForce(){
  Matter.Body.applyForce(box,box.position,{x:7,y:-15})

}


