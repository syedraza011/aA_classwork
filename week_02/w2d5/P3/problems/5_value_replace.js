/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/
let array=['a', 'b', 'c', 'd'];
let obj={a: 1, b: 2, d: 4}
console.log(valueReplace(array, obj));
function valueReplace(array, obj){
  let newArray=[];
  //for(let key in obj)
 for(let i=0;i<array.length;i++) {
    if(obj[array[i]]===undefined)
    {
      newArray.push(array[i]);
    }
      else{
        newArray.push(obj[array[i]]);
      }
    }
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
