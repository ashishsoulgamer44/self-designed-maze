
var obstacle;
var backgroundimg;
var cowboy;
var cat;



function preload(){
  backgroundImg = loadImage("desert.jpg");
  cowboyImg = loadImage("cowboy.png");
  catImg = loadImage("cat.png");
  wood = loadImage("wood1.png");
  wood2 = loadImage("plank1.png");
  dinoImg = loadImage("idle (5).png")
  
  }
  

function setup() {
 var canvas = createCanvas(1200,700);
 
 cowboy = createSprite(50,640,30,30);
cowboy.addImage("cowboy",cowboyImg);
cowboy.scale = 0.25;

cat = createSprite(90,90,30,30);
cat.addImage("cat",catImg);
cat.scale = 0.15;


maze1 = createSprite(100,150,2000,25);
maze1.shapeColor = "brown"
maze2 = createSprite(1100,300,2000,23);
maze2.shapeColor = "brown"
maze3 = createSprite(115,275,30,60);
maze3.shapeColor = "brown"
maze4 = createSprite(250,175,30,60);
maze4.shapeColor = "brown"
maze5 = createSprite(400,260,30,60);
maze5.shapeColor = "brown"
maze6 = createSprite(550,175,30,60);
maze6.shapeColor = "brown"
maze7 = createSprite(700,270,30,80);
maze7.shapeColor = "brown"
maze8 = createSprite(850,175,30,75);
maze8.shapeColor = "brown"
maze9 = createSprite(1000,275,30,75);
maze9.shapeColor = "brown"
maze10 = createSprite(100,425,2000,20);
maze10.shapeColor = "brown"
maze11 = createSprite(100,400,30,65)
maze11.shapeColor = "brown"
maze12 = createSprite(250,325,30,65);
maze12.shapeColor = "brown"
maze13 = createSprite(375,400,30,65);
maze13.shapeColor = "brown"
maze14 = createSprite(500,325,30,65);
maze14.shapeColor = "brown"
maze15 = createSprite(625,400,30,65);
maze15.shapeColor = "brown"
maze16 = createSprite(750,325,30,65);
maze16.shapeColor = "brown"
maze17 = createSprite(875,400,30,65);
maze17.shapeColor = "brown"
maze18 = createSprite(975,325,30,65);
maze18.shapeColor = "brown"
maze19 = createSprite(1075,325,30,65);
maze19.shapeColor = "brown"
maze20 = createSprite(1175,425,30,30);
maze20.shapeColor = "brown"
maze21 = createSprite(1000,600,1800,30);
maze21.shapeColor = "brown"
maze22 = createSprite(1000,575,30,65);
maze22.shapeColor = "brown"
maze23 = createSprite(1000,450,30,65)
maze23.shapeColor = "brown"
maze24 = createSprite(800,550,30,125);
maze24.shapeColor = "brown"
maze25 = createSprite(600,475,30,120);
maze25.shapeColor = "brown"
maze26 = createSprite(400,550,30,80);
maze26.shapeColor = "brown"
maze27 = createSprite(400,440,30,20);
maze27.shapeColor = "brown"
maze28 = createSprite(200,550,30,120);
maze28.shapeColor = "brown"
scanner = createSprite(1150,230,20,150);
scanner.visible = false;
scanner2 = createSprite(90,90,20,20);
scanner2.visible = false;
scanner3 = createSprite(910,90,20,70);
scanner3.visible = false;
boundary1 = createSprite(90,5,2500,10);
boundary1.shapeColor = "white"
boundary2 = createSprite(5,5,10,2500);
boundary2.shapeColor = "white"
boundary3 = createSprite(1195,5,10,2500);
boundary3.shapeColor = "white"
obstacle1 = createSprite(1000,110,20,20);
obstacle1.addImage("dino",dinoImg);
obstacle1.scale = 0.1
obstacle2 = createSprite(975,260,20,20);
obstacle2.addImage("dino",dinoImg);
obstacle2.scale = 0.1
obstacle3 = createSprite(675,260,20,20);
obstacle3.addImage("dino",dinoImg);
obstacle3.scale = 0.1
obstacle4 = createSprite(375,260,20,20);
obstacle4.addImage("dino",dinoImg);
obstacle4.scale = 0.1
obstacle5 = createSprite(375,390,20,20);
obstacle5.addImage("dino",dinoImg);
obstacle5.scale = 0.1
obstacle6 = createSprite(375,560,20,20);
obstacle6.addImage("dino",dinoImg);
obstacle6.scale = 0.1
obstacle7 = createSprite(775,560,20,20);
obstacle7.addImage("dino",dinoImg);
obstacle7.scale = 0.1
scanner4 = createSprite(500,90,20,90);
scanner4.visible = false;



}





function draw() {
 
  background(backgroundImg);  





if(keyDown("up")){
  cat.y = cat.y-3;
}

if(keyDown("down")){
  cat.y = cat.y+3;
}

if(keyDown("left")){
  cat.x = cat.x-3;
}

if(keyDown("right")){
  cat.x = cat.x+3;
}

if(keyDown("space")){
  cat.scale = 0.1;
}




if(cat.isTouching(maze1)){
  reset();
}

if(cat.isTouching(maze2)){
  reset();
}

if(cat.isTouching(maze3)){
  reset();
}

if(cat.isTouching(maze4)){
  reset();
}

if(cat.isTouching(maze5)){
  reset();
}

if(cat.isTouching(maze6)){
  reset();
}

if(cat.isTouching(maze7)){
  reset();
}

if(cat.isTouching(maze8)){
  reset();
}

if(cat.isTouching(maze9)){
  reset();
}

if(cat.isTouching(maze10)){
  reset();
}

if(cat.isTouching(maze11)){
  reset();
}

if(cat.isTouching(maze12)){
  reset();
}

if(cat.isTouching(maze13)){
  reset();
}

if(cat.isTouching(maze14)){
  reset();
}

if(cat.isTouching(maze15)){
  reset();
}

if(cat.isTouching(maze16)){
  reset();
}

if(cat.isTouching(maze17)){
  reset();
}

if(cat.isTouching(maze18)){
  reset();
}


if(cat.isTouching(maze19)){
  reset();
}

if(cat.isTouching(maze20)){
  reset();
}


if(cat.isTouching(maze21)){
  reset();
}



if(cat.isTouching(maze22)){
  reset();
}


if(cat.isTouching(maze23)){
  reset();
}


if(cat.isTouching(maze24)){
  reset();
}


if(cat.isTouching(maze25)){
  reset();
}


if(cat.isTouching(maze26)){
  reset();
}


if(cat.isTouching(maze27)){
  reset();
}


if(cat.isTouching(maze28)){
  reset();
}

if(cat.isTouching(scanner)){
  fill("RED");
  textSize(50);
  
  text("PRESS SPACE TO GET SMALL",100,100);

}

if(cat.isTouching(scanner2)){
  fill("red")
  textSize(50);
  
  text("PRESS ARROW KEYS TO START",150,100);
}

if(cat.isTouching(cowboy)){
  fill("red");
  textSize(50);
  text("YOU WIN CONGRATS",100,100);
}

if(cat.isTouching(scanner3)){
  fill("red")
  textSize(50);
  text("DONT TOUCH THE DINOSAURS",100,100);
}


if(cat.isTouching(scanner4)){
  fill("red")
  textSize(50);
  text("DONT TOUCH THE RED LINES",100,100);
}






if(cat.isTouching(obstacle1)){
  reset();
}

if(cat.isTouching(obstacle2)){
  reset();
}
if(cat.isTouching(obstacle3)){
  reset();
}
if(cat.isTouching(obstacle4)){
  reset();
}
if(cat.isTouching(obstacle5)){
  reset();
}

if(cat.isTouching(obstacle6)){
  reset();
}

if(cat.isTouching(obstacle7)){
  reset();
}






cat.bounceOff(boundary1);
cat.bounceOff(boundary2);
cat.bounceOff(boundary3);


  drawSprites();


function reset(){
  cat.x = 90;
  cat.y = 90;
  cat.scale = 0.15
}



}

