 var PLAY = 1;
    var END = 0;
    var gameState = PLAY;
    
    var boy, boy_running, boy_collided;
    var dog,
    
    var cloudsGroup, cloudImage;
    var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
    
    var score;
    var restartimg,gameOverimg;
    var checksound,dieSound,jumpSound;
    
    function preload(){
      boy_running = loadAnimation(https://www.nbcnews.com/nightly-news/how-running-changed-life-boy-autism-n194051"");
      boy_collided = loadAnimation(https://www.nbcnews.com/nightly-news/how-running-changed-life-boy-autism-n194051"");
      
      dogImage = loadImage("https://www.colourbox.com/image/german-shepherd-image-4380027");
      
      
      
      restartimg=loadImage("restart.png");
      gameOverimg=loadImage("gameOver.png");
      //create sounds for the game(check,die and jump)
      checksound=loadSound("mixkit-metal-arrow-hit-2769.wav");
    dieSound=loadSound("mixkit-retro-game-notification-212.wav");
    jumpSound=loadSound("mixkit-video-game-spin-jump-2648.wav");
    }
    
    function setup() {
      createCanvas(600, 200);//canvas created for x an y.
      
      boy = createSprite(50,180,20,50);
      boy.addAnimation("running", trex_running);
      boy.addAnimation("collided" , trex_collided)
      boy.scale = 0.5;
      
      dog = createSprite(200,180,400,20);
      dog.addImage("ground",groundImage);
      dog.x = ground.width /2;
      
      restart=createSprite(300,140);
    restart.addImage(restartimg);
    restart.scale=0.5;
    
    gameOver=createSprite(300,100);
    gameOver.addImage(gameOverimg);
    gameOver.scale=0.5;
    
      
    
      
      //create Obstacle and Cloud Groups
      console.log("Hello" + 5);
      
      boy.setCollider("rectangle",0,0,400,trex.height);
      boy.debug = true
      
      score = 0
    }
    
    function draw() {
      background(180);
      //displaying score
      text("Score: "+ score, 500,50);
      
      console.log("this is ",gameState)
      
      
      if(gameState === PLAY){
        //move the ground
        gameOver.visible=false//game over should not be there when you are playing the game. False makes text disappeare.
        restart.visible=false//same for restart symbol.
        dog.velocityX = -(4+3*score/100);
        //scoring
        score = score + Math.round(frameCount/60);
    
        if(score>0&&score%100===0)
        {
          checksound.play();
        }
        
        if (ground.x < 0){
          ground.x = ground.width/2;
        }
        
        //jump when the space key is pressed
        if(keyDown("space")&& boy.y >=100) {
            trex.velocityY = -13;
            jumpSound.play();
        }
        
        //add gravity
        boy.velocityY = boy.velocityY + 0.8
      
       
        
        if(dog.isTouching(boy)){
           boy.velocityY=-13;
           jumpSound.play();
        }
      }
       else if (gameState === END) {
          dog.velocityX = 0;
          boy.velocityY=0;
          boy.changeAnimation("collided",trex_collided);
         gameOver.visible=true
         restart.visible=true
         
      
     
      //stop boy from falling down
      boy.collide(invisibleGround);
      
      
      
      drawSprites();
    }
    
    function spawnObstacles(){
     if (frameCount % 60 === 0){
       var obstacle = createSprite(400,165,10,40);
       obstacle.velocityX = -(6+score/100);
       
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
          case 4: obstacle.addImage(obstacle4);
                  break;
          case 5: obstacle.addImage(obstacle5);
                  break;
          case 6: obstacle.addImage(obstacle6);
                  break;
          default: break;
        }
       
        //assign scale and lifetime to the obstacle           
        dog.scale = 0.5;
        dog.lifetime = 300;
       
       //add each obstacle to the group
        obstaclesGroup.add(obstacle);
     }
    }
    
    function spawnClouds() {
      //write code here to spawn the clouds
       if (frameCount % 60 === 0) {
         cloud = createSprite(600,100,40,10);
        cloud.y = Math.round(random(10,60));
        cloud.addImage(cloudImage);
        cloud.scale = 0.5;
        cloud.velocityX = -3;
        
         //assign lifetime to the variable
        cloud.lifetime = 134;
        
        //adjust the depth
        dog.depth = trex.depth;
        boy.depth = trex.depth + 1;
        
        
       
        }
    }
    
    
}


 



 
