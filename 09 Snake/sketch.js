// Snake Mechanics
// Mr. Scott
// Oct 11, 2023
// Practice in working with Classes and Arrays (Snake)

//Global Variables
let points = []; //snake coordinates
let speed = 6;  //snake speed
let snakeLength = 10;
let snakeLocation;  //a Point for the where the head is

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width/2, height/2);
  strokeWeight(15);
}

function draw() {
  background(220);
}

class Point{ //a class for an (x,y) point
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
