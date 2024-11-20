// function greet(hello) {
//     hello();
// }
// function hello() {      // This is callback function //
//     console.log("hello");
// }

// greet(hello);     // Passing function 'hello' as an agrument //

// _________________________________________________________________________ //

// function greet(hello) { // greet is higher order function which takes     function as an argument//

//     console.log("inside a greet function");
//     hello();

// }

// greet(() => { // passing function as a arguments which is called callback function //
//     console.log("Hello callback function 1");
// })

// greet(() => {
//     console.log("Hello callback function 2");
// })


// *********************************************************** //

// function outer() {
//     return function () {
//         console.log("function return");
//     }
// }

// var ans =   outer();

// ans()

// ******************************************************* //

// Settimeout function_______________________________ //


setTimeout(() => {
    console.log("Here I come ...");
}, 2000);

console.log("let me come first, he will come after 2 seconds");

function hello() {
    console.log("I come after 5 seconds");
}

setTimeout(hello, 5000);