let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];

function removeDuplicates(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1)
        }
    }
}

console.log(removeDuplicates(arr));