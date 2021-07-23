var snow, snowImg;
var snow3, snow3Img;

function preload() {
  snowImg = loadImage("snow1.jpg");
  
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}