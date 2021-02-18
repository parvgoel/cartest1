var speed,car,weight,wall

function setup() {
  createCanvas(1600,800);
  car=createSprite(50, 400, 50, 50);
  wall=createSprite(1500, 400, 50, 100);
speed=random(50,90)
weight=random(400,1500)
car.velocityX=speed
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<car.width) {
car.velocityX=0
var D = 0.5*weight*speed*speed/22500
if(D>180){
  car.shapeColor="red"
}
if(D>100&&D<180){
  car.shapeColor="yellow"
}
if(D<100){
  car.shapeColor="green"
}
  }
  drawSprites();
}