function Largest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(Largest(arr));

let arr1 = [10,20,4,556,4891,1,12,46]
console.log(Largest(arr1));
