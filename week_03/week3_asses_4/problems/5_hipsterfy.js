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
let sentence = "proper tonic panther";
console.log(hipsterfy(sentence));
function hipsterfy(sentence) {
  let words = sentence.split(" ");
  let newSent = [];
  for (let word of words) {
    newSent.push(removeVowels(word));
  }
  return newSent.join(" ");
}

function removeVowels(word) {
  // let newWord = "";
  let vowels = "AEIOUaeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
      // console.log(newWord);
      // return newWord;
    }
  }
  return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
