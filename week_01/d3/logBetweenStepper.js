
//2

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15
let min=-10;
let max=20;
let step=5;
console.log(logBetweenStepper(min, max, step));
function logBetweenStepper(min, max, step){
    if(min<max){
        for(let it=min; it<=max; it=it+step){
        console.log(it);
        }
    }
    else{
    for(let it=max; it<=min; it=it-step){
        console.log(i);
        }
    }
}

