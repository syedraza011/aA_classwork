/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/
let sentence = "app academy is cool";
console.log(shortestWord(sentence));
function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest=words[0];
  for (let i = 0; i < words.length; i++) {
    let word=words[i];
    if(shortest.length >word.length){
      shortest=word;
    }
  }
  return shortest;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
