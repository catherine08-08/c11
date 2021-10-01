
function preload(){
  //pre-load images
  pathImg = loadImage ("path.png")
  runnerImg = loadAnimation("runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,200)
  runner = createSprite (180,340,30,30)
  runner.scale = 0.1
    path.addImage(pathImg)
    path.velocityY = 4
  runner.addAnimation("run",runnerImg)
}

function draw() {
  background(0);
  runner.x = mouseX
drawSprites ()
if (path.y> 400){
  path.y = 200
}
}
