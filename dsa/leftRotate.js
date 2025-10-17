let arr = [1, 2, 3, 4, 5]

function reverseArr(arr, low, high) {
    let i = low;
    let j = high;
    while (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

function rotateArrayByK(arr, k) {
    k = k % arr.length
    let n = arr.length

    reverseArr(arr, 0, n-k-1)
    reverseArr(arr, k+1, n-1)
    reverseArr(arr, 0, n-1)

    return arr
}


console.log("Array after rotating by 2 positions:", rotateArrayByK(arr, 2));