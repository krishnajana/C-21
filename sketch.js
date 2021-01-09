var fixedRect, movingRect;
var square1, square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1 = createSprite(400, 400, 50, 50);
  square1.shapeColor = "purple";
  square2 = createSprite(200, 100, 50, 50);
  square2.shapeColor = "lightblue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, square1)){
   movingRect.shapeColor="red";
   square1.shapeColor="red";

 } 
  else{
    movingRect.shapeColor="green";
    square1.shapeColor="green";

  }

  drawSprites();
}

 