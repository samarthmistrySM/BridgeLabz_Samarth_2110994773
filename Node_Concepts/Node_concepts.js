function Oop() {
    class Employee{
        constructor(name, role){
            this.name = name;
            this.role = role;
        }
        details(){
            console.log(`${this.name} works as a ${this.role}`);
        }
    }

    class Developer extends Employee{
        constructor(name, role, language){
            super(name,role);
            this.language = language
        }
        details(){
            console.log(`${this.name} works as a ${this.role} and specialised in ${this.language} language`);
        }
    }

    const emp = new Employee("Samarth","Front End Dev")

    const samarth = new Developer("Samarth","Frontend","Jacascript")
    samarth.details()

}
