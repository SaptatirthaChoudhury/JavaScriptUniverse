


class CoffeeMachine1 {
    #waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this.#waterAmount = value;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

let coffeeMachine = new CoffeeMachine1(100);
coffeeMachine.waterAmount = -99
console.log(coffeeMachine.waterAmount) // Now the access is under control, so setting the water amount below zero becomes impossible.

coffeeMachine.waterAmount = 102;
console.log(coffeeMachine.waterAmount)

/**
 Read-only “power”

 For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.

 That’s exactly the case for a coffee machine: power never changes.

 To do so, we only need to make getter, but not the setter:
 */


class CoffeeMachine2 {
    #power
    constructor(power) {
        this.#power = power;
    }

    get power() {
        return this.#power;
    }

}

// create the coffee machine
let coffeeMachine2 = new CoffeeMachine2(100);

console.log(`Power is: ${coffeeMachine2.power}W`); // Power is: 100W

coffeeMachine2.power = 25; // Error (no setter)
console.log(coffeeMachine2.power)

/**
 Getter/setter functions
Here we used getter/setter syntax.

But most of the time get.../set... functions are preferred, like this:
 */

class CoffeeMachine3 {
    #waterAmount = 0;     // Private field

    setWaterAmount(value) {
        if (value < 0) value = 0;
        this.#waterAmount = value;
    }

    getWaterAmount() {
        return this.#waterAmount;
    }
}

let coffeeMachine3 = new CoffeeMachine3()
coffeeMachine3.setWaterAmount(100)
console.log(coffeeMachine3.getWaterAmount())

// That looks a bit longer, but functions are more flexible. They can accept multiple arguments (even if we    don’t need them right now).

//On the other hand, get/set syntax is shorter, so ultimately there’s no strict rule, it’s up to you to decide.

/**
 Protected : What "protected" means in other languages: A protected member is accessible within the class and in subclasses (derived classes), but not from outside the class hierarchy.
 */

class Credentials {
    #password
    #email

    constructor(email, password) {
        this.#email = email
        this.#password = password
    }

    _logMe() {
        return {
            message: `You're logged In`,
            email: this.#email,
            password: `<>${this.#password}%$^*!`
        }
    }

}

class User2 extends Credentials {
    constructor(username, email, password) {
        super(email, password)
        this.username = username
    }


}

const Saapto = new User2("Saptatirtha", "saptatirtha@protonmail.com", "@0090")

console.log(Saapto._logMe())