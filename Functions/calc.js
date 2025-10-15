function calc(num1, num2, input) {
  switch (input) {
    case '+':
      console.log(num1 + num2);
      break;

    case '-':
      console.log(num1 - num2);
      break;

    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;

    default:
      console.log('not given anything');
      break;
  }
}

calc(3, 6, '-');
calc(43, 6, '*');
calc(3, 9, '/');
