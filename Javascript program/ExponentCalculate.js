function exponent(base, power) {

    if (power == 0) {

        return 1;
    }
    return base * exponent(base, power - 1);

}
let base = 2;
let power = 5;
let result = exponent(base, power);
console.log(result);