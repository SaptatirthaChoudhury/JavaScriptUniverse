function PowerOf2(n) {
    if (n == 0) {
        return 1;
    }


    return 2 * PowerOf2(n - 1);
}
let num = 5;
console.log(PowerOf2(num));