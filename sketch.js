var car,wall;
var speed,weight,thickness,bullet;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
car.velocityX=speed;
car.shapeColor="blue"
wall.shapeColor=color(80,80,80)
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
}

function draw() {
  background(90,146,237);  
  if (wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0
var deform=.5*weight*speed*speed/22509;
if(deform>180){
car.shapeColor=color(255,0,0);
}
if(deform<180 && deform>100){

  car.shapeColor=color(151, 232, 182);
}
if(deform<100){

  car.shapeColor=color(189, 151, 232);
}

  }

if (0.5*weight*speed*speed/thickness*thickness*thickness<10){
wall.shapeColor="green"

}

if(0.5*weight*speed*speed/thickness*thickness*thickness>10){

wall.shapeColor="red"

}

  drawSprites();
}