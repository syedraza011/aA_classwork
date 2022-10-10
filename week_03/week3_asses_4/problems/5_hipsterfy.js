/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
let sentence = "propr tonc panthr";
let vowels = "AEIOUaeiou";
console.log(hipsterfy(sentence))
function hipsterfy(sentence) {
  for (let i = sentence.length - 1; i >= 0; i--) {
    if (vowels.indexOf(sentence[i]) != -1) {
      let newWord = sentence.slice(0, i) + sentence.slice(i + 1);
      console.llog(newWord);
      newWord +=newWord;
    }
  }
  return newWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
