/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/
let max = 20;
console.log(fizzBuzz(max));
function fizzBuzz(max) {
  let array=[];
  for(let i=0;i<max ;i++){
    if(i % 3 === 0 && i % 5 !== 0 || i % 3 !== 0 && i % 5 === 0 ){
      array.push(i);
      //console.log("inside the if");
      //console.log(array);
    }
    else{
    }
  }
return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
