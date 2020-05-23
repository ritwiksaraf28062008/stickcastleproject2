const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  
  createCanvas(1200,400);
 
  
  var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
                                                             
    box1 = new Rect(200,400,70,360);
    box2 = new Rect(1000,400,70,360);
    box3 = new Rect(600,440,730,300);
    box4 = new Rect(600,280,730,170);
    box5 = new Rect(300,140,40,150);
    box6 = new Rect(900,140,40,150);
    ground = new Ground(600,590,1200,20);
}

function draw() {
  background(239,239,239);                              
  Engine.update(engine);
  fill(248,0,0)
  box1.display();
  box2.display();
  box5.display();
  box6.display();        
  fill(27,60,240);
  box3.display();
  fill("grey");
  box4.display();
  fill("brown");
  ground.display();

  drawSprites();

}