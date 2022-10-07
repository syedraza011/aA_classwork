/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.

Note: Assume both arrays have unique elements.
//Example:
// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// arrayDiff(array1, array2) // => [1, 2, 43 ,4]

// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// arrayDiff(array3, array4) // => ['a', 'ab', 'c', 'c']
***********************************************************************/
arr1 = ["a", "ab", "c", "d", "c"];
arr2 = ["d"];
console.log(arrayDiff(arr1, arr2));
array1 = [1,23,2,43,3,4]
array2 = [3, 23]
console.log(arrayDiff(array1, array2))
function arrayDiff(arr1, arr2) {
  let newArray = [];
  
  for (let i = 0; i < arr1.length; i++) {
    let flag=false;
    let num1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (num1 === arr2[j]) {
        flag=true;
      }
      
    }
    if(!flag){
      newArray.push(num1);
    }
  }
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayDiff;
