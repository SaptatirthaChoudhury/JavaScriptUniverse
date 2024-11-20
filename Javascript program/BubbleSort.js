function BubbleSort(arr, size) {
    let flag;
    for (let i = 0; i < size - 1; i++) {
        flag = 0;
        for (let j = 0; j < size - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }

        }
        if (flag == 0) {
            break;
        }
    }

}

let arr = [23, 12, 45, 2, 1, 90, 55, 32, 12, 20, 10];
let size = arr.length;

console.log("Before soring : ", arr);
BubbleSort(arr, size);
console.log("After sorting : ", arr);