function set() {
  const set = new Set();

  set.add(1);
  set.add(2);
  set.add(3);
  set.add(2);

  console.log(set.has(2));
  set.delete(1);
  console.log(set.has(1));
  console.log(set.size);
}

function weakSet() {
  const weakSet = new WeakSet();

  let obj1 = { id: 1 };
  let obj2 = { id: 2 };

  weakSet.add(obj1);
  weakSet.add(obj2);

  console.log(weakSet.has(obj1));

  obj1 = null;

  console.log(weakSet.has(obj1));
}

