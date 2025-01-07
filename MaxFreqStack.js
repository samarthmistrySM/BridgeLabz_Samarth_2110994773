const freq = {}; 
const map = {}; 
let maxFreq = 0;

function push(val) {
  const frequ = (freq[val] || 0) + 1;
  freq[val] = frequ;

  maxFreq = Math.max(maxFreq, frequ);

  if (!map[frequ]) {
    map[frequ] = [];
  }
  map[frequ].push(val);
}

function pop() {
  if (maxFreq === 0) return null; 

  const val = map[maxFreq].pop();

  if (map[maxFreq].length === 0) {
    delete map[maxFreq];
    maxFreq--;
  }

  freq[val]--;
  if (freq[val] === 0) {
    delete freq[val]; 
  }

  return val;
}

push(5);
push(7);
push(5);
push(7);
push(4);
push(5);

// console.log(pop()); 
// console.log(pop()); 
// console.log(pop()); 
// console.log(pop()); 
console.log(map)
console.log(freq);

