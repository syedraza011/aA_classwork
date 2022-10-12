// Question 2
//Write a function mostVowels that takes in a
//sentence string and returns the word of the
//sentence that contains the most vowels.

function mostVowels(sentence) {
  let words = sentence.split(" ");
  count[word] = 0;
}
let word = "wonderful";
console.log(countVowels(word));
function countVowels(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
