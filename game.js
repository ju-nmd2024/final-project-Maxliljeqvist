import Platform from "./platfrom.js";
import doodler from "./doodler.js";

let x;
let y = 0;
let touchingPlatform = "";
let state = "game";
let moving = true;
let bollObj;
let platformObj;
let maxY = 600;



let platforms = []; 
  


function setup() {
  createCanvas(500,650);
  x = 200;
  y = 550;

  bollObj = new doodler(x, y);
 platformObj = new Platform();
 for (let i = 0; i < 5; i++) {
   platforms.push(new Platform(900 - i * 100));
 }
 player = new doodler();
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
  cameraDown();

  if (player.y < maxY){
    maxY = player.y;
  }
translate(0, height/2 - maxY);

for (let platform of platforms){
  platform.draw(); 
}

}

function cameraDown() {
  if (bollObj.y < 300) {
    for (let platform of platforms) {
      platform.y += 10;
    }
  }
}