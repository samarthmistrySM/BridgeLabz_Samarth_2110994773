const { log } = require("console");

function factorial() {
  const n = 100;
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
    result *= BigInt(i);
  }

  log(result);
}

function findPeak() {
  const arr = [1, 2, 4, 5, 7, 8, 3];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      log(arr[i]);
    }
  }
}

function findKthSmallest() {
  const arr = [12, 3, 5, 7, 19];
  const k = 3;
  arr.sort((a, b) => a - b);

  log(arr[k - 1]);
}

function subArrSum() {
  const arr = [15, 2, 4, 8, 9, 5, 10, 23];
  const sum = 23;
  const resultIdx = { i: 0, j: 0 };
  let innerSum = 0;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    innerSum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      innerSum += arr[j];
      if (innerSum === sum) {
        resultIdx.i = i + 1;
        resultIdx.j = j + 1;
        flag = true;
        break;
      }
      if (innerSum > sum) {
        break;
      }
    }
    if (!flag) {
      resultIdx.i = -1;
      resultIdx.j = -1;
    }
  }
  log(resultIdx);
}

function findSubset() {
  const arr1 = [11, 1, 13, 21, 3, 7];
  const arr2 = [11, 3, 7, 1];
  let flag = false;
  arr1.forEach((ele) => {
    if (!arr2.includes(ele)) {
      flag = true;
    }
  });
  if (!flag) {
    log("no");
  } else {
    log("yes");
  }
}

function findUnion() {
  const result = [];

  const arr1 = [1, 1, 2, 2, 2, 4];
  const arr2 = [2, 2, 4, 4];

  arr1.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  arr2.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  log(result);
}

function findIntersection() {
  const arr1 = [1, 1, 2, 2, 2, 4];
  const arr2 = [2, 2, 4, 4];

  const result = [];
  arr1.forEach((ele) => {
    if (!result.includes(ele) && arr2.includes(ele)) {
      result.push(ele);
    }
  });

  log(result);
}
