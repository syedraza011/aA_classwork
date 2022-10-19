/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'
function reverseHipsterfy(sentence) {
  let newWords = [];
  let words = sentence.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let ch = vowelsRemover(word);
    newWords.push(ch);
  }
  return newWords.join(" ");
}
function lastIndex(word) {
  vowels = "aeiouAEIOU";
  for (let i = word.length - 1; (i) => 0; i--) {
    let char = word[i];
    if (vowels.indexOf(char)>-1) {
      return i;
    }
  }
}
function vowelsRemover(word) {
  vowels = "aeiouAEIOU";
  let sen = "";
  for (let i = 0; i < word.length; i++) {
    let lastV = lastIndex(word);
    //console.log("lastV"+lastV)
    let char = word[i];
    if (vowels.indexOf(char) === -1 || lastV === i) {
      sen += char;
    }
  }
  return sen;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
