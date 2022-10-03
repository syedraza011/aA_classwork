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
let end=6;
let newArray=[];
  (oddRange(end));
function oddRange(end) {
  for(let i=1;i<=end;i++){
    if(i %2 !== 0){
    newArray.push(i);
    }
  }
  console.log(newArray);
}

