// const factorial = function fac(n) {

//     return n < 2 ? 1 : n * fac(n - 1)
// }


// console.log(factorial(3))

// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//     {
//         result[i] = f(a[i]);
//     }

//     return result;
// }
// const f = function (x) {
//     return x * x * x;
// }
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f, numbers);
// console.log(cube);


function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
// returns "red, orange, blue, "
console.log(myConcat(', ', 'red', 'orange', 'blue'));

// returns "elephant; giraffe; lion; cheetah; "
console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));

// returns "sage. basil. oregano. pepper. parsley. "
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));

