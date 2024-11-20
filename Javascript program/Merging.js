function Merge(A, n, B, m) {
    let C = [];
    let i = 0, j = 0, k = 0;
    while (i <= n - 1 && j <= m - 1) {
        if (A[i] > B[j]) {
            C[k] = B[j];
            j++; k++;
            if (A[i] > B[j]) {
                C[k] = B[j];
                j++; k++;
            }
            else {
                C[k] = A[i];
                i++; k++;
            }

        }
        else {
            C[k] = A[i];
            i++; k++;
        }

    }
    // If rest elements are there in first or second array //
    while (j <= m - 1) {
        C[k] = B[j];
        j++; k++;
    }
    while (i <= n - 1) {
        C[k] = A[i];
        i++; k++;
    }

    return C;
}
let A = [0, 9, 11, 15, 25, 28, 30, 35];              
let n = A.length;
let B = [ 1, 2, 5, 12, 18, 21];
let m = B.length;

console.log(Merge(A, n, B, m));