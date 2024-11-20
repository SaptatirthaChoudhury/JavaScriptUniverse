let prev = 0, curr = 1;
let temp, n = 21;
console.log(prev);
console.log(curr);
while (curr <= n - 1) {
    temp = prev + curr;
    console.log(temp);
    prev = curr;
    curr = temp;
}