import Platform from "./platfrom.js";
import doodler from "./doodler.js";

let bollObj;
let gap;
let score = 0;
let platforms = [];

function setup() {
  createCanvas(500, 650);

  
  bollObj = new doodler(200,600);

  let numbPlatforms = 6;
    gap = height / numbPlatforms;
    for (let i = 1; i < 6; i++) {
      platforms.push(new Platform(random(width), height - i*gap));     
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
  background(255);
  
  translate(0, height / 2 - bollObj.y);
  bollObj.draw();

  
  if (bollObj.y < platforms[platforms.length - 1].y + 200) {
    platforms.push(new Platform(random(width), platforms[platforms.length - 1].y - gap));
  }

  
  if (bollObj.velocity < 0) { 
    score += Math.abs(bollObj.velocity);
  }

  

  for (let platform of platforms) {
    platform.draw();
  }

  
  resetMatrix();
  fill(0);
  textSize(24);
  text("Score: " + Math.floor(score), 10, 30);
  bollObj.update(platforms);
}






