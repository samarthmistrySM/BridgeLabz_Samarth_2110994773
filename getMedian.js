let nums = [];

function addNum(num) {
  nums.push(num);
  nums.sort((a, b) => a - b);
}

function getMedian() {
  const n = nums.length;
  if (n % 2 === 0) {
    return (nums[n / 2 - 1] + nums[n / 2]) / 2;
  } else {
    return nums[Math.floor(n / 2)];
  }
}

addNum(6);
console.log("Median:", getMedian());
addNum(10);
console.log("Median:", getMedian());
addNum(2);
console.log("Median:", getMedian());
addNum(8);
console.log("Median:", getMedian());
addNum(4);
console.log("Median:", getMedian());
addNum(12);
