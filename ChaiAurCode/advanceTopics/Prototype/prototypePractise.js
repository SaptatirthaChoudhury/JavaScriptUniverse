function Creature(ls) {
    this.lifeSpan = ls
}

Creature.prototype.breath = function () {
    console.log("breathing..");
}


let creature1 = new Creature(100)
console.log(creature1.__proto__);

function Person(first, last, a) {
    this.firstName = first
    this.lastName = last
    this.age = a
}

Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

Person.prototype.breath = Object.create(Creature.prototype)


let person1 = new Person("Babai", "choudhury", 27)
let person2 = new Person("Saptatirtha", "Choudhury", 28)
 console.log(person1.__proto__);
// console.log(person2.breath());