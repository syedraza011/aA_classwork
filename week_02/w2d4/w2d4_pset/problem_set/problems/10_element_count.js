/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/
let array = ["a", "a", "b", "b"];
console.log(elementCount(array));
function elementCount(array) {
  let obj = {};
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
        obj[key]++
    }
  }
  return obj;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = elementCount;
