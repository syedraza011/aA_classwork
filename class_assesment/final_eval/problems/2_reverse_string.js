/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/
console.log(reverseString('taco'));        // => 'ocat'
console.log(reverseString('hello world')); // => 'dlrow olleh'
function reverseString(str) {
    let array=[];
    let words=str.split(" ");
for(let i=words.length-1;i>=0;i--){
    let newWord='';
    let word=words[i]
    for(let j=word.length-1;j>=0;j--){
        newWord +=word[j];
        
    }
    array.push(newWord);
 
}
return array.join(" ");
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
