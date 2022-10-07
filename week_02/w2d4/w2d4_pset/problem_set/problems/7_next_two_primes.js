/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
let num = 8;

function isPrime(n){
if(n<2){
    return false;
}
for(let i=2;i<num;i++){
    
}

}
}
function nextTwoPrimes(num) {
  let i = num;
  let counter=0;
  while (counter !== 2) {
    
        if (i% 2 !== 0) {
      console.log(i);
      counter++;
    }
    i++;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
