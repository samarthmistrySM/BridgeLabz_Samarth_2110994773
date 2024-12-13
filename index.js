const { log } = require("console");
const fs = require("fs");

function numbersFromOneToTen() {
  let numbers = "";
  for (let i = 1; i <= 10; i++) {
    numbers += i + " ";
  }
  log(numbers.trim());
}

function oddNumsLessThan100() {
  let nums = "";

  for (let i = 1; i <= 100; i += 2) {
    nums += i + " ";
  }
  log(nums.trim());
}

function multipleTableOfN(n) {
  let nums = "";
  for (let i = 1; i <= 10; i++) {
    nums += `${i} x ${n} = ${i * n}\n`;
  }

  log(nums.trim());
}

function multipleTableFrom1to10() {
  for (let i = 1; i <= 10; i++) {
    log("Table of", i);
    log();
    multipleTableOfN(i);
    log();
  }
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  log(result);
}

function sumOfEven() {
  let sum = 0;
  for (let i = 10; i <= 30; i += 2) {
    sum += i;
  }
  log(sum);
}

function convertFT(deg, type) {
  let result;
  if (type === "C_TO_F") {
    result = (deg * 9) / 5 + 32;
    console.log(`${deg}C = ${result}F`);
    return;
  } else {
    result = ((deg - 32) * 5) / 9;
    console.log(`${deg}F = ${result}C`);
    result;
  }
}

function sumOfArrNums() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  log(sum);
}

function avgOfArrNum() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }

  log(sum / arr.length);
}

function positiveNums(arr) {
  const result = [];

  for (let ele of arr) {
    if (ele >= 0) {
      result.push(ele);
    }
  }
  log(result);
}

function maxNumOfArr() {
  const arr = [1, 2, 3, 4, 5];

  log(Math.max(...arr));
}

function fiboWithoutRec(n) {
  let n1 = 0;
  let n2 = 1;
  let next;
  for (let i = 1; i <= n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
}

function fiboUsingRec(n) {
  if (n <= 1) {
    return n;
  }

  return fiboUsingRec(n - 1) + fiboUsingRec(n - 2);
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function calculateSumOfPosi() {
  let sum = 0;
  const arr = [-1, -2, 0, 1, 2, 3];
  for (let ele of arr) {
    if (ele > 0) {
      sum += ele;
    }
  }
  log(sum);
}

function first100Prime() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      result += i + " ";
    }
  }
  log(result);
}

function greaterThanNPrime(p, n) {
  const result = [];
  let count = 0;

  while (count < p) {
    if (isPrime(n)) {
      result.push(n);
      count++;
    }
    n++;
  }
  log(result);
  return result;
}

function rotateArrLeft() {
  const arr = [1, 2, 3, 4, 5];
  const first = arr.shift();
  arr.push(first);
  log(arr);
}

function rorateArrRight() {
  const arr = [1, 2, 3, 4, 5];
  const last = arr.pop();
  arr.unshift(last);
  log(arr);
}

function reverseArr() {
  const arr = [1, 2, 3, 4, 5];
  const result = [];

  while (arr.length != 0) {
    const last = arr.pop();
    result.push(last);
  }

  log(result);
}

function reverseString() {
  const str = "What a problem!";
  const result = str.split("").reverse().join("");

  log(result);
}

function mergeArr() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const result = arr1.concat(arr2);

  log(result);
}

function uniqueNumbers(arr1, arr2) {
  const result = [];
  for (let ele of arr1) {
    if (!arr2.includes(ele)) {
      result.push(ele);
    }
  }

  for (let ele of arr2) {
    if (!arr1.includes(ele)) {
      result.push(ele);
    }
  }
  log(result);
  return result;
}

function firstArrElem(arr1, arr2) {
  const result = [];
  for (let elem of arr1) {
    if (!arr2.includes(elem)) {
      result.push(elem);
    }
  }
  log(result);
  return result;
}

function distinctElements(arr) {
  const result = [];
  for (let ele of arr) {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  }
  log(result);
  return result;
}

function primeSumInArr() {
  let count = 0;
  let i = 1;
  const result = [];
  let sum = 0;
  while (count <= 100) {
    if (isPrime(i)) {
      sum += i;
      result.push(sum);
      count++;
    }
    i++;
  }
  log(result);
  return result;
}

function printPrimeDistance() {
  let count = 0;
  let i = 1;
  let prevPrime = 0;
  let result = "";
  while (count <= 100) {
    if (isPrime(i)) {
      if (count !== 0) {
        result += `${i - prevPrime} `;
      }
      prevPrime = i;
      count++;
    }
    i++;
  }
  log(result);
}

function sumOfStringNums() {
  const num1 = "13476543";
  const num2 = "1347654324";

  log(parseInt(num1) + parseInt(num2));
}

function countWordsInText(text) {
  const words = text.trim().split(" ");
  log(words.length);
}

function capitalize() {
  let string = "what a problem!";
  let result = "";

  for (let word of string.split(" ")) {
    result += word[0].toUpperCase() + word.substring(1) + " ";
  }
  log(result);
}

function sumOfStringNums() {
  const numString = "1,2,3,4,5,6";
  let sum = 0;
  for (let num of numString.split(",")) {
    sum += parseInt(num);
  }
  log(sum);
}

function wordsInText() {
  const text = "this is text";
  const result = text.trim().split(" ");
  log(result);
  return result;
}

function stringToChars() {
  const text = "this is text";
  const result = text.split("");
  log(result);
}

function stringToAsciiArray() {
  const text = "this is text";
  const result = [];
  for (let i = 0; i < text.length; i++) {
    result.push(text.charCodeAt(i));
  }
  log(result);
  return result;
}

function asciiArrayToString() {
  const text = "this is text";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text.charCodeAt(i) + " ";
  }
  log(result);
  return result;
}

function bubbleSort() {
  const arr = [2, 1, 5, 4, 3, 7, 8];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  log(arr);
  return arr;
}

function lengthOfLine(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  const distance = Math.sqrt(x * x + y * y);
  log("Distance b/w points:", distance);
  return distance;
}

function printColumn(grid, column) {
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    result.push(grid[i][column]);
  }
  log(result);
}

function binaryToNumber() {
  let binaryString = "1010101010";

  let number = parseInt(binaryString, 2);

  log(number);
}

function maxLengthWordInString() {
  let str = "what a problem!";
  let result = "";
  for (let elem of str.split(" ")) {
    if (result.length < elem.length) {
      result = elem;
    }
  }
  log(result);
}

function shuffleArr() {
  const arr = ["sam", "software", "dev", "react", "mern"];
  const result = [];
  while (arr.length != result.length) {
    let random = Math.floor(Math.random() * arr.length);
    if (!result.includes(arr[random])) {
      result.push(arr[random]);
    }
  }

  log(result);
}

function randomNumbers(n) {
  const result = [];
  while (result.length != n) {
    let random = Math.floor(Math.random() * n + 1);
    if (!result.includes(random)) {
      result.push(random);
    }
  }
  log(result.join());
}

function letterFrequency(text) {
  const letters = text.toLowerCase().split("");
  const freq = new Map();
  letters.forEach((letter) => {
    if (freq.has(letter)) {
      freq.set(letter, freq.get(letter) + 1);
    } else {
      freq.set(letter, 1);
    }
  });
  const result = [];
  for (const [key, value] of freq) {
    result.push([key, value]);
  }
  log(result);
  return result;
}

function fiboHighPrecision(n) {
  let n1 = 0;
  let n2 = 1;
  let next;
  for (let i = 1; i <= n; i++) {
    const result = BigInt(n1)
      .toString()
      .substring(0, BigInt(n1).toString().length);
    log();
    console.log(result);
    next = BigInt(n1) + BigInt(n2);
    n1 = BigInt(n2);
    n2 = BigInt(next);
  }
}

function factorialHighPrecision(n) {
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
    result *= BigInt(i);
  }
  result = result.toString().substring(0, result.toString().length);
  log(result);
}

function caesarCypher(str) {
  const dict = [];
  let startChar = "a";
  let endChar = "z";
  let result = "";
  for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt("0"); i++) {
    dict.push(String.fromCharCode(i));
  }
  // log(dict)

  //25 z -> 2
  //24 y -> 1
  //23 x -> 0
  //22 -> 0

  for (let char of str) {
    const idx = (dict.indexOf(char.toLowerCase()) + 3) % 26;
    result += dict[idx];
    // log(idx)
  }
  log(result);
}

function isCircleIntersecting(x1, x2, y1, y2, r1, r2) {
  const distance = lengthOfLine(x1, y1, x2, y2);

  if (distance < r1 + r2) {
    log(true);
    return true;
  }
  log(false);
  return false;
}

function csvTo2dArray() {
  const file = fs.readFile("./sample.csv", "utf8", (error, data) => {
    if (error) {
      throw error;
    }
    const lines = data.split("\n");
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      const words = lines[i].split(";");
      result.push(words);
    }
    log(result);
  });
}

function sumOfJagged() {
  const arr = [1, 2, [3, 4], [5, 6, 7]];
  let sum = 0;
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      for (let num of ele) {
        sum += num;
      }
    } else {
      sum += ele;
    }
  }
  log(sum);
}

function maxOfJagged() {
  const arr = [1, 2, [3, 4], [5, 6, 7]];
  let max = 0;
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      for (let num of ele) {
        max = Math.max(max, num);
      }
    } else {
      max = Math.max(max, ele);
    }
  }
  log(max);
}

function maxOfJagged() {
  const arr = [1, 2, [3, 4], [5, 6, 7]];
  const result = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      const innerArr = [];
      for (let num of ele) {
        innerArr.push(num);
      }
      result.push(innerArr);
    } else {
      result.push(ele);
    }
  }
  log(result);
}

// numbersFromOneToTen()
// oddNumsLessThan100()
// multipleTableOfN(7)
// multipleTableFrom1to10()
// factorial(10)
// sumOfEven()
// convertFT(25,"C_TO_F")
// sumOfArrNums()
// avgOfArrNum()
// positiveNums([-10,-2,0,1,2])
// maxNumOfArr()
// fiboWithoutRec()
// log(fiboUsingRec(10))
// log(isPrime(4))
// first100Prime()
// greaterThanNPrime(10,10)
// rotateArrLeft()
// rorateArrRight()
// reverseArr()
// reverseString()
// mergeArr()
// uniqueNumbers([1, 2, 3, 4], [3, 6, 8, 9, 10])
// firstArrElem([1, 2, 3, 4], [3, 6, 8, 9, 10])
// distinctElements([1, 2, 3, 4,4])
// primeSumInArr()
// printPrimeDistance()
// addTwoPositiveNumbers([1, 2, 3, 4], [3, 6, 8, 9, 10])
// sumOfStringNums()
// countWordsInText("zlknf baoiubdvusayfdswad")
// capitalize()
// sumOfStringNums()
// stringToChars()
// stringToAsciiArray()
// asciiArrayToString()
// bubbleSort()
// lengthOfLine(1,2,3,4)
// printColumn([[1,2,3],[4,5,6],[7,8,9]],2)
// binaryToNumber()
// maxLengthWordInString()

// shuffleArr()
// randomNumbers(10)
// letterFrequency("Samarth is developer now")
// fiboHighPrecision(500)
// factorialHighPrecision(70)
// caesarCypher('hello')
// isCircleIntersecting(1,2,3,4,0.5,0.5)
// csvTo2dArray()
// sumOfJagged()
// maxOfJagged()
