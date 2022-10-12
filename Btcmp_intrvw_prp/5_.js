//Write a function primeFactors that takes in a number and
//returns an array containing all of the prime factors of the given number.
//console.log(primeFactors(24)); // [2, 3]
//console.log(primeFactors(60)); // [2, 3, 5]
console.log(primeFactors(24)); // [2, 3]
console.log(primeFactors(60)); // [2, 3, 5]
function primeFactors(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    //console.log("loop")
    if (isPrime(i) && (n % i=== 0)) {
      //console.log("Prime")
      arr.push(i);
    }
  }
  return arr;
}
/*function isFactor(num) {
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}*/
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    return true;
}
