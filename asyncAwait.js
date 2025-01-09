const myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 3000);
});


async function Test() {
    const result = await myProm;
    console.log(result);
}
Test()