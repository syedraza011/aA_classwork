1//// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson
array=["Anthony", "John", "Carson"];
logEach(array);
function logEach(array){
for(let i=0;i<array.length;i++){
    //console.log(i);
    console.log(i + ":"+ array[i]);
}
}
//2

console.log(" Write a function range(start, end) that returns an array that contains all numbers between 'start' and 'end' in sequential order.")
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []
let start=10;
let end=15;
range(start, end);
function range(start, end){
for(let i=start; i<=end;i++){
    console.log(i);
}
}