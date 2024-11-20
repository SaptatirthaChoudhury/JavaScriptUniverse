/*
function DelayedGreeter(name) {
    this.name = name
}

DelayedGreeter.prototype.greet = function () {
    setTimeout((function cb() {
        console.log(`Hello ${this.name}`);
    }).bind(this), 1000)
}

const greeter = new DelayedGreeter('World')
greeter.greet()
*/

// To get the rid off this bind function overhead we'll use arror function

function DelayedGreeter(name) {
    this.name = name
}

DelayedGreeter.prototype.greet = function () {
    setTimeout(() => {
        console.log(`Hello ${this.name}`);
    }, 1000)
}

const greeter = new DelayedGreeter('World')
greeter.greet()

