

function numberOfSteps(num) {
    return helper(num, 0);
}

function helper(num, steps) {
    if (num == 0) {
        return steps;
    }

    if (num % 2 == 0) {
        return helper(num / 2, steps + 1);
    }
    return helper(num - 1, steps + 1);
}
let num = 14;
console.log(numberOfSteps(num));