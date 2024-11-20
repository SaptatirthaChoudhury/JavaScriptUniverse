function fibo(prev, curr, n) {
    if (curr == n) {
        return;

    }
    let temp = prev + curr;
    console.log(temp);
    prev = curr;
    curr = temp;
    fibo(prev, curr, n);
}

let n = 21;
let prev = 0, curr = 1;
console.log(prev);
console.log(curr);
fibo(prev, curr, n);