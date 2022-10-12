//Write a function pickPrimes that takes in an array of numbers and
//returns a new array containing only the prime numbers.
//console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
//console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]
function pickPrimes(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (isprime(array[i])) {
        arr.push(array[i]);
        }
    }

    return arr;
}

function isprime(num) {
    if (num < 2) {
        return false;
    }
    for(let i=2;i<num;i++){
        if (num % i !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

