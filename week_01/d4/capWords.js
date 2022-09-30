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