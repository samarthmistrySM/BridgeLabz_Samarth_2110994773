class Employee{
    id : string;
    name : string;
    age : number;
    
    constructor(id:string, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    describe() : void{
        console.log(`Employee: ${this.id} ${this.name} ${this.age}`);
    }
}

let sam = new Employee("1", "Samarth", 21);
sam.describe();