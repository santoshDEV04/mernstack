function checkNum(num) {
    if ((num % 3 === 0 && num % 5 === 0) && num % 10 !== 0) {
        return true;
    }
}

console.log(checkNum(15))
