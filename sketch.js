var wall,thickness,bullet,speed,weight,damage;
function setup() {
  thickness=Math.round(random(22,83))
  wall=createSprite(1100,200,thickness,height/2);
  bullet=createSprite(100,200,50,10);
  speed=Math.round(random(223,321));
  bullet.velocityX=(speed/3);
  weight=Math.round(random(30,52));
  damage=Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));
  console.log(damage);
}
function draw() {
  createCanvas(1200,400);
  background(220);  
  drawSprites();
  touching();
}
function touching(){
  if(wall.isTouching(bullet)&&damage<10){
    bullet.velocityX=0;
    wall.shapeColor="green";
  }
  else if(wall.isTouching(bullet)&&damage>10){
    bullet.velocityX=0;
    wall.shapeColor="red";
  }
}