
//const customError = new Error('This is a custom error message.');

// Throwing the custom error
//throw customError;

//________________________________________________________
// try {
//     throw new ReferenceError("throw custom error !!")
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack);
// }

//_________________________________________________________
// try {
//     let age = 200
//     if (age > 150) {
//         throw new ReferenceError("This is probably not true")
//     }
//     console.log(age);

// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   //  console.log(error.stack);
// }

//______________________________________________________________________

// Custom error class extending Error
class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
    }

    errMessage() {
        console.log(`${this.name} form errMessage method !`);
    }
}

const customErrorInstance = new CustomError("This is a custom error")
//console.log(customErrorInstance.name);
console.log(customErrorInstance);