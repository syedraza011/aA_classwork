//Write a function prime that takes in a number and returns a boolean,
//indicating whether the number is prime.
//A prime number is only divisible by 1 and itself.
// console.log(prime(2))  // true
// console.log(prime(5))  // true
// console.log(prime(11)) // true
// console.log(prime(4))  // false
// console.log(prime(9))  // false
// console.log(prime(-5)) // false

function prime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      return true;
    }
  }
}

console.log(prime(2)); // true
console.log(prime(5)); // true
console.log(prime(11)); // true
console.log(prime(4)); // false
console.log(prime(9)); // false
console.log(prime(-5)); // false
