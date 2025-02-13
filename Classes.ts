//class
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): void {
    console.log(`Person: ${this.name} ${this.age}`);
  }
}

//inheritance
class User extends Person {
  private password: string;
  role: string;

  constructor(name: string, age: number, password: string, role: string) {
    super(name, age);
    this.password = password;
    this.role = role;
  }

  describe(): void {
    console.log(`User: ${this.name} ${this.role}`);
  }

  getPassword(): string {
    return this.password;
  }
}

let samarth = new User("Samarth", 22, "1234567", "Admin");
samarth.describe();
console.log("password: ", samarth.getPassword());

//abstract class

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
console.log("Area:", circle.getArea());
