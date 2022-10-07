/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/
let array=[0, 1, -5, 3, 6];
console.log(minMaxProduct(array));
function minMaxProduct(array){
  let product=0;
  let min =array[0];
  let max=array[0];
  for(let i=0; i<array.length;i++){
    
    if(min > array[i]){
      min=array[i];
    }
    else if(max < array[i]){
        max=array[i];
    }
  }
  return min*max;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
