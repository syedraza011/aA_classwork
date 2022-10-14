/***********************************************************************
Write a function `mySelect(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. It should return a new array of all the elements
in the input array `arr` where the callback `cb` returns true.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]

Note that in the examples above, the callback functions only expect a
single paramter, but your `mySelect` function should still try to pass 3
parameters to the callback. This allows us to create a versatile
`mySelect` function that works with various callbacks.
***********************************************************************/
//let arr=[1,2,-33,4,5,6];
//let arr1=[12, -14, 4, -10.2, 0];
console.log(mySelect([1,2,3,4,5,6], isEven));
console.log(mySelect([12, -14, 4, -10.2, 0], isNegative));
function isEven(num) {
  if(num % 2 === 0){
    return true;
  }
}
function isNegative(num) {
  return num < 0;
}
 //console.log(mySelect(arr,isEven()));
  //console.log(mySelect(arr,isNegative()));
function mySelect(arr, cb) {
  let selected=[];
  for(let i=0;i<arr.length;i++){
   let newArray=cb([arr[i]],i,arr);
   if(cb([arr[i]],i,arr)){
      selected.push(arr[i]);
   }
    
    
  }
  return selected;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mySelect;
