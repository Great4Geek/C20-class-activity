var toprect,bottomrect,edges;

function setup() {
  createCanvas(800,400);
  toprect = createSprite(400,50,20,20);
  bottomrect = createSprite(400,350,20,20);
  edges = createEdgeSprites();
  toprect.velocityY = 4
  bottomrect.velocityY = -4
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  if (bottomrect.y - toprect.y <= bottomrect.height/2 + toprect.height/2 && 
   toprect.y -bottomrect.y <=toprect.height/2 + bottomrect.height/2 &&
   toprect.x - bottomrect.x <= toprect.width/2 + bottomrect/2
   && bottomrect.x - toprect.x <= bottomrect.width/2 + toprect.width/2 )
  {
    bottomrect.velocityY = - bottomrect.velocityY
    toprect.velocityY = - toprect.velocityY
  }
     
  
  
  drawSprites();
}