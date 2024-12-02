var prompt = require('prompt-sync')();

let numbers = [];

let min = 1000; 
let max = 0;

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNumber);

    if (randomNumber < min) {
        min = randomNumber;
    } else if (randomNumber > max) {
        max = randomNumber;
    }
}

console.log("Random 3-digit values:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max);

const day = parseInt(25);
const month = parseInt(5);



if ((month === 3 && day >= 20) || (month >= 4 && month <= 5) || (month === 6 && day <= 20)) {
    console.log(true);
} else {
    console.log(false);
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const year = parseInt(prompt("Enter a year: "));

if (isLeapYear(year)) {
    console.log(`${year} is a Leap Year.`);
} else {
    console.log(`${year} is not a Leap Year.`);
}

let flip = Math.random() < 0.5 ? "Heads" : "Tails";

console.log(flip);
