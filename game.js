import Platform from "./platfrom.js";


let x;
let y = 0;
let touchingPlatform = "";
let state = "game";
let moving = true;
let bollObj;
let platformObj;
let maxY = 600;

class doodler {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 0;   // Startar stillastående
      this.gravity = 0.4;  // Gravitationseffekt
      this.bounceStrength = -20; // Konstant studs-hastighet

      
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
          this.x -= 10;}
          if (keyIsDown(LEFT_ARROW) && this.x < 35) {
            this.x = 35;
          }
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += 10;
        }
        if (keyIsDown(RIGHT_ARROW) && this.x > 465) {
          this.x = 465;
        }
    
      
  }
}

let platforms = []; 



function setup() {
  createCanvas(500,650);
  x = 200;
  y = 550;

  bollObj = new doodler(x, y);
 platformObj = new Platform();
 for (let i = 0; i < 5; i++) {
   platforms.push(new Platform(500 - i * 100));
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


  if (player.y < maxY){
    maxY = player.y;
  }
translate(0, height/2 - maxY);

for (let platform of platforms){
  platform.draw(); 
}

}
