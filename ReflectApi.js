
const person = {
    name: 'Alice',
    age: 30
  };
  

  const nameValue = Reflect.get(person, 'name');
  console.log(nameValue);  
  
  
  Reflect.set(person, 'age', 31);
  console.log(person.age); 
  
  
  const hasName = Reflect.has(person, 'name');
  console.log(hasName); 
  
  
  Reflect.deleteProperty(person, 'age');
  console.log(person.age);


  Reflect.defineProperty(person, 'city', {
    value: 'New York',
  });
  console.log(person.city);  
  
  const keys = Reflect.ownKeys(person);
  console.log(keys);  
  