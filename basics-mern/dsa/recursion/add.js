let arr = [1, 2, 4, 5, 6, 7, 8, 9];

function add(arr, n) {
    return arr.reduce((a, v) => a + v);
}

function addRecursive(arr, n = arr.length) {
    if (n <= 0) return 0;
    return addRecursive(arr, n - 1) + arr[n - 1];
}
console.log(add(arr));
console.log(addRecursive(arr));
