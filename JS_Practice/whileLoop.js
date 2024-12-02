var prompt = require("prompt-sync")();

function power() {
  let n = parseInt(prompt("Enter the value of n (integer):"));

  console.log("Power   Value");

  let i = 0;
  while (i <= n) {
    let value = Math.pow(2, i);
    if (value > 256) break;

    console.log(`${i}\t${value}`);
    i++;
  }
}

function magicNumber() {
  console.log("think number between 1 t0 100");

  let low = 1;
  let high = 100;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    let res = prompt(`Is your number greater than ${mid}? (yes/no):`);

    if (res === "yes") {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  console.log(`The magic number is ${low}!`);
}

function gamble() {
  let money = 100;
  let goal = 200;
  let betsMade = 1;
  let wins = 1;

  while (money>0 && money<goal) {
    betsMade++;

    let win = Math.random() <0.5;

    if(win){
      money += 1;
      wins++;
    }else{
      money -= 1;
    }
  }

  if (money >= goal) {
    console.log(`Congratulations! You reached your goal of Rs ${goal}.`);
} else {
    console.log("You went broke! Better luck next time.");
}

console.log(`Total bets made: ${betsMade}`);
console.log(`Total wins: ${wins}`);
}

