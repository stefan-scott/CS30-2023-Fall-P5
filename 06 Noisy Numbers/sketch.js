// Noisy Numbers
// Mr. Scott
// October 4, 2023
// Some simple animations using
// random()  and   noise()

// Global Variables
let segL = 10;
let ballY = 200;  let ySpeed;
           
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentLine(){
  //using a loop, draw one line made up of many
  strokeWeight(5);
  
  let x = 0; //loop variable
  while (x < width){
    line(x, height/2, x+segL, height/2);
    x += segL;
  }
}

function rectangleOnLine(){
  //draw a single *rounded* rectangle on the line
  rectMode(CORNERS);
  strokeWeight(2);
  stroke(0);

  rect(width*0.1,height/2,width*0.5, height*0.25);
}

function moveBall(){


  circle(width*0.7, ballY, 30);
}

function draw() {
  background(220);
  segmentLine();
  rectangleOnLine();
  moveBall();
}
