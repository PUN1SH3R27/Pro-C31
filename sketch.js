const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];
function setup() {
  createCanvas(801,550);
  rectMode(CENTER)
  engine = Engine.create();
	world = engine.world;


  Ground1= new ground(width/2,520,1200,15)
 // Division1= new DivisionObject(2,415,10,200)
 // Division2= new DivisionObject(77,415,10,200)
 // Division3= new DivisionObject(152,415,10,200)
 // Division4= new DivisionObject(227,415,10,200)
 // Division5= new DivisionObject(302,415,10,200)
 // Division6= new DivisionObject(377,415,10,200)
 // Division7= new DivisionObject(454,415,10,200)
 // Division8= new DivisionObject(528,415,10,200)
  Border1=new DivisionObject(-7,415,10,1200)
  Border2=new DivisionObject(806,400,10,1200)
  

  for (var i= 10; i<= width; i=i+ 78.12)
  {
    divisions.push(new DivisionObject(i,415,10,200));
  }

  for (var j= 10; j <= width; j=j+52)
  {
    plinkos.push(new Plinko(j,55));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,125));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,195));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,265));
  }

 
}




function draw() {
  background("black"); 
  Engine.update(engine);

  Ground1.display();
  //Division1.display()
  //Division2.display()
  //Division3.display()
 // Division4.display()
 // Division5.display()
 // Division6.display()
 // Division7.display()
 // Division8.display()
  Border1.display()
  Border2.display()

  
  for(var j= 0;j<plinkos.length;j++){

    plinkos[j].display()
  }
  for(var i= 0;i<divisions.length;i++){

    divisions[i].display()

  }

  if(frameCount%60===0){

    particles.push(new Particle(random(width/2-100, width/2+100),10,10 ));
  }
  for (var l=0; l< particles.length;l++){

      particles[l].display();
  }


  drawSprites();
}





