// Drawing with Single and Nested Loops
// Mr. Scott
// Sept 25, 2023
// Generating a single image with loops

// Global Variables
let numSegments = 10; 
let segmentHeight;  //height/numSegments.

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function gradient(){
  // use a loop to create a gradient background
  for(let i = 0; i < numSegments; i++){
    let y = i * segmentHeight;
    fill(y);
    rect(0,y,width, segmentHeight);
  }
}

function draw() {
  gradient();
}
