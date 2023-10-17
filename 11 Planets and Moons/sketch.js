// Planets and Moons
// Mr. Scott
// October 17, 2023
// Storing objects IN objects, overwriting objects
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(50);
  myPlanet.display();
}

class Planet {
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }
  createMoon() { //push a new moon object into array

  }
  display() {
    circle(this.x, this.y, this.s);
    //now, 'process' the moons (move, display)
  }
}

class Moon {
  constructor(x,y){
    this.x = x;   this.y = y;
    this.steps = 10;  this.speed = 5;
  }
  update(){  //movement and display
    this.x += this.speed;    this.steps--;    //MOVEMENT
    if(this.steps===0){
      this.speed *= -1;     this.steps = 20;
    }                               //DISPLAY
    circle(this.x, this.y, 25);
  }
}
