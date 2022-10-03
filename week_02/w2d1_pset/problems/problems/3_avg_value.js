/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
array=[100,60,64];
let sum=0;
console.log(avgValue(array));
function avgValue(array) {
    for(i=0;i<array.length;i++){
    sum=sum + array[i];
    console.log(sum);
    }
    return sum/array.length;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
