/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/
let array = [1, 5, 2, 0, 4];
console.log(divisibleByFivePairSum(array));
function divisibleByFivePairSum(array) {
  let sumArray = [];
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = i+1; j < array.length; j++) {
      let num2 = array[j];
      if ((num1 + num2) % 5 === 0) {
        sumArray.push([i, j]);
      }
    }
  }
  return sumArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
