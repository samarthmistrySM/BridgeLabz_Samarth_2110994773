function addNum(a) {
    return function(b) {
        return a + b;
    }
}

const add3 = addNum(3); 
console.log(add3(2));
console.log(add3(8)); 