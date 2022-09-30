/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/
let min=3;
let max=20;
let step=5;
let str="";
console.log(stringRange(min, max, step));
function stringRange(min, max, step) {
 for(let i=3;i<max;i=i+step){
  str=str + ""+ i ;
  //console.log(i);
 }
return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange;


///Done///