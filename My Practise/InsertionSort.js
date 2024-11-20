function InsertionSort(arr, size) {
    for (let i = 0; i < size; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (i >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }

}

let arr = [5, 4, 10, 1, 6, 2, 14, 23, 90];
let size = arr.length;
console.log("Before Sorting : ", arr);
InsertionSort(arr, size);
console.log("After Sorting : ", arr);