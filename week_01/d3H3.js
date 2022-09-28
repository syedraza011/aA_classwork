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