/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/
let array=[1, 1, 2, 3, 3];
console.log(unique(array)); 
function unique(array) {
  
  let newArr = [];
  // narray[0]=array[0];
  for(let i=0;i<array.length;i++)
  {
    if((newArr.indexOf(array[i]))===-1)
    {
      //console.log("inside the if");
      newArr.push(array[i]);
      //console.log(newArr);
    }
    
  }
  return newArr;
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
