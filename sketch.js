
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b,c,ground,b1,b2;



function setup() {
	var canvas = createCanvas(1200,700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,670,1200,80);
	c= new Paper(200,550,30);
	
	b= new Dustbin(950,618,100,20);
	b1= new Dustbin(890,578,20,100);
	b2= new Dustbin(1010,578,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  b.display();
  c.display();
  b1.display();
  b2.display();
  keyPressed();

  

}
function keyPressed(){
	if(keyCode === UP_ARROW && c.body.position.x<=400 ){
		Matter.Body.applyForce(c.body,c.body.position,{x:20,y:-20});
		
	}
	if(c.body.position.x>=400 && c.body.position.y>650){
	    Matter.Body.applyForce(c.body,c.body.position,{x:20,y:40});

	}
	if(c.body.position.x>=600 && c.body.position.y<650){
		Matter.Body.applyForce(c.body,c.body.position,{x:0,y:0});

	}
}



