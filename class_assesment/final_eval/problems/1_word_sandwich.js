/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'

Difficulty: Easy
*************************************************************************************/
console.log(wordSandwich('bread', 'cheese'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('BREAD', 'CHEESE'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('HeLLo', 'worLD'));   // => 'HELLOworldHELLO'
function wordSandwich(outerWord, innerWord) {
  let outWords=outerWord.toUpperCase();
  let inWords=innerWord.toLowerCase();
  return outWords+inWords+outWords;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = wordSandwich;
