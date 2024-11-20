/**
 * Pure function
 */

function sum(a, b) {
    return a + b;
}

console.log(sum(3, 7));

/**
 * Impure function
 */

function sumImpure(a, b) {
    return a + b + Math.random();
}

console.log(sumImpure(3, 7));

// Pure functions are also called stateless and Impure functions are also called stateful ______ //

// Stateless means output is only dependent on input
// And stateful is something depends on plus some other criterias ____ //
// ## Also learn where stateful and stateless system being used in real world applications and why _____ //

