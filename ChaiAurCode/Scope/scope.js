let price = 100;
const amount = 300;
var paid = 200;

// function hi() {
//     let price = 110;
//     const amount = 310;
//     var paid = 210;

//     console.log("INNER : ",price, amount, paid);
// }

console.log(price, amount, paid);
//hi();

{
    let price = 1000;
    const amount  = 3000;
    var paid = 2000;

}
/**
 * Since var doesn't follow block scope that's why value of paid variable has changed
 */
console.log(price, amount, paid); 
