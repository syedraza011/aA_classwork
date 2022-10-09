/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/
let word = "proper";
let vowel = "aeiouAEIOU";
console.log(hipsterfyWord(word));
function hipsterfyWord(word) {
  let afterV='';
  let beforeV='';
  let newWord='';
  for (let i = word.length - 1; i >= 0; i--) {
    if(vowel.indexOf(word[i]) !=-1){
      newWord=word.slice(0,i)+word.slice(i+1);
      return newWord;
    }

  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
