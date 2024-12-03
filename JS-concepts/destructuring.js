const arr = [1, 2, 3, 4, 5];

const [first, second, third] = arr;
console.log(first, second, third);

const [, , thirdValue] = arr;
console.log(thirdValue); //destucturing the arr to 3rd posi

const [a = 10, b = 20, c = 30] = [1, 2];
console.log(a, b, c); //default value

const person = {
  name: "Alice",
  age: 30,
  address: { state: "punjab", city: "rajpura" },
}; //creating neated obj

const {
  name,
  age,
  address: { state,city},
} = person; 
console.log(name, age); //destructuring obj and nested obj

const { name: userName, age: userAge } = person; //renaming variables
console.log(userName, userAge);

const { name: username = "Guest", city: citi = 'jaipur' } = person; //default values
console.log(username, city);
