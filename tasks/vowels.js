let a = "Hello guys"
let count = 0;

let arr = a.split("")

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
        count++;
    }
}

console.log(count)


//or

function countVowels(str) {
    return str.match(/[aeiou]/gi).length || 0;
}

countVowels("Hello guys") // 3