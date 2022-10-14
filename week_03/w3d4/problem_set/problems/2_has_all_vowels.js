/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/
console.log(hasAllVowels("have you gone biking?")); // => true
console.log(hasAllVowels("get out of the way, silly")); // => true
console.log(hasAllVowels("bootcamp prep")); // => false
console.log(hasAllVowels("hello world")); // => false)
function hasAllVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (str.indexOf(vowels[i]) === -1) {
      return false;
    }
  }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
