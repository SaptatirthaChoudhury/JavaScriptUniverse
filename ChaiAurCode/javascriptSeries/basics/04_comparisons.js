
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons >, <, >=, <=  work differently. Comparison converts null to a number, treating it as 0. That's why line no. 7 shows true and line no. shows false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Here above comparisons always generate confusion to the beginner developers

// ===

console.log("2" === 2);