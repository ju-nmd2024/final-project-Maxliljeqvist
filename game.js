
let x;
let y = 0;
let touchingPlatform = true;
let state = "game";
let moving = true;
let bollState = true

function setup() {
  createCanvas(500,650);
  x = 200;
  y = 550;
}

function startScreen() {
  background(0);
  fill(255);
  textSize(24);
  text("Press Enter to Start", 300, 300);
}

function gameScreen() {
  background(255);
 
  if (moving) {
    if (keyIsDown(LEFT_ARROW)) {
      x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      x += 5;
    }

  }

  if (touchingPlatform){
    touchingPlatform = true;{
      y -= 250;
      if (y < 200){
        y = 200;
      }
    }
touchingPlatform = false;{
  y += 250;
  if (y > 650){
    y = 650;
  }
}
  }

  doodler(x,y);

}


function doodler(x,y,s) {
  fill(0);  
  rect(x,y,50,50);
  
}


function draw() {
   clear();
  gameScreen();}
