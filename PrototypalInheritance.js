const man = {
    name: 'name',
    age:0,
    display: function() {
        console.log(`Name: ${this.name} and Age: ${this.age}`)
    }
}

const sam = Object.create(man);

sam.name = 'samarth'
sam.age = 22

sam.display()

sam.increaseAge = function () {
    this.age += 1;
}

sam.increaseAge()
sam.display()