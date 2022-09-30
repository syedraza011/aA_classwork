
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
