export default class Platform {
    constructor(y) { 
        this.x = random(1, 400); 
        this.y = y; 
        this.width = 100;
        this.height = 10;

        if (random() < 0.3) {
            this.brittle = true;
        } else {
            this.brittle = false;
        }

        if (random() < 0.5) {
            this.speed = random([-2, 2]);
        } else {
            this.speed = 0;
        }
    }

    draw() {
        this.x += this.speed;
        if (this.x > 400 || this.x < 0) {
            this.speed *= -1;
        }

        fill(255, 0, 0); 
        rect(this.x, this.y, this.width, this.height);
    }
}
