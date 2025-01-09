async function* myGen(i){
    yield i,
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i + 10,
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i + 20
}


async function process() {
    for await (const num of myGen(10)) {
        console.log(num);
    }
}

process()