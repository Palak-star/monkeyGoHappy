
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  survivalTime = 0;
  
}


function setup() {
  createCanvas(600,500)
  
   monkey = createSprite(150,400,50,50)
   monkey.addAnimation("running" ,monkey_running)
   monkey.scale = 0.2;
  
  ground = createSprite(300,490,1900,50)
  ground.velocityX = -2;
  ground.x = ground.width/2;
  console.log(ground.x)
  
   foodGroup = new Group();
   obsGroup = new Group();
  
 
  survivalTime = 0;
}


function draw() {
background("lightblue")
  
  
 survivalTime = survivalTime + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*survivalTime/100);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime, 230,50);
  
  
  monkey.collide(ground); 
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -20;
     
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  spawnBananas()
  spawnobstacle()
  
  drawSprites();
}

function spawnBananas() {
  if(frameCount % 80 === 0) 
   {
        var banana = createSprite(600,120,40,10);
        banana.y = Math.round(random(120,200));
        banana.addAnimation("banana" , bananaImage)
        banana.scale = 0.1;
        banana.velocityX = -3;
   
       banana.lifetime = 200
     
     
     foodGroup.add(banana);
  }
}


function spawnobstacle() {

  if(frameCount % 150 === 0) 
   {
        var obstacle = createSprite(600,450,40,10);
        obstacle.y = Math.round(random(440,445));
        obstacle.addImage("obstacle" , obstacleImage)
        obstacle.scale = 0.3;
        obstacle.velocityX = -3;

    obstacle.lifetime = 200
     
     obsGroup.collide(ground);
     obsGroup.add(obstacle);

   }
}