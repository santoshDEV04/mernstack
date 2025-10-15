let a = 37;
let isPrime = true;

if (a < 2) {
      isPrime = false;
    } else {
  for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? 'prime' : 'not Prime');