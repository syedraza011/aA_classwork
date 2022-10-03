
//2
/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**** Examples:
*** tripler([1,2,3]); // => [ 3, 6, 9 ] || tripler([4, 1, 7]); // => [ 12, 3, 21 ] */

let tArray=[4,1,7];
let nArray=[];
console.log(tripler(tArray));
function tripler(tArray) {
  for(let i=0;i<tArray.length;i++){
    let m=tArray[i]*3;
    nArray.push(m);
  }
  return nArray;
}


