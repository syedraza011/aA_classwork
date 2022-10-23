/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
console.log(secondLargest([10, 7])); //=> 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/
console.log(secondLargest([10, 7])); //=> 7;
console.log(secondLargest([3, 1, 5, 4, 7]))// => 5;
function secondLargest(array) {
    
    let max=-1;
    let secondMax=-1;
for(let i=0;i<array.length;i++){
    let num=array[i];
    if(max<num){
        secondMax=max;
        max=num;
    } else if(num>secondMax){
        secondMax = num
    }
    //console.log("Max---> "+max)
    //console.log("Prev Max---> "+secondMax)
}
return secondMax
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = secondLargest;
