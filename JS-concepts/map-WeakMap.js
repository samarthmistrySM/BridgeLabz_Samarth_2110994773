function map() {
  const map = new Map();
  map.set("name", "Sam");
  map.set("one", 1);
  map.set("bool", true);

  console.log(map.get("name"));
  console.log(map.has("name"));

  map.delete("bool");
  console.log(map.has("bool"));

  for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
}

function weakMap() {
  const weakMap = new WeakMap();

  let obj1 = { name: "Object 1" };
  let obj2 = { name: "Object 2" };

  weakMap.set(obj1, "This is object 1");
  weakMap.set(obj2, "This is object 2");

  console.log(weakMap.get(obj1));

  obj1 = null;

  console.log(weakMap.get(obj1));
}
