// //type1
// function power(num, power) {
//     return Math.pow(num, power)
// }

// console.log(power(2, 18))

// // type2
// console.log(Math.pow(2, 18));

// // type3
// console.log(2 ** 18);

// in simple loop
// for (let i = 1; i <= 20; i++) {
//     console.log(Math.pow(2, i));
// }


// Packed in function
function powerInRange(num, range) {
    for (let i = 1; i <= range; i++) {
        // console.log(Math.pow(num, i));
        console.log(num**i);
    }
}

powerInRange(2, 20)