/***********************************************************************
Write a recursive function `factorial(n)`, that returns the factorial
of the number `n`.

For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Hint: use `if (n === 1)...` as the base case.

Check today's recursive notes if you need help.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/
console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800
function factorial(n) {
if(n===1){
    return n;
}
return n*factorial(n-1);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = factorial;
