let arr = [1, 2, 4, 0, 4, 0, 5, 0]

function removeZeros(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === 0 && arr[j] != 0) {
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
        }
        if (arr[i] != 0) {
            i++
        }
    }

    return arr
}

console.log(removeZeros(arr))