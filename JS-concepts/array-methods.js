function basicArrayMethods() {
  let sortedArray = numbers.sort((a, b) => a - b);
  let sortInDecending = numbers.sort((a, b) => b - a);

  let arrayToString = numbers.toString();

  let arrayToString2 = numbers.join(",");

  const fruits = ["banana", "apple", "Orange", "Mango"];

  fruits.pop(); //last one gets poped returns the value of last index

  fruits.push("kiwi"); //pushed to last position

  fruits.shift(); //first one gets out of the array and returns the value of first index

  console.log(fruits.unshift("lemon")); //add new element and returns the new length of the array

  // console.log(fruits); //debug

  fruits[0] = "KIWI"; //changes the elem
  fruits[length] = "Melon"; //easy way to append elem

  delete fruits[0]; //deletes

  let fruits2 = ["Lemon", "Melon"];
  let colors = ["green", "red"];
  let sweets = ["chocolates", "peda"];

  const merged = fruits2.concat(colors);
  const merged2Array = fruits2.concat(colors, sweets);
  // console.log(merged); //debug

  fruits2.concat("Kiwi");

  const fruits0 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits0.slice(1); //from oranage

  const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus2 = fruits3.slice(1, 3); //from orange up to apple but not including apple
}

function forEachMethodArr() {
  const cars = ["BMW", "AUDI", "VOLVO"];

  cars.forEach((car, index, array) => {
    console.log(`${car} - ${index}`);
  });
}

function mapArr() {
  const nums = [1, 2, 3, 4, 5];

  function double(number) {
    return number * 2;
  }

  const doubled = nums.map(double);

  console.log(doubled);
}

function filterArr() {
  const nums = [1, 2, 3, 4, 5, 6];

  const filterd = nums.filter((nums) => {
    return nums % 2 == 0;
  });

  console.log(filterd);
}

function reduceArr(initailVal) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sum = nums.reduce(
    (total, currNum) => {
      return total + currNum;
    },
    initailVal ? initailVal : 0
  );

  console.log(sum);
}
