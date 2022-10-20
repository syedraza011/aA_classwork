/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/
let arr1 = ["a", "b", "b", "c", "d", "c", "c", "d"];
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

let arr2 = ["fish", "fish", "dog", "cat", "dog", "dog"];
oddOnesOut(arr2); // => [ 'fish' ]
function oddOnesOut(array) {
  let result = [];
  let count = countChars(array);
  for (let char in count) {
    if (count[char] % 2 === 0) {
      result.push(char);
    }
  }
  return result;
}

function countChars(array) {
  let counter = {};
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (counter[char] === undefined) {
      counter[char] = 1;
    } else {
      counter[char] += 1;
    }
  }
  //console.log(counter)
  return counter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
