function basic() {
  //var(hoisted)
  console.log(x); //undf
  var x = 10;
  console.log(x); //10

  //let/const are not hoisted

  console.log(y); // cannot access
  let y = 20;
}

function varScope() {
  if (true) {
    var test = 10;
  }
  console.log(test);
}

function letConstScope(params) {
    if (true) {
        let test1 = 10;
        const test2 = 10;
      }
      console.log(test1); //not defiend
      console.log(test2); //not defiend
}