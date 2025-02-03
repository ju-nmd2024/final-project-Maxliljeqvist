
let x;
let y = 0;
let state = "game";



function setup() {
  createCanvas(800,600);
  
}

function startScreen() {
  background(0);
  fill(255);
  textSize(24);
  text("Press Enter to Start", 300, 300);
}

function gameScreen() {
  background(100);
  fill(255);
  textSize(24);
  text("Game", 300, 300);


}


function doodler(x,y,s) {
  fill(255);
  ellipse(x,y,s);
  ellipse(x-10,y-10,s/2);
  ellipse(x+10,y-10,s/2);
  ellipse(x-15,y+10,s/2);
  ellipse(x+15,y+10,s/2);
}