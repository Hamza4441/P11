var pathImg,path,path2
var boy,boyImg
var bound1, bound2
function preload(){
  //pre-load images
  
  pathImg = loadImage ("path.png")
  
  boyImg = loadAnimation ("Runner-2.png","Runner-1.png")




}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  
  path = createSprite (200,230);
  path.addImage(pathImg);
  path.velocityY = 15;
  path.scale = 1.2;
  


  boy = createSprite (200,300)
  boy.addAnimation ("running", boyImg)
  boy.scale = 0.1;

  bound1 = createSprite (20,200,5,400);
  bound1.visible = false
  


  bound2 = createSprite (380,200,5,400)
  bound2.visible = false

  
}

function draw() {
  background(0);  
  
  if (path.y > 400){
    path.y = height/2
  }

  
  boy.x = mouseX
  
  boy.collide(bound1);

  boy.collide (bound2)

  drawSprites()
}
