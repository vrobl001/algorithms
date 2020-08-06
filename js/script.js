const { performance } = require('perf_hooks');

// O(n) --> Linear Time
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
