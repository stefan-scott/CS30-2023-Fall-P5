// Puzzle Game Starter
// Mr. Scott
// Nov 6, 2023
// A first foray into working with 2D arrays.

let grid = 
[[0,    255,     0,     255,  255],
 [255,  255,     0,     255,  255],
 [255,  255,   255,     0,    255],
 [0,    0,       0,     255,    0]];

const NUM_ROWS = 4;   const NUM_COLS = 5;
let rectWidth = 50;   let rectHeight = 50;

function setup() {
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
}

function draw() {
  background(220);
  renderGrid();
  print(int(mouseX/rectWidth));
}

function getCurrentX(){ //return the current column mouse is in
  let constrainX = constrain(mouseX, 0 , width);
  return int(constrainX/rectWidth);
}

function getCurrentY(){ //return the current row mouse is in
  let constrainY = constrain(mouseY, 0, height);
  return int(constrainY/rectHeight);
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D Array for the corresponding fill values.
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}
