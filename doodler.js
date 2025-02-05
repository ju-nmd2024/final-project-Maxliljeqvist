export default class doodler {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 0;   // Startar stillastående
        this.gravity = 0.4;  // Gravitationseffekt
        this.bounceStrength = -20; // Konstant studs-hastighet
        this.height = 70;
  
        
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
  
 