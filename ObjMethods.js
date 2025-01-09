const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = {};

const assigned = Object.assign(obj3, obj1, obj2);
console.log(assigned);


const proto = { greet() { return 'Hello'; } };
const obj4 = Object.create(proto);
console.log(obj4.greet());

const entries = Object.entries(obj1);
console.log(entries);

const keys = Object.keys(obj1);
console.log(keys);

const values = Object.values(obj1);
console.log(values);

const entriess = Object.fromEntries(entries)

console.log(entriess);