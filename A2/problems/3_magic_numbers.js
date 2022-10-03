/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/
let max=20;
console.log(magicNumbers(max));
function magicNumbers(max) {
  let array=[];
  for(let i = 0; i < 20; i++){
    if( i % 4 === 0 && i % 6 !== 0 ||  i % 4 !== 0 && i % 6 === 0 ){
      array.push(i);
    }
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
