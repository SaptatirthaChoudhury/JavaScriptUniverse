function Fibobacci(n) {
    if (n <= 1) {
        return n;

    }
    return Fibobacci(n - 1) + Fibobacci(n - 2);

}

let n = 7;
console.log(Fibobacci(n));