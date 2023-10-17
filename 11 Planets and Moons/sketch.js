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

}
