export default class doodler {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.height = 60;
    this.width = 40;

    this.velocity = 0;
    this.gravity = 0.15;
    this.jumpForce = 8; 
}

draw() { 
    rect(this.x, this.y, this.width, this.height);
}

update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (keyIsDown(LEFT_ARROW)) {
        this.x -= 8;
      } 
      
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += 8;
      }

    if (this.x + this.width < 0) this.x = width;   
    if (this.x > width) this.x = -this.width;

    if (this.velocity < -8) this.velocity = -8;

    for (let platform of platforms) { 
        if (this.y + this.height >= platform.y && this.y + this.height <= platform.y + platform.height) {
          
          let minX = platform.x - this.width;
          let maxX = platform.x + platform.width;
          
          if (this.x >= minX && this.x <= maxX) {
            this.jump();
          }
        }
      }
}

jump() {
    this.velocity -= this.jumpForce;
  }
}
  
 