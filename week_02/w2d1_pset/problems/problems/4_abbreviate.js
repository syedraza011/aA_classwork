/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
let sentence='bootcamp prep is fun';
let arr=[];
let word;
console.log(abbreviate(sentence));
function abbreviate(sentence) {
arr= sentence.split(" ");
console.log("")
for(let i=0;i<arr.length;i++)
{
    word = arr[i]. split(" "). length;
    console.log(word);
    if(word > 4){
        
        if(arr[i]==='a' || arr[i]==='e' || arr[i]==='i'|| arr[i]==='o'|| arr[i]==='u'){
            arr[i].pop();
        }
    }
    arr.push(arr[i]);
}

console.log(arr);
return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
