var car,wall;
var speed,weight;

function setup() {

  createCanvas(1600,400);
  wall =  createSprite(1500, 200, 60,height/2);
 
  speed = random(55,90);
 
  car =  createSprite(400, 200, 50, 50);
car.velocityX = speed;

 
  weight = random(400,1500);
}

function draw() {
  background("yellow");  
  
  if(wall.x-car.x< (car.width + wall.width)/2){
car.velocityX = 0;
var crash = 05*weight*speed*speed/22509;
if (crash>180);
{
  car.shapeColor = color(225,0,0);
}
if (crash<18 && crash>100){
  car.shapeColor = color(230,230,0);
}
if(crash<100){
  car.shapeColor = color(225,0);
}
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}