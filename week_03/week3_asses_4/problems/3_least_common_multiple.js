/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/
let num1=2;
let num2=3;
console.log(leastCommonMultiple(num1, num2));
function leastCommonMultiple(num1, num2) {
  
    let i=num1;
    while (true) {
      if (i % num2 === 0) {
          return i;
      } 
      
      i+=num1;
  }

  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
