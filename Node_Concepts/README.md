# Node Concepts

## Main Topics

### NodeJS
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.

### NPM
NPM (Node Package Manager) is the default package manager for Node.js. It helps in managing dependencies for your project.

### OOP
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak();
```

### Event Loop
The event loop is what allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
```

### Event Handlers
Event handlers are functions that are called when an event is triggered.

```javascript
const button = document.addEventListner(()=>{
    console.log("Button Clicked!");
})
```

### Type Conversions
Type conversions in JavaScript can be implicit or explicit. Implicit conversions are done automatically by JavaScript, while explicit conversions are done using functions like `Number()`, `String()`, etc.

```javascript
// Implicit Conversion
let x = '5' + 2; // '52'
let y = '5' * 2; // 10

// Explicit Conversion
let a = Number('5');
let b = String(5);
let c = Boolean(0); 

console.log(x); 
console.log(y); 
console.log(a); 
console.log(b); 
console.log(c); 
```

### "use strict"
`"use strict"` is a directive that helps catch common coding errors and "unsafe" actions such as defining global variables.
```javascript
"use strict";

function myFunction() {
    let x = 3.14; // This will not cause an error
    y = 3.14; // This will cause an error because y is not declared
}

myFunction();
```

### Comparisons
JavaScript provides both strict (`===`) and loose (`==`) equality comparisons.
An equality comparisons can only check the value and hte strict comparison can check the value and the type of the varibale.

```javascript
let a = 5;
let b = '5';

console.log(a == b); // true

console.log(a === b); // false

console.log(a != b); // false

console.log(a !== b); // true
```

### Interaction: alert, prompt, confirm
- `alert` displays a message.
- `prompt` asks the user for input.
- `confirm` asks the user for confirmation.

```javascript
alert('This is an alert message!');

let userInput = prompt('Please enter your name:');
console.log(`User's name is ${userInput}`);

let userConfirmation = confirm('Do you want to proceed?');
if (userConfirmation) {
    console.log('User chose to proceed.');
} else {
    console.log('User chose to cancel.');
}
```

### Logical & Nullish Coalescing Operator
- Logical operators (`&&`, `||`, `!`) are used to perform logical operations.
- The nullish coalescing operator (`??`) returns the right-hand side operand when the left-hand side is `null` or `undefined`.

```javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

let user;
let defaultUser = 'USER';

console.log(user ?? defaultUser); // 'USER'

user = 'Samarth';
console.log(user ?? defaultUser); // 'Samarth'
```

### Polyfills and Transpilers
- Polyfills are code that adds missing functionalities in older browsers.
- Transpilers convert modern JavaScript code into a version that can run in older environments.

### Recursion and Stack
Recursion is a technique where a function calls itself. The call stack is used to manage function calls.

#### Recursion
```javascript
function fibo(n){
    if(n<1){
        return n;
    }
    return fibo(n-1) + fibo(n-2); 
}
```

#### Stack
```javascript

function stackExample() {
    let stack = [];

    stack.push(1);
    stack.push(2);
    stack.push(3);

    console.log(stack); // [1, 2, 3]

    let last = stack.pop();
    console.log(last); // 3
    console.log(stack); // [1, 2]

    let first = stack[stack.length - 1];
    console.log(first); // 2
}
```

### Rest Parameters and Spread Syntax
- Rest parameters (`...args`) allow a function to accept an indefinite number of arguments.
- Spread syntax (`...`) allows an iterable to expand in places where multiple arguments or elements are expected.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

### Variable Scope and Closure
- Variable scope determines the accessibility of variables.
- A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

##### Closure
```javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

## Sub-Topics

### IIFE
Immediately Invoked Function Expressions (IIFE) are functions that are executed immediately after their definition.

```javascript
(function(){
    console.log("Hi")
})()
```

### NFE
Named Function Expressions (NFE) are function expressions that have a name.

```javascript
// Named Function Expression
const Hello = function greet(name) {
    return `Hello, ${name}`;
};

console.log(Hello("Samarth")); 
```

### The "new Function" Syntax
The `new Function` syntax allows you to create a new function from a string of code.

```javascript
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5
```

### Scheduling
Scheduling functions like `setTimeout` and `setInterval` allow you to execute code after a delay or repeatedly at intervals.
```javascript
// setTimeout example
setTimeout(() => {
    console.log('This message is displayed after 2 seconds');
}, 2000);

// setInterval example
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);
```


### Decorators and Forwarding
Decorators are functions that modify the behavior of other functions. Forwarding is passing a function call to another function.


### call/apply
- `call` and `apply` are methods that allow you to call a function with a specified `this` value and arguments.
- `call` takes arguments separately.
- `apply` takes arguments as an array.

### Function Binding
Function binding (`bind`) creates a new function that, when called, has its `this` keyword set to the provided value.
