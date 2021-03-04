const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var particles = [];
//var plinkos = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 797.5, 480, 5);
  
}

function draw() {
  Engine.update(engine);
  background(0);  
  drawSprites();
  ground.display();
  //divisions.display()
  for (var k = 0; k <= width; k = k + 80){
    var divisions = new Division(k, height-divisionHeight/2, 10, divisionHeight);
    divisions.display();
  }
  for (var a=40; a <= width; a=a+50){
    var plinkos = new Plinko(a, 75, 0.10);
    plinkos.display();
  }
  for (var a=15; a <= width; a=a+50){
    var plinkos = new Plinko(a, 175, 0.10);
    plinkos.display();
  }
  for (var a=40; a <= width; a=a+50){
    var plinkos = new Plinko(a, 275, 0.10);
    plinkos.display();
  }
  for (var a=15; a <= width; a=a+50){
    var plinkos = new Plinko(a, 375, 0.10);
    plinkos.display();
  }
  if(frameCount%20 === 0){
    console.log("particle")
    var part = new Particle(random(20, 460), -20, 9)
    particles.push(part);
  }
  for(var d = 0; d < particles.length - 1;d++){
    particles[d].display();
  }
}