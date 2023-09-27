// Repositioning Rectangles
// Mr. Scott
// Sept 27, 2023
// Simple GUI creation / Geometry practice

//Global Variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;  //are we hovering over the rect?

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2,  y = height/2;
  rWidth = 200;   rHeight = 100;
}

function drawRectangle(){
  //render the rectangle and handle dragging...
}

function draw() {
  background(220);
  drawRectangle();
}
