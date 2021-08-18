var thebigwideocean,thebigwideoceanimage;
var titanic,titanicimage;

function preload(){;
 thebigwideoceanimage = loadImage ("sea.png");
 titanicimage = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){;
  createCanvas(400,400);
  thebigwideocean = createSprite (400,200);
  thebigwideocean.addImage (thebigwideoceanimage);
  thebigwideocean.scale = 0.3;
  thebigwideocean.velocityX = - 5;
  titanic = createSprite (200,200);
  titanic.addAnimation (titanicimage);
  
}

function draw() {;

  background("blue");
  if (thebigwideocean.x < 0) {;
    thebigwideocean.x = thebigwideocean.width /8;
  }
  drawSprites(); 
}
