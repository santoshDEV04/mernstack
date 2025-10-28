let arr = ['48', '12', '66', '68', '01']
let arr2 = []
for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
    arr2 = [...arr2, arr[i]];
}
console.log(arr2);