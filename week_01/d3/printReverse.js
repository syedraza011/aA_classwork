//4
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91
let min=94;
let max=92;
printReverse(min, max);
function printReverse(min, max){
    if(min<max){
        for(let j=max-1; j>min; j--){
        console.log(j);
        }
    }
    else{
    console.log("Fix the values");
    }
}