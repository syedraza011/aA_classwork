//1
// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//01
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6
let lowNum=14;
let highNum=6;
console.log(logBetween(lowNum, highNum));

function logBetween(lowNum, highNum){
    if(lowNum<=highNum){
         for(var i=lowNum; i<=highNum; i++)
        {
             console.log(i);
         }
        
}
    else{
        console.log("Print nothing");
    }

}
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

//3
// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15
let max=20;
let i=0;
let j=0;
(printFives(max));
function printFives(max){
    for(i=0 ;i<max;i=i+5){
        console.log(i);
    }
    //2nd method
    while(j<max){
        if(j%5===0){
        console.log(j);
        }
    j++;
    }
    
}

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
    if(min<max)
    {
        for(let j=max-1; j>min; j--){
            console.log(j);
        }
    }
    else {
    
        console.log("Fix the values");
    }
}

//5
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365);
let sum=0;
let maximum=365;
sumNums(maximum); 
function sumNums(maximum){
    for(let j=0;j<=maximum;j++){
        //console.log(j);
    sum=sum+j;
       // console.log(sum);
    }
    console.log(sum);
}

//6

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
let number1=5;
let factor=0;
console.log(isFactorOf(number1, factor));
function isFactorOf(number1, factor){
    if(number1 % factor===0)
    {
        return true;
    }
    else{
        return false;
    }
}
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