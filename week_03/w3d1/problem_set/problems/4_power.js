/***********************************************************************
Write a function `power(base, exp)` that takes in two numbers, a base
and exponent. The function should return `base` raised to `exp` power.
Solve this using a loop.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/
let base=2;
let exp=5;
console.log(power(base, exp));
function power(base, exp) {
    let power=1;
    let i=1;
while(i<=exp){
    power=power*base;
    i++;
}
return power;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = power;
