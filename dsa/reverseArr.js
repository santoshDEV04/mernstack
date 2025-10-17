export function reverseArr(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];

let reversedArr = reverseArr(arr);

for (let i = 0; i < reversedArr.length; i++) {
    console.log(reversedArr[i]);
}

