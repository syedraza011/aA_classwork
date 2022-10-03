/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/
let start=2;
let end=7;
console.log(reverseRange(start, end));
function reverseRange(start, end) {
  let array=[];
  for(let i=end-1;i > start; i--){
    array.push(i);
  }
  return array;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
