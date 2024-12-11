const { log } = require("console");

function minMaxSumSort() {
  const arr = [1, 2, 3, 4, 5, 6];

  let max = -1000;
  let min = 100000;
  let sum = 0;

  arr.sort();
  arr.forEach((element) => {
    // max = Math.max(max,element)
    // max = Math.max(min,element)
    if (max < element) {
      max = element;
    }
    if (min > element) {
      min = element;
    }

    sum += element;
  });
}

function cyclicallyic() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const last = arr.pop();
  arr.unshift(last);
  log(arr);
}

function duplicate() {
  const arr = [1, 2, 3, 4, 5, 4, 2, 1];
  const duplicates = [];
  arr.sort();

  arr.forEach((element, index) => {
    if (element === arr[index + 1] && !duplicates.includes(element)) {
      duplicates.push(element);
    }
  });
  log(duplicates);
}

function findOcc() {
  const target = 2;
  const arr = [1, 2, 3, 4, 5, 4, 2, 1, 2, 2, 1];
  const myMap = new Map();

  arr.forEach((element) => {
    if (!myMap.has(element)) {
      myMap.set(element, []);
    }
    myMap.get(element).push(element);
  });

  log(`the occ of ${target} in arr = ${myMap.get(target).length}`);
}

function moveNegativeAndPositive() {
  const newArr = [-1, -500, -300, 0, 12, 456, 2345];

  //log(newArr.reverse()) //reverse

  const zeroIdx = newArr.indexOf(0);

  log(newArr.slice(0, zeroIdx));
  log(newArr.slice(zeroIdx + 1, newArr.length));
}

function findRowOfOns() {
  const arr2D = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  let maxOnes = {
    row:0,
    count:0
  }

  arr2D.forEach((row,index)=>{
    let ones = 0;
    row.forEach((elem)=>{
      if(elem === 1){
        ones++;
      }
    })
    if(maxOnes.count < ones){
      maxOnes.count = ones;
      maxOnes.row = index;
    }
  })

  console.log(maxOnes);
}

function majorityElement() {
  const arr = [3,3,4,2,4,4,2,4,4];

  let major = null;
  let majority = 0;
  const myMap = new Map();

  arr.forEach((element) => {
    if (!myMap.has(element)) {
      myMap.set(element, []);
    }
    myMap.get(element).push(element);
  });

  myMap.forEach((val)=>{
    if(majority<val.length){
      majority = val.length;
      major = val[0];
    }
  })

  if(majority>arr.length/2){
    console.log(`${major} with count ${majority}`)
  }else{
    console.log(null)
  }
}

function waveArr() {
  let arr = [10,20,1,2,3,6,4,7];
  arr.sort((a,b)=>a-b)

  for(let i=0;i<arr.length-1;i+=2){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
  log(arr)
}
