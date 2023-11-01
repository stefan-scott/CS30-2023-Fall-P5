// Vector Basics
// Mr. Scott
// Nov 1, 2023
// Using Vectors for motion (pos, vel, accel) + OOP recap
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX, mouseY));
}

function draw() {
  background(220);
  for(let m of movers){
    m.move();  m.display();
  }
}

class Mover{
  constructor(x,y){
    this.pos = createVector(x,y);  //this.pos.x this.pos.y
    this.c = color(50, 50, random(150,255) ,150); //with transparency
  }
  //class methods
  move(){

  }
  display(){
    fill(this.c);    noStroke();
    push();   translate(this.x, this.y);
    circle(this.pos.x, this.pos.y, 20);
    pop();
  }
}
