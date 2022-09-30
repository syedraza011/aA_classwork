/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/
let start=1;
let end=4;
let array=[];
console.log(range(start, end));

function range(start, end) {
  
for(let i=start;i<=end;i++){
array[i-1]=i;
}
return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;

//done