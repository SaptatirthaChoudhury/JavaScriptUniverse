class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);              // Call the constructor of the parent class with the provided name
        this.breed = breed;
    }

    speak() {
        super.speak()          // calling parent class speak() method
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak()
