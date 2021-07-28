//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var Matter;
var canvas, board, boardImg, title, titleImg, cursor, cursorImg, identityCat,identityDog,identityHorse,identityLion,identityPig,identityPeacock,identityCow,identityCrow,identityParrot,identityDuck;
var catT, dogT, horseT, lionT, pigT, cowT, crowT, duckT, parrotT, pracockT;
var catS, dogS;
var cat, catImg, dog, dogImg, horse, horseImg, lion,lionImg,pig,pigImg,duck,duckImg,crow,crowImg,elephant,elephantImg,parrot,parrotImg,peacock,peacockImg;

function preload(){

  boardImg = loadImage("images/blackboard.jpg");
  catImg = loadImage("images/catImg.jpg");
  dogImg = loadImage("images/dogImg.jpg");
  cowImg = loadImage("images/cowImg.jpg");
  lionImg = loadImage("images/lionImg.jpg");
  pigImg = loadImage("images/pigImg.jpg");
  elephantImg = loadImage("images/elephantImg.jpg");
  crowImg = loadImage("images/crowImg.jpg");
  duckImg = loadImage("images/duckImg.jpg");
  horseImg = loadImage("images/horseImg.jpg");
  parrotImg = loadImage("images/parrotImg.jpg");
  peacockImg = loadImage("images/peacockImg2.jpg");
  titleImg = loadImage("images/title.jpg");
  cursorImg = loadImage("images/handcursor.png");

  catT = loadImage("images/catT.png");
  dogT = loadImage("images/dogT.png");
  horseT = loadImage("images/horseT.jpg");
  lionT = loadImage("images/lionT.png");
  pigT = loadImage("images/pigT.jpg");
  cowT = loadImage("images/cowT.jpg");
  crowT = loadImage("images/crowT.jpg");
  duckT = loadImage("images/duckT.jpg");
  parrotT = loadImage("images/parrotT.jpg");
  peacockT = loadImage("images/peacockT.png");

  catS = loadSound("sounds/catsound.mp3");
  dogS = loadSound("sounds/dogsound.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth -70, displayHeight -70);
  //engine = Engine.create();
   // world = engine.world;

  board = createSprite(700,400,20,20);
  board.addImage(boardImg);
  board.scale =  2.3;

  cat = createSprite(430,130,5,5);
  cat.addImage(catImg);
  cat.scale = 0.15;

  dog = createSprite(430,200,5,5);
  dog.addImage(dogImg);
  dog.scale = 0.17;

  horse = createSprite(430,270,5,5);
  horse.addImage(horseImg);
  horse.scale = 0.045;

  lion = createSprite(430,340,5,5);
  lion.addImage(lionImg);
  lion.scale = 0.05;

  parrot = createSprite(1220,120,5,5);
  parrot.addImage(parrotImg);
  parrot.scale = 0.075;

  duck = createSprite(1220,190,5,5);
  duck.addImage(duckImg);
  duck.scale = 0.12;

  crow = createSprite(1220,270,5,5);
  crow.addImage(crowImg);
  crow.scale = 0.1;

  cow = createSprite(430,500,5,5);
  cow.addImage(cowImg);
  cow.scale = 0.35;

  pig= createSprite(1220,360,5,5);
  pig.addImage(pigImg);
  pig.scale = 0.11;

  peacock = createSprite(1210,450,5,5);
  peacock.addImage(peacockImg);
  peacock.scale = 0.055;

  title = createSprite(800,73,5,5);
  title.addImage(titleImg);
  title.scale = 0.3;

  cursor = createSprite(800,500,5,5);
  cursor.addImage(cursorImg);
  cursor.scale = 0.1;
  
  identityCat = createSprite(830, 550,2,2);
  identityCat.addImage(catT);
  identityCat.scale =  0;

  identityDog = createSprite(830, 550,2,2);
  identityDog.addImage(dogT);
  identityDog.scale =  0;

  identityCow = createSprite(830, 550,2,2);
  identityCow.addImage(cowT);
  identityCow.scale =  0;

  identityCrow = createSprite(830, 550,2,2);
  identityCrow.addImage(crowT);
  identityCrow.scale =  0;

  identityDuck = createSprite(830, 550,2,2);
  identityDuck.addImage(duckT);
  identityDuck.scale =  0;

  identityHorse = createSprite(830, 550,2,2);
  identityHorse.addImage(horseT);
  identityHorse.scale =  0;

  identityLion = createSprite(830, 550,2,2);
  identityLion.addImage(lionT);
  identityLion.scale =  0;

  identityParrot = createSprite(830, 550,2,2);
  identityParrot.addImage(parrotT);
  identityParrot.scale =  0;

  identityPeacock = createSprite(830, 550,2,2);
  identityPeacock.addImage(peacockT);
  identityPeacock.scale =  0;

  identityPig = createSprite(830, 520,2,2);
  identityPig.addImage(pigT);
  identityPig.scale =  0;
  

}


function draw(){
  background("grey");

  


  
  if(cursor.isTouching(cat)){
    cat.scale = 1;
    cat.x = 800;
    cat.y = 300;
    identityCat.scale = 0.4;
    
    cat.play(catS);    
  }
  
  if(cursor.isTouching(cat)&& cat.scale ===1){
    cat.scale = 0.15;
    cat.x = 430;
    cat.y = 130;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;

  }

  if(cursor.isTouching(dog)){
    dog.scale = 1;
    dog.x = 800;
    dog.y = 300;
    identityDog.scale = 0.4;
  }
  if(cursor.isTouching(dog)&& dog.scale ===1){
    dog.scale = 0.17;
    dog.x = 430;
    dog.y = 200;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(horse)){
    horse.scale = 0.3;
    horse.x = 800;
    horse.y = 300;
    identityHorse.scale = 0.4;
  }
  if(cursor.isTouching(horse)&& horse.scale ===0.3){
    horse.scale = 0.045;
    horse.x = 430;
    horse.y = 270;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(lion)){
    lion.scale = 0.3;
    lion.x = 800;
    lion.y = 300;
    identityLion.scale = 0.4;
  }
  if(cursor.isTouching(lion)&& lion.scale ===0.3){
    lion.scale = 0.05;
    lion.x = 430;
    lion.y = 340;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(pig)){
    pig.scale = 0.4;
    pig.x = 800;
    pig.y = 300;
    identityPig.scale = 0.08;
  }
  if(cursor.isTouching(pig)&& pig.scale ===0.4){
    pig.scale = 0.11;
    pig.x = 1220;
    pig.y = 360;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(parrot)){
    parrot.scale = 0.4;
    parrot.x = 800;
    parrot.y = 300;
    identityParrot.scale = 0.2;
  }
  if(cursor.isTouching(parrot)&& parrot.scale ===0.4){
    parrot.scale = 0.075;
    parrot.x = 1220;
    parrot.y = 120;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(duck)){
    duck.scale = 0.5;
    duck.x = 800;
    duck.y = 300;
    identityDuck.scale = 0.17;
  }
  if(cursor.isTouching(duck)&& duck.scale ===0.5){
    duck.scale = 0.12;
    duck.x = 1220;
    duck.y = 190;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(cow)){
    cow.scale = 1.6;
    cow.x = 800;
    cow.y = 300;
    identityCow.scale = 0.4;
  }
  if(cursor.isTouching(cow)&& cow.scale ===1.6){
    cow.scale = 0.35;
    cow.x = 430;
    cow.y = 500;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(crow)){
    crow.scale = 0.4;
    crow.x = 800;
    crow.y = 300;
    identityCrow.scale = 0.4;
  }
  if(cursor.isTouching(crow)&& crow.scale ===0.4){
    crow.scale = 0.1;
    crow.x = 1220;
    crow.y = 270;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  if(cursor.isTouching(peacock)){
    peacock.scale = 0.3;
    peacock.x = 800;
    peacock.y = 300;
    identityPeacock.scale = 0.4;
  }
  if(cursor.isTouching(peacock)&& peacock.scale ===0.3){
    peacock.scale = 0.055;
    peacock.x = 1210;
    peacock.y = 450;
    identityCat.scale = 0;
    identityDog.scale  = 0;
    identityHorse.scale = 0;
    identityLion.scale = 0;
    identityDuck.scale = 0;
    identityCow.scale = 0;
    identityCrow.scale = 0;
    identityPig.scale = 0;
    identityPeacock.scale = 0;
    identityParrot.scale = 0;
  }

  drawSprites();
  

 cursor.x =  mouseX;
 cursor.y =  mouseY;
}
