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
// O(n) -- Linear Time
// Complexity = Fair
const boxes = new Array(30).fill('box');
const compressAllBoxes = (boxes) => {
  let t0 = performance.now();
  boxes.forEach((box) => console.log('Box Compressed!'));
  let t1 = performance.now();
  console.log('It took ' + (t1 - t0) + 'milliseconds to compress all boxes!');
};

console.log(' ');
console.log('Machine is compressing boxes!');
compressAllBoxes(boxes);
