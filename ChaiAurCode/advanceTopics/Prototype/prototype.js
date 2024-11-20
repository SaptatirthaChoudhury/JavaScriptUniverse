// let myName = "hitesh    "
// let myChannel = "chai   "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

//heroPower.hitesh()
//myHeros.hitesh()

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

//myHeros.heyHitesh()
/**
 * Inheritance
 */
const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syantax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(myHeros.__proto__.__proto__);

String.prototype.trueLength = function () {
    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
}

//  "Babai    ".trueLength()
//  "Saptathirta   ".trueLength()