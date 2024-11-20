function outer() {
    const message = "Hi paul!";

    return function inner() {
        console.log(message);

        // return message;
    }

    // return inner;
}

const innerFunct = outer();
//console.log(typeof innerFunct, innerFunct);
//console.log(innerFunct());
innerFunct()


