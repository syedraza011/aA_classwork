/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/
console.log(longestLetterStreak("ACCA", ["C"])); // => 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // => 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // => 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // => 5
function longestLetterStreak(str, searchLetters) {
  let maxCount = 0;
  let preCounter = 0;
  let currentCounter = 0;
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
    if (searchLetters.includes(char)) {
     // console.log("Current--> "+currentCounter);
      currentCounter++;
    }
    else {
      currentCounter=0;
    }
    if (maxCount < currentCounter) {
      maxCount = currentCounter;
    }

  }
return maxCount;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;
