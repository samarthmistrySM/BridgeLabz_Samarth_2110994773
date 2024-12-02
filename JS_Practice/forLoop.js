var prompt = require("prompt-sync")();

function power() {
  let n = parseInt(prompt("Enter the value of n (integer):"));
  console.log(`power\tvalue`);
  for (let i = 0; i < n; i++) {
    let value = Math.pow(2, i);
    console.log(`${i}\t${value}`);
  }
}

function harmonicNum() {
  const n = parseInt(prompt("Enter a number:"));

  console.log(`Powers of 2 less than or equal to 2^${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
  }

  const n1 = parseInt(prompt("Enter a number:"));

  let harmonicNumber = 0;
  for (let i = 1; i <= n1; i++) {
    harmonicNumber += 1 / i;
  }
  console.log(`The ${n1}th harmonic number is: ${harmonicNumber}`);
}

function prime() {
  const num = parseInt(prompt("Enter a number:"));

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }
}

function primeInRange() {
  const start = parseInt(prompt("Enter the starting number of the range:"));
  const end = parseInt(prompt("Enter the ending number of the range:"));

  if (start < 2) {
    console.log(
      "The starting number must be at least 2 to find prime numbers."
    );
    return;
  }

  console.log(`Prime numbers between ${start} and ${end}:`);

  for (let num = start; num <= end; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && num > 1) {
      console.log(num);
    }
  }
}

function factorial() {
  let n = parseInt(prompt("Enter the number you want to find factorial of: "));
  let factNumber = 1;
  for (let i = 1; i <= n; i++) {
    factNumber *= i;
  }
  console.log(`Factorial of ${n} - ${factNumber}`);
}

function primeFactors() {
  let N = parseInt(prompt("Enter a number to find its prime factors:"));
  let factors = [];

  while (N % 2 === 0) {
    factors.push(2);
    N /= 2;
  }

  for (let i = 3; i * i <= N; i += 2) {
    while (N % i === 0) {
      factors.push(i);
      N /= i;
    }
  }

  if (N > 2) {
    factors.push(N);
  }

  console.log("Prime factors:", factors.join(", "));
}

primeFactors();
