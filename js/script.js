const { performance } = require('perf_hooks');

// Finding Nemo!
// O(n) --> Linear Time
// Complexity = Fair
const nemo = ['Nemo'];
const indianOcean = ['Dory', 'Bruce', 'Marlin', 'Gill', 'Bloat', 'Nigel', 'Squirt', 'Darla', 'Nemo'];
const large = new Array(20).fill('Nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Nemo') {
      console.log('Found Nemo!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + 'milliseconds!');
}

console.log(' ');
console.log('Indian Ocean: ');
findNemo(indianOcean);
console.log(' ');
console.log('Nemo: ');
findNemo(nemo);
console.log(' ');
console.log('Large: ');
findNemo(large);

// Compress Boxes
// O(n) --> Linear Time
// Complexity = Fair
const boxes = new Array(30).fill('box');
function compressAllBoxes(boxes) {
  let t0 = performance.now();
  boxes.forEach(function (item) {
    console.log(item);
  });
  let t1 = performance.now();
  console.log('It took ' + (t1 - t0) + 'milliseconds to compress all boxes!');
}

console.log(' ');
console.log('Machine is compressing boxes!');
compressAllBoxes(boxes);

// Compress only one box
// O(1) --> Constant Time
// Complexity = Excellent
function compressFirstBox(boxes) {
  let t0 = performance.now();
  console.log(boxes[0]);
  let t1 = performance.now();
  console.log('It took ' + (t1 - t0) + 'milliseconds to compress one box!');
}

console.log(' ');
console.log('Machine is compressing 1 box!');
compressFirstBox(boxes);

// Challenge 1
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// Big O(1 + 1 + 1 + n + n + n + n)
// Big O (3 + 4n)
// Big O(n)

// Challenge 2
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O(1 + 1 + 1 + 1 + n + n + n + n + n + n + n)
// Big O(4 + 7n)
// Big O(n)
