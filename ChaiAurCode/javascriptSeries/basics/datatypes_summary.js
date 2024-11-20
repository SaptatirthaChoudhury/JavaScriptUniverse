// Primitive

// 7 types: String, Number, Boolean, null, undefined,  Symbol, BigInt

const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);   // false

const bigNumber = 29356298356228934555555n;
// console.log(bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions 

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "babai",
    age: 22
}

const myFunction = function () {
    console.log("Hello world");
}

myFunction();

const myFunction2 = () => {
    console.log("Hello babai");
}

myFunction2();

console.log(typeof myFunction2);

// Stack (Primitive),  Heap (Non-Primitive)
