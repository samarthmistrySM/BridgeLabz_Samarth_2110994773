var prompt = require('prompt-sync')();

function convertT(deg,type) {
    let result;
    if(type === "C_TO_F"){
        result = (deg * 9/5) + 32;
        console.log(`${deg}C = ${result}F`);
        return;
    }else{
        result = (deg - 32 ) * 5/9;
        console.log(`${deg}F = ${result}C`);
        result;
    }
}

function checkPalindrome(str) {
    let result = (str === str.split("").reverse().join(""));
    console.log(result);
    return result;
}

function palindromicPrime() {
    let num = parseInt(prompt("Enter the Number  "));
    function prime(num) {
        
      
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
        return isPrime;
    }

    if(checkPalindrome(num.toString()) && prime(num)){
        console.log(`${num} is palindromic prime`);
    }else if(!checkPalindrome(num.toString())){
        console.log(`${num} is not palindrome`);
    }else{
        console.log(`${num} is palindrome but not prime`);
    }
}
