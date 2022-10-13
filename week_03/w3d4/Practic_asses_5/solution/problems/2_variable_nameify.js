/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  var variableName = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (i === 0) {
      variableName += word.toLowerCase();
    } else {
      var capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      variableName += capWord;
    }
  }

  return variableName;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
