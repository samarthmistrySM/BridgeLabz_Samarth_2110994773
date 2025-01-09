function allPromises() {
  const users = [
    { id: 1, name: "Sam" },
    { id: 2, name: "SamSM" },
    { id: 3, name: "SamMistrySM" },
    { id: 4, name: "SamarthMistrySM" },
  ];

  const fetchUsers = async (value) =>
    new Promise((resolve) => setTimeout(resolve, 3000, value));

  const loadUserById = async (userId) => {
    console.log("Doing a roundtrip to the DB");
    return fetchUsers(users.find((user) => user.id === userId));
  };

  async function fetchUser() {
    const users = await Promise.all([
      loadUserById(1),
      loadUserById(2),
      loadUserById(3),
      loadUserById(4),
    ]);

    console.log(users);
  }

  fetchUser();
}

function allSettledPromisies() {
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.reject("error");

  Promise.allSettled([promise1, promise2]).then((results) => {
    console.log(results); //error
  });
}

function anyPromises() {
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.reject("error");

  Promise.any([promise1, promise2]).then((results) => {
    console.log(results); //1
  });
}

function racePromises() {
  const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "one"));
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "two"));

  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);  //which have less time to resolve
  });
}

