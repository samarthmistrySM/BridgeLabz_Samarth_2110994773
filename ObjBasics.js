function basicUsage() {
  let person = {
    name: "Sam",
    age: 30,
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };

  let obj1 = { name: "Sam" };
  let obj2 = obj1;
  obj2.name = "Samarth";
  console.log(obj1.name);

  let obj3 = { ...obj1 };
  obj3.name = "Samarth";
  console.log(obj1.name);
  console.log(obj3.name);

  let obj = { name: "Sam" };

  obj = null;

  person.greet();

  console.log(person?.name);

  console.log(person?.address?.city);
}

function classObj() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log("Hello, " + this.name);
    }
  }

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }

    greet() {
      console.log("Hello, " + this.name + " from Student" + this.grade + "th grade");
    }
  }

  const Sam = new Person("Sam", 30);

  const SamStudent = new Student("Sam", 30, 12);
  SamStudent.greet();
}

function getterSetter() {
  let newPerson = {
    firstName: "Sam",
    lastName: "Mistry",

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };

  person.fullName = "Samarth SM";
  console.log(newPerson.firstName);
  console.log(newPerson.fullName);
}

function nativePrototypes() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    let arr = [1,2,3,4]

    console.log(arr.last());
}


function ExtendingBuiltInClass() {
    class MyArray extends Array {
        sum() {
          return this.reduce((acc, val) => acc + val, 0);
        }
      }
      
      let nums = new MyArray(1, 2, 3);
      console.log(nums.sum()); 
      
}