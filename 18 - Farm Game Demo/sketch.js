// Farm Game Demo
// Mr. Scott
// Nov 15th
// Creating a tile-based gameboard w/ block pusher mechanics

let tiles = []; //0→ blank   1→chicken  2→cow
let level =[
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 0, 1 ,1, 0],
  [0, 1, 0, 0 ,0],
  [0, 0, 1, 0, 0]
];
const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX = 3, playerY = 4;

function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX]=2; //place the cow
}

function draw() {
  renderBoard();
}

function renderBoard(){
  //interpret data in 2D array, place images on canvas
  for(let x = 0; x < COLUMNS; x++){
    for(let y = 0; y < ROWS; y++){
      let pos = level[y][x];
      let currentImage = tiles[pos];
      image(currentImage,x*TILE_SIZE,y*TILE_SIZE);
    }
  }
}
