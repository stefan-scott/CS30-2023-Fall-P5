// Colors Demo  
// Mr. Scott
// October 25, 2023

let rectWidth = 50; let rectHeight = 10;
let colors = ["#69D2E7", "#A7DBD8", "#E0E4CC",
  "#F38630", "#FA6900"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width * 0.1);   //RGB
  drawHSB(width * 0.4);   //HSB
  drawCustom(width * 0.7);//CUSTOM
}

function drawCustom(x) {
  colorMode(RGB);
  let index = 0;
  for (let y = 0; y < height; y += rectHeight) {
    //Option 1: Cycle through palette
    fill(colors[index%5]); //0, 1, 2, 3, 4

    //Option 2: Random Palette Selection
    fill(colors[Math.floor(random(colors.length))])
    rect(x,y,rectWidth, rectHeight);
    index++; 
  }
}

function drawHSB(x) {
  colorMode(HSB);  //0-360 
  for (let y = 0; y < height; y += rectHeight) {
    fill(y / 3 % 360, 360, 360);
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawRGB(x) {
  colorMode(RGB);  //0-255
  for (let y = 0; y < height; y += rectHeight) {
    fill(random(255), random(255), random(255));
    rect(x, y, rectWidth, rectHeight);
  }
}

