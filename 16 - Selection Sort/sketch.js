// Selection Sort Demo
// Mr. Scott
// Nov 3, 2023
// An implementation of the selection sort algorithm

let values = [];
const NUM_VALUES = 20;

function setup() {
  randomSeed(10); //for debugging
  noCanvas();   populateArray();  print(values);
  selectionSort();  print(values);
}

function selectionSort(){
  for(let index = 0; index < values.length - 1; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for(let searchIndex = index+1; searchIndex < values.length; searchIndex++){
      
    }

  }

}


function populateArray(){
  //fill the array with NUM_VALUES number of items
  for(let i = 0; i < NUM_VALUES; i++){
    values.push(floor(random(1000)));
  }
}


