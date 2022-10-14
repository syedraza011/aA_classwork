/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/
console.log(variableNameify(["is", "prime"])); // => 'isPrime'
console.log(variableNameify(["remove", "last", "vowel"])); // => 'removeLastVowel'
console.log(variableNameify(["MaX", "VALUE"])); // => 'maxValue'
function variableNameify(words) {
  let obtained = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i === 0) {
      obtained += word.toLowerCase();
    } else {
      let caped = word[0].toUpperCase() + word.slice(1).toLowerCase();
      obtained += caped;
    }
  }
  return obtained;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
