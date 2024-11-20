const { log } = require("console");

/**
 * Inside person object "this" refers to the properties and methods of person object but it is only work when function in non-Arrow mode otherwise "this" refers to outside object (if defined or it will show empty object in non-strict mode).
 */

const person = {
    name: "Alice",
    greet: function () {
        log(globalThis === this)
        log(global === this)
        log(this)
        log(`Hello, my name is ${this.name}`);
    }
};

person.greet();

let thisConcept = function () {

    log("Inside function")
    log(globalThis === this)
    log(global === this)

    log(this)
}
thisConcept("Saapto")

//log("Outside function")
//log(globalThis === this)
//log(global === this)

//log(this)