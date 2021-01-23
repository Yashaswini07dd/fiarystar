var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 470);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30, 5 , {restitution:1.0, isStatic:true});
starBody.position.x = 650;
starBody.position.y = 30;

	World.add(world, starBody);
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
star.x = starBody.position.x;
star.y = starBody.position.y;
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairyVoice.play();








keyPressed();



  drawSprites();

}

function keyPressed() {
 

	//write code here
if(keyDown(RIGHT_ARROW)) {
fairy.x = fairy.x + 5;

}

if(keyDown(LEFT_ARROW)) {
	fairy.x = fairy.x - 5;
	
	}
	
	if(keyDown(DOWN_ARROW)) {
		star.y = star.y +5;
		}


if (star.y > 470){
	isStatic :false
}
}






