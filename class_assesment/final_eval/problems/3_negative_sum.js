/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/
console.log(negativeSum([-3, 12, -5, -2, 3])); // => -10
function negativeSum(arr) {
    let neg=0;
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(num<0){
        neg +=num;
    }
    
}
return neg;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;
