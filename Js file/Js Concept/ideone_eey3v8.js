// your code goes here
// let radius = 3;
// let perimeter = 15;
// let volume = 270;
// let areaOfBase = 0.5*radius*perimeter;
// let height = volume/areaOfBase;
// console.log(height);


// //===================================================
// let brick_h =  24;//cm
// let brick_w =  12;//cm
// let brick_l = 8; //cm
// let wall_h = 8; //meters
// let wall_w = 0.6;//meters
// let wall_l = 24; //meters

// let volume_of_wall = wall_h*wall_w*wall_l; //meter cube

// volume_of_wall = volume_of_wall * Math.pow(100, 3); //cm cube
// let volume_of_brick = brick_h*brick_w*brick_l;//cm cube

// let noOfBricks = (0.85 * volume_of_wall)/volume_of_brick;
// noOfBricks = Math.ceil(noOfBricks);

// console.log(noOfBricks);
// //===================================================

// let a =12;
// let b =16;
// let multiple = a>b ? a: b;
// while(true){
//   if(multiple %a ==0 && multiple%b ==0){
//     break;
//   }
//   multiple++;
// console.log(multiple);

//console.log(multiple);

// //===================================================

// let numOriginal = 371;
// let num = numOriginal;
// let numDigits =0;
// while( num > 0){
//   let lastDigit = num%10;
//   numDigits++;
//   num = parseInt(num/10);
// }
// console.log(numDigits);
// let sum =0;
// if(numDigits > 2){

// }else{
//   sum = -1;
// }

// console.log(sum);


// //===================================================


// let numOriginal = 371;
// let num = numOriginal;
// let numDigits =0;
// while( num > 0){
//   let lastDigit = num%10;
//   numDigits++;
//   num = parseInt(num/10);
// }
// console.log(numDigits);
// num = numOriginal;
// let sum =0;
// if(numDigits > 2){
//   do{
//     //ignore last digit
//     num = num/10;
//     //get last digit
//     let lastDigit = parseInt(num%10);
//     sum = sum+lastDigit;
//   }while(parseInt(num / 100) != 0);

// }else{
//   sum = -1;
// }

// console.log(sum);


// //===================================================

// let a =2;
// let power = 4;

// let result =1;

// // while(b > 0){
// //   result = result *a;
// //   b--;
// // }

// while(power>0){
//   if(power%2 !=0 ){ //power is odd
//     result = result*a;
//   }
//   a = a*a;
//   power = parseInt(power/2);
//   console.log(result);
// }
// console.log(result);

// //===================================================
let n = 10;
let nthFibonacci;
let prev = 0;
let curr = 1;
let temp;

if (n == 0) {
    nthFibonacci = 0;
}
else if (n == 1) {
    nthFibonacci = 1;
}
else {
    for (let i = 2; i <= n; i++) {
        temp = prev;
        prev = curr;
        curr = temp + prev;
        console.log(curr);
    }
    nthFibonacci = curr;
    //console.log(nthFibonacci);

}

