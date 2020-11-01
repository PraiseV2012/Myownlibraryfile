var fixedrect, movingrect
var gameobject1,gameobject2



function setup() {
  createCanvas(1200,800);
  
  movingrect = createSprite(400,200,50,80)
  movingrect.shapeColor = "green"

  fixedrect = createSprite(400,800,50,80)
  fixedrect.shapeColor = "green"
movingrect.velocityY = 5
fixedrect.velocityY = -5

gameobject1 = createSprite(100,100,50,50)
gameobject1.shapeColor = "lightgreen"

gameobject2 = createSprite(200,200,50,80)
gameobject2.shapeColor = "lightblue"



}

function draw() {
  background(0);  
  gameobject2.x = World.mouseX
  gameobject2.y = World.mouseY

if(isTouching(gameobject1,gameobject2)){
gameobject1.shapeColor = "red"
gameobject2.shapeColor = "red"

}
else{
  gameobject1.shapeColor = "lightgreen"
  gameobject2.shapeColor = "lightblue"

}
  
  bounceoff(movingrect,fixedrect)
    



     
  
  
  drawSprites();
}
