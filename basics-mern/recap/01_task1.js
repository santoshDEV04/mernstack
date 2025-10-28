function add(a, b) {
    return a + b;
}

let subtract = function(a, b){
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let division = (a, b) => a / b;

function calc(num1, num2 , symbol) {
    if (symbol == '+') {
        console.log( add(num1, num2));
    } else if (symbol == '-') {
       console.log( subtract(num1, num2));
    } else if (symbol == '*') {
      console.log(  multiply(num1, num2));
    } else if (symbol == '/') {
       console.log( division(num1, num2));
    } else {
        console.log("Wrong Symbol");
    }
}

calc(3, 4,"+");
calc(3, 4,"-");
calc(3, 4,"*");
calc(3, 4,"/");

//write a single function to perform all the operations.
