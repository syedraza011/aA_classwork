/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/
let max=10;
let num=2;
console.log(multiples(max, num));
function multiples(max, num){
  let array=[];
  let mul=0;
  for(let i=1;i<max;i++){
    mul =num*i;
    if(mul<max){
      array.push(mul);
    }
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
