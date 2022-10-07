/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/
let num1 = 2;
let num2 = 3;
console.log(lcm(num1, num2));
function lcm(num1, num2) {
    let i = num1;
    while (true) {
        if (i % num2 === 0) {
            return i;
        } 
        
        i+=num1;
    }

       // return flase;
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
