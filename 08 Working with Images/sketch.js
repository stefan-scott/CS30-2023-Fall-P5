// Working with Images
// Mr. Scott
// October 10, 2023
// Working with images in variables and arrays

// Global Variables
let lionL, lionR; //store Image object in each
let facingLeft = true;
let pinImages = []; //to hold all our pinwheel images
let pinIndex = 0;

function preload(){
  //happens before setup(). Waits for loading to finish
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i=0; i<9; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //frameRate(3);  //GLOBAL ATTRIBUTE
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawPin(){
  //animate our pinwheel images
  
  image(pinImages[pinIndex],width/2,height/2);
  
  if(frameCount % 4 === 0){  //only on even frames
    pinIndex ++;
      if(pinIndex > 8) pinIndex = 0;
  }
  
}

function drawLion(){
  //draw the lion in direction mouse moves
  //update the facing
  if(movedX < 0) facingLeft = true;
  else if (movedX > 0) facingLeft = false;
  
  if(facingLeft){
    image(lionL,mouseX, mouseY, lionL.width*.6, lionL.height*0.6);
  }
  else{
    image(lionR, mouseX, mouseY);
  }
  
}
