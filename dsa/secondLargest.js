function secondLargest(arr) {
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

function seconLargestWithSorting(arr) {
    arr.sort()

    return arr[arr.length-2]
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(secondLargest(arr));

let arr1 = [10,20,4,556,4891,1,12,46]
// console.log(secondLargest(arr1));

// console.log(seconLargestWithSorting(arr));

console.log(arr.reduce((a, v)=> v>a));