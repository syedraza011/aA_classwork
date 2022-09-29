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
let sentence='hello world';
console.log(wordPeriods(sentence));
function wordPeriods(sentence){
    let array =sentence.split(" ");
    for(let i = 0; i < array.length; i++){
        array[i] =array[i] + ".";
    }
    array=array.join(" ");
    return array;
}