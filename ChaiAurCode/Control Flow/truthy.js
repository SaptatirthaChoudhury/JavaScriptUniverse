
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? undefined ?? 100
console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")