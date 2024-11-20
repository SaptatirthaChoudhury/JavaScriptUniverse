/**
 * Callback is a function is passed as an argument to the another function
 */

// Just playing with callback function
function abc(xyz, pqr) {
   // console.log(xyz(), pqr());
}

abc(() => {
    return "hello"
}, () => {
    return "ji"
})


function greet(abc) {
   // abc();                     // executing the callback function hello
}

/**
 * We have defined a function call greet,  which take another function as an argument
 */

/**
 * How do we execute greet function ?
 * 1. We need to see what argument the function takes
 *   -- greet function takes another function as an argument, which has no argument
 * 2. We need to pass this function to execute greet function
 */

function passFunc() {
    console.log("Hello students");
}

//greet(passFunc);              // execution of greet function

function outer() {
    return function () {
        console.log("This is the function returned");
    }
}

//const innerFunc = outer();
//console.log(innerFunc);
//innerFunc();


/**
 *  As soon as I start executing the above function the callStack get created which is LIFO data structure which is initially empty. And then Global Execution Context (OR in short GEC) get created and GEC get inside the callStack. So both happen at the same time. What Javascript usually do it start executing the code line by line so it starts from first line so as soon as the function is defined it allocates the memory for the function. When I come to this line "const innerFunc = outer()" this is about to execute so every time a function is about to execute the Local Execution Context gets created so Local Execution Context created for outer() function goes to the callStack by push operation. For any function has to be executed it first be present inside the callStack so the outer() function Local Execution Context got inside the callStack and this outer() function get executed and after get executed and this again popped or removed from callStack. Now after the outer function control comes to innerFunc() function line and again Local Execution Context get created and pushed inside the callStack and it executed again and after executed it popped from the callStack.
 */

/**
 * setTimeOut( function, timeout in miliseconds, option arguments)
 */
console.log("Hello Students");

function callback() {
    console.log("Are you getting the hold of callbacks ???");
}

setTimeout(callback, 3000);
console.log("I am the last line, but will not be executed last... If you know, you know Async");

/**
 * Let's explain the above code :
 * 
 * First of all a Global Execution Context get created in the begining. Once stack will get created and you go call it as callStack. And GEC (Global Execution Context) will be pushed into the callStack. 
 */