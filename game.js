
let x;
let y = 0;
let touchingPlatform = "";
let state = "game";
let moving = true;
let bollObj;

class doodler {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 0;   // Startar stillastående
      this.gravity = 0.4;  // Gravitationseffekt
      this.bounceStrength = -10; // Konstant studs-hastighet
  }

  draw() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 70, 70);
  }

  update() {
      this.speed += this.gravity; // Lägg till gravitation till hastigheten
      this.y += this.speed;       // Uppdatera bollens position

      // Om bollen träffar marken
      if (this.y >= 600) { 
          this.y = 600; // Håll den ovanför marken
          this.speed = this.bounceStrength; // Studsa upp med konstant kraft
          
      }
      if (moving) {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= 10;
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += 10;
        }
    
      }
  }
}

function setup() {
  createCanvas(500,650);
  x = 200;
  y = 550;

  bollObj = new doodler(x, y);

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
      x -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      x += 10;
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

  

}




function draw() {
   clear();
  gameScreen();
  bollObj.update();
  bollObj.draw();
}
