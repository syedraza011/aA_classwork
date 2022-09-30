
//7
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18
let max=20;
let j=0;
    fizzBuzz(max);
function fizzBuzz(max){
    for(j=0;j<max;j++){
        if(j%3===0 && j%5!==0 || j%3!==0 && j%5 ===0){
        console.log(j);
        }
    }
}