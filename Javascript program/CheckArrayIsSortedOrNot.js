function check(arr, i) {
    let len = arr.length;
    if (i == len - 1) {
        return true;

    }
    if (arr[i] < arr[i + 1]) {
       return check(arr, i + 1);
    }
    else {
        return false;
    }
}

let arr = [2, 4, 5, 6, 12, 23, 30, 9];
console.log(arr);
let ans = check(arr, 0);
if (ans == true) {
    console.log("Given array is sorted");
}
else {
    console.log("Given array is not sorted");
}
