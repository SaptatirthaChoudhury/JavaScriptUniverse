function greet(){
    console.log("hello");
}

function welcome(anotherFunction){
    anotherFunction();
    console.log("Welcome to this");
}

welcome(greet);

setTimeout(greet, 2000);
console.log("this is js");
