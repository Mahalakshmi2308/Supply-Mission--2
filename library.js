function bounceOff(package,ground){

    if (package.x -ground.x < ground.width/2 + package.width/2
      && ground.x - package.x < ground.width/2 + package.width/2) {
        package.velocityX = package.velocityX * (-1);
        ground.velocityX = ground.velocityX * (-1);
  }
  if (package.y - ground.y < ground.height/2 + package.height/2
    && ground.y - package.y < ground.height/2 + package.height/2){
      package.velocityY = package.velocityY * (-1);
      ground.velocityY = ground.velocityY * (-1);
  }
  
  }

  function isTouching(package, ground)
  { if (package.x - ground.x < ground.width/2 + package.width/2 && 
    ground.x - package.x < ground.width/2 + package.width/2 && 
    package.y - ground.y < ground.height/2 + package.height/2 && 
    ground.y - package.y < ground.height/2 + package.height/2) 
    { return true; } 
    else { return false; }
   }