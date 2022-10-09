/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/
let array=['a', 'b', 'c'];
let obj={b: 2, c: 3}
console.log(valueConcat(array, obj));
function valueConcat(array, obj) {
  let newArray=[];
  for(let i=0;i<array.length;i++){
    let ele=array[i];
    let value=obj[ele];
    if(ele===undefined){
      newArray.push(ele);
    } 
    else {
      newArray.push(ele + value);
    }
  } 
return  newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
