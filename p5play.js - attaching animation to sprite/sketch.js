// Adding an animation loaded from spritesheet
// to a p5.play Sprite

let marioAnim;
let mySprite;

function setup() {
  createCanvas(windowWidth, windowHeight);
  marioAnim = loadAnimation("assets/sheet.jpg", {frameSize: [40,37], frames: 18});
  marioAnim.frameDelay = 20;  //slow down animation speed

  mySprite = new Sprite(200, 100, 40);
  mySprite.changeAni(marioAnim);
}
  
function draw() {
  clear();
  // animation(marioAnim, 100,100);
}
