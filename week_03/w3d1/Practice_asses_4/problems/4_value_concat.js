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
let obj={b: 2, c: 3};
console.log(valueConcat(array, obj))
function valueConcat(array, obj) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    var value = obj[ele];
    if (value === undefined) {
      newArray.push(ele);
    } else {
      newArray.push(ele + value);
    }
  }

  return newArray;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
