// Inheritance Demo
// Mr. Scott
// Nov 29, 2023

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

//"parent" or "super" class 
class AnimatedObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;
  }

  move(){  //should give a 'wiggle' effect
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

}
