const sum = (a, b) => {
  return a + b;
};

const nums = [1, 2, 3, 4, 5];
//map method using arrow
const doubled = nums.map((num) => {
  return num * 2;
});

console.log(doubled);

//Object
const person = {
  name: "Samarth",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
