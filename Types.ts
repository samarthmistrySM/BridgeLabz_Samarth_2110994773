//number
let age: number = 25;
let price: number = 99.99;

//String
let username: string = "Samarth";
let greeting: string = `Hello, ${username}`;

//Booleam
let isTrue: boolean = true;

//any
let data: any = "Hello";
data = 42;

//void
function sayHello(): void {
  console.log("Hello!");
}

//never: infinite loop or error
function throwError(): never {
  throw new Error();
}

//array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Sam", "Tom", "Jerry"];

//object
let person: { name: string; age: number } = { name: "Sam", age: 21 };
let person2: { name: string; age?: number } = { name: "Sam", };

//union
let result: string | number;
result = "Hello";
result = 42;

//interection
let user: { name: string } & { age: number };
user = { name: "Sam", age: 21 };

//type alias
type Person1 = { name: string, age: number };
let person3: Person1 = { name: "Sam", age: 21 };

//Literal Types

let direction : "left" | "right" | "up" | "down";
direction = "left";
// direction = "there"; //error

//function
function sum(a: number, b: number): number {
  return a + b;
}

//function arrow
const multiply = (a: number, b: number): number => a * b;