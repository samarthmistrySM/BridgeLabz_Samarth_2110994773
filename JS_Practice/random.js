function dics() {
  const diceRoll1 = Math.floor(Math.random() * 6) + 1;
const diceRoll2 = Math.floor(Math.random() * 6) + 1;
const sumOfDice = diceRoll1 + diceRoll2;
console.log(`Dice Roll 1: ${diceRoll1}, Dice Roll 2: ${diceRoll2}`);
console.log(`Sum of Dice Rolls: ${sumOfDice}`);

}

function sumAndAvg() {
  let sum = 0;
let numbers = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 90) + 10; 
  numbers.push(randomNumber);
  sum += randomNumber;
}
const average = sum / numbers.length;
console.log(`Numbers: ${numbers}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average.toFixed(2)}`);
}

function measurementConversion() {
  const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft`);
console.log(`In Meters: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

const areaInFeet = lengthFeet * widthFeet; 
const totalAreaInFeet = areaInFeet * 25; 
const areaInAcres = totalAreaInFeet / 43560; 
console.log(`Area of 25 plots in acres: ${areaInAcres.toFixed(2)} acres`);
}
