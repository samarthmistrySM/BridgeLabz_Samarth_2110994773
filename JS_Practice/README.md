# JavaScript Core Concepts 
## Date 02-12-2024
This Branch demonstrates fundamental JavaScript concepts with examples of basic structures and functionality. Below are the key concepts covered:

- `Cases`
- `For Loop`
- `Functions`
- `If-Else`
- `If-ElseIf`
- `Random Numbers`
- `While Loop`

---

## 1. Cases

The `switch` statement is used to perform different actions based on different conditions. It's an alternative to using multiple `if-else` statements when you have multiple possible conditions to check.

### Example:

```javascript
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

## 2. For Loop

The `for loop` is used to repeat a block of code a certain number of times. It is typically used when you know beforehand how many times you want to execute a statement or a block of statements.

### Example:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
```

## 3. Functions

A function is a block of reusable code that performs a specific task. Functions help in organizing and simplifying code.

### Example:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Samarth"));
```

## 4. If-Else

The `if-else` statement is used to execute a block of code based on a condition. If the condition evaluates to `true`, the first block is executed; otherwise, the second block is executed.

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

## 5. If-ElseIf

The `if-else if` statement is used when you have multiple conditions to check. It is a chain of `if-else` statements.

```javascript
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}
```

## 6. Random Numbers

JavaScript allows you to generate random numbers using `Math.random()`. You can also use `Math.floor()` to convert the floating point numbers into integers.

```javascript
let randomNum = Math.floor(Math.random() * 100);
console.log("Random number between 0 and 100: " + randomNum);
```

## 7. While Loop

The `while loop` is used to execute a block of code as long as a specified condition is true. It is often used when the number of iterations is not known beforehand.


```javascript
let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
```