/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/
let array=[1, 1, 2, 3, 3];
let narray=[];
console.log(unique(array)); 
function unique(array) {
  
  for(let i=0;i<array.length;i++)
  {
    
    if(narray[i] !== array[i]){
        narray[i]=narray[i].push()
        
        console.log("inside if")
        //console.log(num)
        //console.log(array);
       
      }
      else {
        //narray.push(num);
      }
  }
  return narray;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
