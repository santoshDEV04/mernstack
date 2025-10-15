function greatestAmongThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("First number is greatest among three");
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("Second number is greatest among three");
    } else {
        console.log("Third number is greatest among three");
    }
}

greatestAmongThree(5, 7, 9)
greatestAmongThree(3, 7, 4)
greatestAmongThree(55, 27, 9)

