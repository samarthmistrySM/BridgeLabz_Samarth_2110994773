function promise(params) {
  const myProm = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 3000);
  });

  const myProm2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 6000);
  });

  myProm.then((res) => {
    console.log(res);

    myProm2.then((res) => {
      console.log(res);
    });
  });
}

function promiseChaining() {
  const Task = (message, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  };

  Task("Task1 Completed", 2000)
    .then(() => Task("Task2 Completed", 3000))
    .then(() => Task("Task3 Completed", 4000));
}

async function promiseAPI() {
  const fetchAPI = (url) => {
    return fetch(url).then((res) => {
      if (!res.ok) {
        return Promise.reject("Failed TO fetch Data", res.status);
      }
      return res.json();
    });
  };

  const data = await fetchAPI("https://pinogram-api-five.vercel.app/api/posts");

  console.log(data);
}

function promisify() {
  function sumPromise(a, b) {
    return new Promise((resolve) => {
      const result = a + b;

      resolve(result);
    });
  }

  sumPromise(3, 2).then((result) => {
    console.log(result);
  });

  console.log(sumPromise(3, 2));
}

promisify();
