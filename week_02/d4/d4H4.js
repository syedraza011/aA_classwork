/*1//// Write a function `logEach(array)` that prints every element of the array and its
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
let arry=[];
let start=10;
let end=15;
//range(start, end);
console.log(range(start, end));
function range(start, end){
for(let i=start; i<=end;i++){
    arry.push(i);
    //console.log(i);
}
return arry;

}
*/
//3
console.log("Write a function sumArray(array) that takes in an array of numbers that returns the total sum of them.")
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30
let array=[5,6,4];
let sum=0;
console.log(sumArray(array));
function sumArray(array){
    for(let i = 0; i < array.length; i++)
    {
         sum=sum+array[i];
        //console.log(array[i]);
    }
    return sum;
}
//4

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']
let words = ['hello', 'boOtCaMp', 'PREP!'];

console.log(capWords(words));
function capWords(words){
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
        //words.toUpperCase(i);
    }
    return words;
}
//5

console.log("Write a function `wordPeriods(sentence)` that takes in a sentence and returns a newsentence where every word has period after it.")
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
let sentence='what is the weather today';
console.log(wordPeriods(sentence));
function wordPeriods(sentence){
    let array =sentence.split(" ");
    for(let i = 0; i < array.length; i++){
        array[i] =array[i] + ".";
    }
    array=array.join(" ");
    return array;
}
//6 
console.log(" Write a function `maxValue(array)` that returns the largest value in `array`.Assume `array` is an array of numbers.")
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43
let myArray =[122,6,43,2222];

console.log(maxValue(myArray));
function maxValue(myArray){
    let max=0;
for(let i=0;i<myArray.length;i++)
{
    
    if(max< myArray[i])
    {
        max=myArray[i];
    }
}
return max;
}
//7


console.log(" Write a function `myIndexOf(array, target)` that takes in an array of numbers and a target number as arguments.");
console.log(" It should return the index value of the target if it is present in the array or -1 if it is not present.");
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1
let nArray=[1,2,3,4,5];
let target=4 ;
console.log(myIndexOf(nArray, target));
function myIndexOf(nAarray, target){
    
for(let i=0;i<nArray.length;i++)
{
    if(nArray[i]===target)
    {
        console.log(nAarray);
        return nArray.indexOf(nAarray[i]);
    }
}
return -1;
}

//8
console.log(" Write a function `factorArray(array, number)` that takes in an array of")
console.log("numbers and a number and returns an array of all the factors.")
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []
let factorNumber=20;
let factorAarray=[2,3,4,5,6];
let newFactorArray=[];
console.log(factorArray(factorAarray,factorNumber));
function factorArray(factorAarray, factorNumber){

for(let i=0; i<factorAarray.length;i++){
    if(factorNumber % factorAarray[i] === 0)
    {
        //console.log(i);
    newFactorArray.push(factorAarray[i]);
    }
}  
return newFactorArray;  
}