function addTen(cb) {
    return function (num) {
        var result = num + 10;
        cb(result);
    }
}


function print(s) {
    console.log(s);
}

var g = addTen(print);
g(10); 