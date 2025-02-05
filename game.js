import Platform from "./platfrom.js";
import doodler from "./doodler.js";

let x;
let y = 0;
let moving;
let bollObj;
let gap;
let maxY = 600;
let score = 0;


let platforms = []; 
  


function setup() {
  createCanvas(500,650);
  x = 200;
  y = 550;

  bollObj = new doodler(x, y);
 let numbPlatforms = 5;
 gap = height / numbPlatforms;
 for (let i = 1; i < 5; i++) {
   platforms.push(new Platform(random(width), height -  i *gap));
 }
 
}

function startScreen() {
  background(0);
  fill(255);
  textSize(24);
  text("Press Enter to Start", 300, 300);
}



function gameScreen() {
  background(255);
 
}




function draw() {
   clear();
  gameScreen();
  bollObj.update();
  bollObj.draw();
  

  if (bollObj.speed < 0) { 
    //line from copilot
    score += Math.abs(bollObj.speed);
  }

  if (bollObj.y < maxY) {
    maxY = bollObj.y;
  }
  translate(0, height / 2 - maxY);
translate(0, width / 2 - bollObj.y);
  for (let platform of platforms) {
    platform.draw();
  }

  //ser till att score texten stannar på (10,30) i realtion till canvasen
  resetMatrix();
  fill(0);
  textSize(24);
  text("Score: " + Math.floor(score), 10, 30);
}





