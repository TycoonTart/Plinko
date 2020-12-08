const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground1
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  for(var k=0;k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375))
  }

  ground1=new ground(500,800,1000,20);
  
}

function draw() {
  background(0); 
  Engine.update(engine) 
 
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(let x of divisions ){
    x.display();
  }

  ground1.display();
  for(let i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  
}