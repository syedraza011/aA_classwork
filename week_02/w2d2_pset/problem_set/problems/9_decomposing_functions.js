/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/
//let number=4;
//console.log(isPrime(number));
function isPrime(number) {
  if(number <2){
    return false;
  } 
  for(let i=2;i<number;i++){
    if(number % i===0){
      return false;
    } 
  }
      return true;
      
} //ending for

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/
let n=4;
console.log(firstNPrimes(n));
function firstNPrimes(n) {
  let counter=0
  let primeNumbers=[];
  // if(n < 2){
  //   return primeNumbers;
  // }
let i = 2;
while(counter !==n){
  if(isPrime(i)){
    primeNumbers.push(i);
    counter++;
  }
  i++;
}

return primeNumbers;
}

/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/
console.log(" 0"+ sumOfNPrimes(0)); // => 0
console.log("1"+sumOfNPrimes(1)); // => 2
console.log("4"+sumOfNPrimes(4));
function sumOfNPrimes(n) {
let nPrimes=firstNPrimes(n); // [2,3,5,7]
//console.log(nPrimes);
let sum=0;

for(let i=0;i<nPrimes.length;i++){

  sum +=nPrimes[i];
}
return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  isPrime: isPrime,
  firstNPrimes: firstNPrimes,
  sumOfNPrimes: sumOfNPrimes
};
