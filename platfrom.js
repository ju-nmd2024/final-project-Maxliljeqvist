export default class Platform{
    constructor(){
    this.x = random(1, 491);
    this.y = y;
    this.width = 100;
    this.height = 10;
    

if (random() < 0.3){
this.brittle = true; 
} else {
this.brittle = false;
    }

if (random() < 0.5){
    this.speed = random([-2, 2]);
}else  {
    this.speed = 0;
}
}

draw(){
    this.x += this.speed;
    if (this.x > 500){
        this.speed *= -1;
    }
   else if (this.x + this.width < 0){
    this.speed *= -1;
 }

 fill(red);
 rect(this.x, this.y, this.width, this.height);
}
}