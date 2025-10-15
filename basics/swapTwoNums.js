function swapTwoNums1(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
}
swapTwoNums1(100, 2222)


function swapTwoNums2(c, d) {
    c = c + d;
    d = c - d;
    c = c - d;

    console.log(`c is ${c}`);
    console.log(`d is ${d}`);
}

swapTwoNums2(300, 143)