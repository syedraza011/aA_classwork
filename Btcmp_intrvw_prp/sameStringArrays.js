// Given two string arrays word1 and word2, 
//return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order 
//forms the string.
// Example 1:// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

let word1 = ["a", "bc"];
let word2 = ["ab", "c"];
console.log(arrayStringsAreEqual(word1, word2));
function arrayStringsAreEqual(word1, word2) {
  let nWord1=word1.join(" ");
  let nWord2=word2.join(" ");
  for(let i=0;i<nWord1.length;i++){
    let aWord=nWord1[i];
    console.log("a Word===--->> "+aWord);
    for(let j=0;j<nWord2.length;j++){
      if(aWord !==word2[i]){
       
      }
      return false;
    }
  }
  return true;
};