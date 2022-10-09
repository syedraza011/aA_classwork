/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/
let num1=15;
let num2=25;
console.log(greatestCommonFactor(num1, num2));
function greatestCommonFactor(num1, num2) {
  while(num1 % num2 > 0){
    let remainder=num1%num2;
    num1=num2;
    num2=remainder;
  }
  return num2;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
