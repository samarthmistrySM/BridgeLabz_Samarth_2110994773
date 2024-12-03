# JavaScript Core Concepts 
## Date 03-12-2024

- `Arrays`
- `Arrays Methods`
- `Arrow Functions`
- `Data Types`
- `Destructuring`
- `Hoisting`
- `Map-WeakMap`
- `Set-WeakSet`

## 1. Arrays
Arrays are used to store multiple values in a single variable. This section includes basic array operations such as creation, access, and iteration.

### Example:
```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: apple
```

## 2. Array Methods
JavaScript arrays come with a variety of built-in methods that allow you to manipulate and transform array data.

### Example:
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

## 3. Arrow Functions
Arrow functions provide a more concise syntax for writing functions. They also behave differently from traditional functions in terms of the this keyword.

### Example:
```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7
```

## 4. Arrow Functions
Arrow functions provide a more concise syntax for writing functions. They also behave differently from traditional functions in terms of the `this` keyword.

### Example:
```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7
```

## 5. Destructuring
Destructuring allows you to extract values from arrays or objects and assign them to variables in a concise way.

### Example (Array Destructuring):
```javascript
let [first, second] = [1, 2];
console.log(first);  // Output: 1
console.log(second); // Output: 2
```

### Example (Object Destructuring):
```javascript
let person = { name: 'Alice', age: 30 };
let { name, age } = person;
console.log(name); // Output: Alice
```

## 6. Hoisting
Hoisting refers to JavaScript's behavior of moving declarations to the top of their containing scope during compilation. This affects variables and function declarations.

### Example (varScope):
```javascript
function varScope() {
  if (true) {
    var test = 10;
  }
  console.log(test);
}
```

### Example (letConstScope):
```javascript
function letConstScope(params) {
    if (true) {
        let test1 = 10;
        const test2 = 10;
      }
      console.log(test1); //not defiend
      console.log(test2); //not defiend
}
```

## 7. Map and WeakMap
`Map` is an object that holds key-value pairs, and `WeakMap` is similar but with weak references to the keys (the keys are garbage-collected when no longer referenced).

### Example(Map):
```javascript
let map = new Map();
map.set('name', 'Alice');
console.log(map.get('name')); // Output: Alice
```

### Example(WeakMap):
```javascript
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // Output: value
```

## 8. Set and SetMap
`Set` is a collection of unique values, while `WeakSet` is similar but stores objects weakly, allowing them to be garbage collected when no longer in use.

### Example(Map):
```javascript
let set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }
```

### Example(WeakMap):
```javascript
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
```

