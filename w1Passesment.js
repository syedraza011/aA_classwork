/*/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
**
** average(10, 20); // => 15
** average(5, 7); // => 6
** average(24, 32); // => 28
*/
/*let num1=10;
let num2=20;
console.log(average(num1,num2));
function average(num1, num2) {
    let avg= (num1+num2)/2;
    return avg;
}
  
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
  //module.exports = average

  //2

  /*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/
/*let tArray=[4,1,7];
tripler(tArray);
function tripler(TArray) {
  for(let i=0;i<tArray.length;i++){
    tArray[i]=tArray[i]*3;
    console.log(tArray[i]);
  }
  
}
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
//module.exports = tripler

//3

/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/
let end=13;
let newArray=[];
console.log(oddRange(end));
function oddRange(end) {
  for(let i=0;i<=end;i++){
    if(i %2!==0){
    newArray[i]=i;
    }
  }
  for(let i=0;i<=newArray.length;i++){
    
    console.log(newArray[i]);
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;