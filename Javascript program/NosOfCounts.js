function CountNoOfZeroes(num, count) {
    if (num == 0) {
        return count;
    }

    let rem = num % 10;
    num = Math.floor(num / 10);

    if (rem == 0) {

        return CountNoOfZeroes(num, count + 1);

    }

    return CountNoOfZeroes(num, count);
}

let num = 30200400;
console.log("No of zerroes from given number = ", CountNoOfZeroes(num, 0));

