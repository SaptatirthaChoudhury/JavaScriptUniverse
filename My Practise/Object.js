const human = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    isSignedIn: true,
    id: 21,
    interestedIn: ["Cricket", "Soccer"]
}

const person = Object.create(human)
person.name = 'Alice'

console.log(person);
console.log(human);

