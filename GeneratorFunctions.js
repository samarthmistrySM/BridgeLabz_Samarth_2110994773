function* myGen(i){
    yield i,
    yield i + 10,
    yield i + 20
}


const gen = myGen(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 