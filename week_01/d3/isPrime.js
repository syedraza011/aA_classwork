
//8
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true
let number=2017;
console.log(isPrime(number));
function isPrime(number){
    if(number<2){
        console.log("Not a prime number");
    }
    else
    {
        for(let j=2; j<=number; j=j+1){
            if(number% j===0){
            return false;
        }
        else{
            return true;
        }
        }
    }
}